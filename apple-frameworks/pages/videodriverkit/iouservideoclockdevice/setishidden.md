> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/setishidden](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/setishidden)

# SetIsHidden

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets a Boolean value indicating if the device is hidden.

## Declaration

```objectivec
kern_return_t SetIsHidden(bool in_is_hidden);
```

## Parameters

- `in_is_hidden`: True if device is hidden.

<a id="discussion"></a>

## Discussion

A bool value where true indicates that the device is not included in the normal list of devices provided and cannot be the default device. Hidden devices can only be discovered by it’s unique identifier

## See Also

### Working with clock device state

- [GetDeviceIsRunning](getdeviceisrunning.md): Gets bool value indicating if device is running.
- [SetDeviceIsAlive](setdeviceisalive.md): Sets a Boolean value to indicate the device is alive.
- [GetDeviceIsAlive](getdeviceisalive.md): Gets a Boolean value indicating if the device is alive.
- [GetIsHidden](getishidden.md): Gets a Boolean value indicating if the device is hidden.
