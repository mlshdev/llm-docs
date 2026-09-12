> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/setishidden](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/setishidden)

# SetIsHidden

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets a Boolean value to indicate whether the device is hidden.

## Declaration

```objectivec
kern_return_t SetIsHidden(bool in_is_hidden);
```

## Parameters

- `in_is_hidden`: `true` if the device is hidden; otherwise, `false`.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

A true value indicates the device isn’t included in the normal list of devices, and is only findable by its UID. A hidden device can’t be the default device.

## See Also

### Working with Clock Device State

- [GetDeviceIsRunning](getdeviceisrunning.md): Gets a Boolean value that indicates whether the device is running.
- [SetDeviceIsAlive](setdeviceisalive.md): Sets a Boolean value to represent whether the device is alive.
- [GetDeviceIsAlive](getdeviceisalive.md): Gets a Boolean value that represents whether the device is alive.
- [GetIsHidden](getishidden.md): Gets a Boolean value that indicates whether the device is hidden.
