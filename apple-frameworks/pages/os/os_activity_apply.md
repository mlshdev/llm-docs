> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_activity_apply](https://developer.apple.com/documentation/os/os_activity_apply)

# os_activity_apply

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Execute a block using a given activity object.

## Declaration

```objectivec
extern void os_activity_apply(os_activity_t activity, os_block_t block);
```

## Parameters

- `activity`: An activity object. You can alternatively pass one of the global activity constants, such as [OS_ACTIVITY_NONE](os_activity_none.md) or [OS_ACTIVITY_CURRENT](os_activity_current.md).
- `block`: The block to be executed within the context of the given activity.

## Mentioned In

- [Collecting Log Messages in Activities](collecting-log-messages-in-activities.md)

## See Also

### Executing an Activity

- [os_activity_apply_f](os_activity_apply_f.md): Execute a function using a given activity object.
