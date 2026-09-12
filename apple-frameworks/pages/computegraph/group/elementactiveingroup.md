> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/group/elementactiveingroup](https://developer.apple.com/documentation/computegraph/group/elementactiveingroup)

# group::elementActiveInGroup

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Returns the number of currently active elements in the group.

## Declaration

```swift
int group::elementActiveInGroup()
```

<a id="return-value"></a>

## Return Value

The count of active elements currently in the group

<a id="discussion"></a>

## Discussion

Use this function to determine how many particles are currently alive in the group, which may be less than the maximum if some particles have expired or not yet spawned.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/group__elementActiveInGroup.svg)
