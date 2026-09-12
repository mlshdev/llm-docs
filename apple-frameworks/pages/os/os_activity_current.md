> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_activity_current](https://developer.apple.com/documentation/os/os_activity_current)

# OS_ACTIVITY_CURRENT

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A special value that selects the current activity, if there is one.

## Declaration

```objectivec
#define OS_ACTIVITY_CURRENT
```

<a id="Discussion"></a>

## Discussion

When creating a new activity, pass this value as the activity’s parent to create the new activity with the current activity as its parent. If there is no active activity, the creation function returns the new activity as a top-level activity without a parent.

## See Also

### Choosing a Special Activity

- [OS_ACTIVITY_NONE](os_activity_none.md): A special value that indicates a nonexistent activity.
