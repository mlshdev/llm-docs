> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_activity_flag_t/os_activity_flag_default](https://developer.apple.com/documentation/os/os_activity_flag_t/os_activity_flag_default)

# OS_ACTIVITY_FLAG_DEFAULT

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new activity and associates it as a child of any provided parent activity.

## Declaration

```objectivec
OS_ACTIVITY_FLAG_DEFAULT
```

## See Also

### Adjusting Activity Creation

- [OS_ACTIVITY_FLAG_DETACHED](os_activity_flag_detached.md): Creates a new activity that is independent of any provided parent activity.
- [OS_ACTIVITY_FLAG_IF_NONE_PRESENT](os_activity_flag_if_none_present.md): Creates a new activity only if one is not already present.
