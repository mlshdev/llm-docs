> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/group/elementindexingroup

# group::elementIndexInGroup

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Returns the index of the current element within its group.

## Declaration

```swift
int group::elementIndexInGroup()
```

<a id="return-value"></a>

## Return Value

The zero-based index of the current element within its group

<a id="discussion"></a>

## Discussion

Use this function to identify which particle within the group is being processed, allowing you to create unique behaviors for different particles in the same group.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/group__elementIndexInGroup.svg)
