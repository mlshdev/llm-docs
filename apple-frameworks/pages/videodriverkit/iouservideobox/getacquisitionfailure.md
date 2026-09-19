> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideobox/getacquisitionfailure

# GetAcquisitionFailure

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+ beta

Gets the acquisition failure of the video box.

## Declaration

```objectivec
kern_return_t GetAcquisitionFailure();
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
- [IsAcquirable](isacquirable.md): Beta. A Boolean value indicating if box can be acquired.
- [SetAcquisitionFailure](setacquisitionfailure.md): Beta. Sets the error for the box’s acquisition failure.
