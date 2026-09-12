> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_activity_t](https://developer.apple.com/documentation/os/os_activity_t)

# os_activity_t

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An object that represents an activity triggered by the user.

## Declaration

```objectivec
typedef NSObject<OS_os_activity> * os_activity_t;
```

## Topics

### Choosing a Special Activity

- [OS_ACTIVITY_NONE](os_activity_none.md): A special value that indicates a nonexistent activity.
- [OS_ACTIVITY_CURRENT](os_activity_current.md): A special value that selects the current activity, if there is one.
