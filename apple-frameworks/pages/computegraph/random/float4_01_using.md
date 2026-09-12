> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/random/float4_01_using](https://developer.apple.com/documentation/computegraph/random/float4_01_using)

# random::float4_01_using

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Generates a pseudo-random 4D vector with single-precision components between 0 and 1 using a specific seed.

## Declaration

```swift
float4 random::float4_01_using(uint seed)
```

## Parameters

- `seed`: The base seed value to use for random number generation.

<a id="return-value"></a>

## Return Value

A pseudo-random 4D single-precision vector with components in the range \[0.0, 1.0\].

<a id="discussion"></a>

## Discussion

This function generates a random 4D vector where each component is independently generated in the range \[0.0, 1.0\] using single-precision floating-point format and sequential seed values (seed, seed+1, seed+2, seed+3). The seed is not modified, allowing for reproducible random number generation.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/random__float4_01_using.svg)
