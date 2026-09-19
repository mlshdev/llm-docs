> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/random/seed

# random::seed

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Returns the current random seed, without incrementing it.

## Declaration

```swift
uint random::seed()
```

<a id="return-value"></a>

## Return Value

The current random seed as a 32-bit unsigned integer.

<a id="discussion"></a>

## Discussion

This function retrieves the current state of the random number generator’s seed without modifying it, allowing you to inspect or save the seed value for later use.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/random__seed.svg)
