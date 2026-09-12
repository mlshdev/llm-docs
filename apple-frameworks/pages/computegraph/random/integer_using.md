> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/random/integer_using](https://developer.apple.com/documentation/computegraph/random/integer_using)

# random::integer_using

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Generates a pseudo-random 32-bit unsigned integer using a specific seed.

## Declaration

```swift
uint random::integer_using(uint seed)
```

## Parameters

- `seed`: The seed value to use for random number generation.

<a id="return-value"></a>

## Return Value

A pseudo-random 32-bit unsigned integer.

<a id="discussion"></a>

## Discussion

This function generates a random integer covering the full range of 32-bit unsigned values using the provided seed. The seed is not modified, allowing for reproducible random number generation. Use this when you need deterministic randomness or want to control the random sequence independently.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/random__integer_using.svg)
