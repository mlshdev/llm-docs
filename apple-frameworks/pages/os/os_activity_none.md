> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_activity_none](https://developer.apple.com/documentation/os/os_activity_none)

# OS_ACTIVITY_NONE

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Macro  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A special value that indicates a nonexistent activity.

## Declaration

```objectivec
#define OS_ACTIVITY_NONE
```

<a id="Discussion"></a>

## Discussion

When creating a new activity, pass this value as the activity’s parent to create the new activity as a top-level activity without a parent.

## See Also

### Choosing a Special Activity

- [OS_ACTIVITY_CURRENT](os_activity_current.md): A special value that selects the current activity, if there is one.
