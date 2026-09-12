> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/group/elementmaximumingroup](https://developer.apple.com/documentation/computegraph/group/elementmaximumingroup)

# group::elementMaximumInGroup

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Returns the maximum number of elements that can exist in the group.

## Declaration

```swift
int group::elementMaximumInGroup()
```

<a id="return-value"></a>

## Return Value

The maximum number of elements allocated for this group

<a id="discussion"></a>

## Discussion

Use this function to determine the fixed capacity of particles per group, which is useful for normalizing element indices or managing group resources.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/group__elementMaximumInGroup.svg)
