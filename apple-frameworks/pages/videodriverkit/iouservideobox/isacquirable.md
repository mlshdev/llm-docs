> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideobox/isacquirable](https://developer.apple.com/documentation/videodriverkit/iouservideobox/isacquirable)

# IsAcquirable

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

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

- [HandleChangeAcquireBox](handlechangeacquirebox.md): Called when host is attempting to the change the box acquisition
- [SetIsAcquired](setisacquired.md): Sets the value indicating the box’s acquisition state.
- [IsAcquired](isacquired.md): A Boolean value indicating if box is acquired.
- [SetIsAcquirable](setisacquirable.md): Sets the value for the box’s acquirability.
- [SetAcquisitionFailure](setacquisitionfailure.md): Sets the error for the box’s acquisition failure.
- [GetAcquisitionFailure](getacquisitionfailure.md): Gets the acquisition failure of the video box.
