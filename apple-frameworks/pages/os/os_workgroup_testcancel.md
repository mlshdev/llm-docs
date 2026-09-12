> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_workgroup_testcancel](https://developer.apple.com/documentation/os/os_workgroup_testcancel)

# os_workgroup_testcancel

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Returns a Boolean value that indicates whether the workgroup is canceled.

## Declaration

```objectivec
extern bool os_workgroup_testcancel(os_workgroup_t wg);
```

## Parameters

- `wg`: The workgroup you want to cancel.

<a id="return-value"></a>

## Return Value

`true` if the workgroup is canceled, or `false` if it is still active.

## See Also

### Cancellation

- [os_workgroup_cancel](os_workgroup_cancel.md): Cancels and invalidates the specified workgroup.
