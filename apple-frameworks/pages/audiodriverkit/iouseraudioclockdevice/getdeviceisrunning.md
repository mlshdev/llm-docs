> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/getdeviceisrunning](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/getdeviceisrunning)

# GetDeviceIsRunning

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets a Boolean value that indicates whether the device is running.

## Declaration

```objectivec
bool GetDeviceIsRunning();
```

<a id="return-value"></a>

## Return Value

`true` if the device is running; `false` otherwise.

<a id="Discussion"></a>

## Discussion

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Clock Device State

- [SetDeviceIsAlive](setdeviceisalive.md): Sets a Boolean value to represent whether the device is alive.
- [GetDeviceIsAlive](getdeviceisalive.md): Gets a Boolean value that represents whether the device is alive.
- [SetIsHidden](setishidden.md): Sets a Boolean value to indicate whether the device is hidden.
- [GetIsHidden](getishidden.md): Gets a Boolean value that indicates whether the device is hidden.
