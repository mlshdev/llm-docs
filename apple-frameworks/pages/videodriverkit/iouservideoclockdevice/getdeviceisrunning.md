> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/getdeviceisrunning](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getdeviceisrunning)

# GetDeviceIsRunning

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets bool value indicating if device is running.

## Declaration

```objectivec
bool GetDeviceIsRunning();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Working with clock device state

- [SetDeviceIsAlive](setdeviceisalive.md): Sets a Boolean value to indicate the device is alive.
- [GetDeviceIsAlive](getdeviceisalive.md): Gets a Boolean value indicating if the device is alive.
- [SetIsHidden](setishidden.md): Sets a Boolean value indicating if the device is hidden.
- [GetIsHidden](getishidden.md): Gets a Boolean value indicating if the device is hidden.
