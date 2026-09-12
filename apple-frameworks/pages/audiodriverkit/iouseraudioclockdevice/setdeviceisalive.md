> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/setdeviceisalive](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/setdeviceisalive)

# SetDeviceIsAlive

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets a Boolean value to represent whether the device is alive.

## Declaration

```objectivec
kern_return_t SetDeviceIsAlive(bool in_is_alive);
```

## Parameters

- `in_is_alive`: `true` if the device is alive; otherwise, `false`.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

A `true` value means the device is ready and available. `false` means the device is unusable and will most likely go away shortly.

## See Also

### Working with Clock Device State

- [GetDeviceIsRunning](getdeviceisrunning.md): Gets a Boolean value that indicates whether the device is running.
- [GetDeviceIsAlive](getdeviceisalive.md): Gets a Boolean value that represents whether the device is alive.
- [SetIsHidden](setishidden.md): Sets a Boolean value to indicate whether the device is hidden.
- [GetIsHidden](getishidden.md): Gets a Boolean value that indicates whether the device is hidden.
