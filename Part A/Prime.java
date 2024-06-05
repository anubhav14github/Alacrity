import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Prime {

    //check if a number is prime and return its factors if not
    public static String checkPrime(int number) {
        if (number <= 1) {
            return "Number should be greater than 1";
        }

        List<Integer> factors = new ArrayList<>();
        for (int i = 2; i <= number / 2; i++) {
            if (number % i == 0) {
                factors.add(i);
            }
        }

        if (factors.isEmpty()) {
            return "Prime!";
        } else {
            return "Factors: " + factors;
        }
    }

    //calculate all prime numbers in a given range
    public static List<Integer> findPrimesInRange(int min, int max) {
        List<Integer> primes = new ArrayList<>();
        for (int i = min; i <= max; i++) {
            if (isPrime(i)) {
                primes.add(i);
            }
        }
        return primes;
    }

    //determine if a number is prime
    private static boolean isPrime(int number) {
        if (number <= 1) {
            return false;
        }
        for (int i = 2; i <= number / 2; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        //user input for single number prime check
        System.out.print("Enter a number to check if it is prime: ");
        int number = scanner.nextInt();
        String result = checkPrime(number);
        System.out.println("Number: " + number + " - " + result);

        //user input for range of numbers to find primes
        System.out.print("Enter the minimum value of the range: ");
        int min = scanner.nextInt();
        System.out.print("Enter the maximum value of the range: ");
        int max = scanner.nextInt();
        List<Integer> primesInRange = findPrimesInRange(min, max);
        System.out.println("Primes between " + min + " and " + max + ": " + primesInRange);

        scanner.close();
    }
}
