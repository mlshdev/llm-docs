> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/random/float_01](https://developer.apple.com/documentation/computegraph/random/float_01)

# random::float_01

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Generates a pseudo-random single-precision float between 0 and 1.

## Declaration

```swift
float random::float_01()
```

<a id="return-value"></a>

## Return Value

A pseudo-random single-precision float in the range \[0.0, 1.0\].

<a id="discussion"></a>

## Discussion

This function generates a random value in the range \[0.0, 1.0\] using single-precision floating-point format and increments the internal random seed for subsequent calls.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/random__float_01.svg)
