> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/random/half_01_using](https://developer.apple.com/documentation/computegraph/random/half_01_using)

# random::half_01_using

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Generates a pseudo-random half-precision float between 0 and 1 using a specific seed.

## Declaration

```swift
half random::half_01_using(uint seed)
```

## Parameters

- `seed`: The seed value to use for random number generation.

<a id="return-value"></a>

## Return Value

A pseudo-random half-precision float in the range \[0.0, 1.0\].

<a id="discussion"></a>

## Discussion

This function generates a random value in the range \[0.0, 1.0\] using half-precision floating-point format and the provided seed. The seed is not modified, allowing for reproducible random number generation.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/random__half_01_using.svg)
