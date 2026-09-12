> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideoclockdevice/getishidden](https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getishidden)

# GetIsHidden

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Gets a Boolean value indicating if the device is hidden.

## Declaration

```objectivec
bool GetIsHidden();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value. The default value is false when the device is created.

## See Also

### Working with clock device state

- [GetDeviceIsRunning](getdeviceisrunning.md): Gets bool value indicating if device is running.
- [SetDeviceIsAlive](setdeviceisalive.md): Sets a Boolean value to indicate the device is alive.
- [GetDeviceIsAlive](getdeviceisalive.md): Gets a Boolean value indicating if the device is alive.
- [SetIsHidden](setishidden.md): Sets a Boolean value indicating if the device is hidden.
