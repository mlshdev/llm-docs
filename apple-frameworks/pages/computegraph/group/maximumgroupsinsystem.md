> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/group/maximumgroupsinsystem

# group::maximumGroupsInSystem

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Returns the maximum number of groups allowed in the particle system.

## Declaration

```swift
int group::maximumGroupsInSystem()
```

<a id="return-value"></a>

## Return Value

The total number of groups that can exist in the system

<a id="discussion"></a>

## Discussion

Use this function to determine the total capacity of groups in the system, which is useful for normalizing group indices or creating group-based patterns.

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/group__maximumGroupsInSystem.svg)
