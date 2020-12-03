# AdventOfCode
 Working through the advent calendar of code!


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#problem1">Problem 1</a></li>
    <li><a href="#problem2">Problem 2</a></li>
  </ol>
</details>

## Problem 1

This problem is presented on the second day at [adventofcode.com](https://adventofcode.com). 

The Prompt:

```
Example:
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc

Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

How many passwords are valid according to their policies?
```
Takeaways:
* Keep track of number of "valid passwords"
* Parse data as an array containing strings, each string containing a whole line.
* Iterate through the array of strings
* Split the string in a way to define max, min, defining character, and password
* Iterate over each password entry, comparing the characters to their constrains of min/max/character
* Keep track of how many instances of "character" exist in the password.
* If valid, increment "valid passwords" holder.
* Return valid password count.

## Problem 2

This problem is presented on the second day at [adventofcode.com](https://adventofcode.com), which is only accessible if the first problem has been completed. 

The Prompt:

```
Each policy actually describes two positions in the password, where 1 means the first character, 2 means the second character, and so on. (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) Exactly one of these positions must contain the given letter. Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

Given the same example list from above:

1-3 a: abcde is valid: position 1 contains a and position 3 does not.
1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.
How many passwords are valid according to the new interpretation of the policies?
```
Takeaways:
* Keep track of number of "valid passwords"
* Parse data as an array containing strings, each string containing a whole line.
* Iterate through the array of strings
* Split the string in a way to define position 1, position 2, defining character, and password
* Check the locations given by "position 1" and "position 2" in the password string for character.
* If both or neither position have the defined character, it is false. If only one location has defined character, it is a "valid password"
* If valid, increment "valid passwords" holder.
* Return valid password count.
