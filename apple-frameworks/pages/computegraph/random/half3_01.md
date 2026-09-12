> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/random/half3_01](https://developer.apple.com/documentation/computegraph/random/half3_01)

# random::half3_01

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Generates a pseudo-random 3D vector with half-precision components between 0 and 1.

## Declaration

```swift
half3 random::half3_01()
```

<a id="return-value"></a>

## Return Value

A pseudo-random 3D half-precision vector with components in the range \[0.0, 1.0\].

<a id="discussion"></a>

## Discussion

This function generates a random 3D vector where each component is independently generated in the range \[0.0, 1.0\] using half-precision floating-point format. The internal random seed is incremented for subsequent calls.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/random__half3_01.svg)
