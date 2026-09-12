> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_workgroup_cancel](https://developer.apple.com/documentation/os/os_workgroup_cancel)

# os_workgroup_cancel

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Cancels and invalidates the specified workgroup.

## Declaration

```objectivec
extern void os_workgroup_cancel(os_workgroup_t wg);
```

## Parameters

- `wg`: The workgroup you want to cancel.

<a id="Discussion"></a>

## Discussion

After you cancel a workgroup, don’t schedule any more work on it. New threads may not join a canceled workgroup, but may still leave it. Most other calls to workgroup APIs return an appropriate error for a canceled workgroup, but otherwise do nothing.

To handle cancellation, call the [os_workgroup_testcancel](os_workgroup_testcancel.md) function periodically from your thread code to monitor the state of the workgroup. If that function returns `true`, stop all workgroup-related tasks and call `os_workgroup_leave_self` to remove the thread from the workgroup. Cancellation of a workgroup affects the immediate workgroup only, and doesn’t affect other related workgroups. For example, if you created a workgroup using the [os_workgroup_create_with_workgroup](os_workgroup_create_with_workgroup.md) function, cancel the original workgroup and the copy of it separately.

## See Also

### Cancellation

- [os_workgroup_testcancel](os_workgroup_testcancel.md): Returns a Boolean value that indicates whether the workgroup is canceled.
