> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideobox/handlechangeacquirebox

# HandleChangeAcquireBox

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Called when host is attempting to the change the box acquisition

## Declaration

```objectivec
virtual kern_return_t HandleChangeAcquireBox(bool in_acquire);
```

<a id="return-value"></a>

## Return Value

Kern_return_t inidicating if the change was successful, upon succes the value should be updated.

<a id="discussion"></a>

## Discussion

Default behavior will call SetIsAcquired() and return `kIOReturnSuccess`. Custom drivers should override this method and validate the change and return `kIOReturnSuccess` to confirm the change

## See Also

### Managing acquirability

- [SetIsAcquired](setisacquired.md): Beta. Sets the value indicating the box’s acquisition state.
- [IsAcquired](isacquired.md): Beta. A Boolean value indicating if box is acquired.
- [SetIsAcquirable](setisacquirable.md): Beta. Sets the value for the box’s acquirability.
- [IsAcquirable](isacquirable.md): Beta. A Boolean value indicating if box can be acquired.
- [SetAcquisitionFailure](setacquisitionfailure.md): Beta. Sets the error for the box’s acquisition failure.
- [GetAcquisitionFailure](getacquisitionfailure.md): Beta. Gets the acquisition failure of the video box.
