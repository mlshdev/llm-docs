> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideobox/isacquired](https://developer.apple.com/documentation/videodriverkit/iouservideobox/isacquired)

# IsAcquired

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

A Boolean value indicating if box is acquired.

## Declaration

```objectivec
bool IsAcquired();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Managing acquirability

- [HandleChangeAcquireBox](handlechangeacquirebox.md): Called when host is attempting to the change the box acquisition
- [SetIsAcquired](setisacquired.md): Sets the value indicating the box’s acquisition state.
- [SetIsAcquirable](setisacquirable.md): Sets the value for the box’s acquirability.
- [IsAcquirable](isacquirable.md): A Boolean value indicating if box can be acquired.
- [SetAcquisitionFailure](setacquisitionfailure.md): Sets the error for the box’s acquisition failure.
- [GetAcquisitionFailure](getacquisitionfailure.md): Gets the acquisition failure of the video box.
