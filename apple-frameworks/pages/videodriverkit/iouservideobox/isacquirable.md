> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideobox/isacquirable

# IsAcquirable

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

A Boolean value indicating if box can be acquired.

## Declaration

```objectivec
bool IsAcquirable();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Managing acquirability

- [HandleChangeAcquireBox](handlechangeacquirebox.md): Beta. Called when host is attempting to the change the box acquisition
- [SetIsAcquired](setisacquired.md): Beta. Sets the value indicating the box’s acquisition state.
- [IsAcquired](isacquired.md): Beta. A Boolean value indicating if box is acquired.
- [SetIsAcquirable](setisacquirable.md): Beta. Sets the value for the box’s acquirability.
- [SetAcquisitionFailure](setacquisitionfailure.md): Beta. Sets the error for the box’s acquisition failure.
- [GetAcquisitionFailure](getacquisitionfailure.md): Beta. Gets the acquisition failure of the video box.
