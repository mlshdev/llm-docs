> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/setdeviceisalive](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/setdeviceisalive)

# SetDeviceIsAlive

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets a Boolean value to indicate the device is alive.

## Declaration

```objectivec
kern_return_t SetDeviceIsAlive(bool in_is_alive);
```

## Parameters

- `in_is_alive`: True if device is alive.

<a id="discussion"></a>

## Discussion

A true  value means the device is ready and available and false means the device is unusable and will most likely go away shortly.

## See Also

### Working with clock device state

- [GetDeviceIsRunning](getdeviceisrunning.md): Gets bool value indicating if device is running.
- [GetDeviceIsAlive](getdeviceisalive.md): Gets a Boolean value indicating if the device is alive.
- [SetIsHidden](setishidden.md): Sets a Boolean value indicating if the device is hidden.
- [GetIsHidden](getishidden.md): Gets a Boolean value indicating if the device is hidden.
