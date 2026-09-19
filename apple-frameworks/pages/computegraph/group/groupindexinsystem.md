> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/group/groupindexinsystem

# group::groupIndexInSystem

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Returns the index of the current group within the particle system.

## Declaration

```swift
int group::groupIndexInSystem()
```

<a id="return-value"></a>

## Return Value

The zero-based index of this group in the system

<a id="discussion"></a>

## Discussion

Use this function to identify which group the current element belongs to, enabling group-specific behaviors and calculations across multiple groups.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/group__groupIndexInSystem.svg)
