> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudioclockdevice/getishidden](https://developer.apple.com/documentation/audiodriverkit/iouseraudioclockdevice/getishidden)

# GetIsHidden

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Gets a Boolean value that indicates whether the device is hidden.

## Declaration

```objectivec
bool GetIsHidden();
```

<a id="return-value"></a>

## Return Value

`true` if the device is hidden; `false` otherwise.

<a id="Discussion"></a>

## Discussion

This value defaults to `false` when the device initializes.

This method synchronizes by using the work queue created by the object.

## See Also

### Working with Clock Device State

- [GetDeviceIsRunning](getdeviceisrunning.md): Gets a Boolean value that indicates whether the device is running.
- [SetDeviceIsAlive](setdeviceisalive.md): Sets a Boolean value to represent whether the device is alive.
- [GetDeviceIsAlive](getdeviceisalive.md): Gets a Boolean value that represents whether the device is alive.
- [SetIsHidden](setishidden.md): Sets a Boolean value to indicate whether the device is hidden.
