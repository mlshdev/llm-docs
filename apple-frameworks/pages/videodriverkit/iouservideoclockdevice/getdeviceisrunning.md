> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideoclockdevice/getdeviceisrunning

# GetDeviceIsRunning

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

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

- [SetDeviceIsAlive](setdeviceisalive.md): Beta. Sets a Boolean value to indicate the device is alive.
- [GetDeviceIsAlive](getdeviceisalive.md): Beta. Gets a Boolean value indicating if the device is alive.
- [SetIsHidden](setishidden.md): Beta. Sets a Boolean value indicating if the device is hidden.
- [GetIsHidden](getishidden.md): Beta. Gets a Boolean value indicating if the device is hidden.
