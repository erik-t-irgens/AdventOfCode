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

This problem is presented on the first day at [adventofcode.com](https://adventofcode.com). 

The Prompt:

```
Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.
For example, suppose your expense report contained the following:

1721
979
366
299
675
1456

In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger.Find the two entries that sum to 2020; what do you get if you multiply them together ?
```
Takeaways:
* Iterate through an iterable (JSON? Array?) of integers
* Compare two integers (i, j) at a time and evaluate their sum.
* If the sum of two integers equals 2020, return the product of integers i and j.

## Problem 2

This problem is presented on the first day at [adventofcode.com](https://adventofcode.com), which is only accessible if the first problem has been completed. 

The Prompt:

```
Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

In your expense report, what is the product of the three entries that sum to 2020?
```
Takeaways:
* Iterate through an iterable (JSON? Array?) of integers
* Compare three integers (i, j, k) at a time and evaluate their sum.
* If the sum of three integers equals 2020, return the product of integers i, j, and k.