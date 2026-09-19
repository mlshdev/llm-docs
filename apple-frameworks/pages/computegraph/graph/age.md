> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/graph/age

# graph::age

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Returns the age of the graph in seconds.

## Declaration

```swift
float graph::age()
```

<a id="return-value"></a>

## Return Value

The age of the graph in seconds

<a id="discussion"></a>

## Discussion

The age represents the total elapsed time since the graph was created or reset. This value continuously increases and is useful for time-based animations and effects.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/graph__age.svg)
