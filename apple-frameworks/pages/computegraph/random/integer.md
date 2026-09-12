> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/random/integer](https://developer.apple.com/documentation/computegraph/random/integer)

# random::integer

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Generates a pseudo-random 32-bit unsigned integer.

## Declaration

```swift
uint random::integer()
```

<a id="return-value"></a>

## Return Value

A pseudo-random 32-bit unsigned integer.

<a id="discussion"></a>

## Discussion

This function generates a random integer covering the full range of 32-bit unsigned values and increments the internal random seed for subsequent calls.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/random__integer.svg)
