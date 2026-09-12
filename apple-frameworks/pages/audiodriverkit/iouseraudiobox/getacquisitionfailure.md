> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiobox/getacquisitionfailure](https://developer.apple.com/documentation/audiodriverkit/iouseraudiobox/getacquisitionfailure)

# GetAcquisitionFailure

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Returns the error code for use when box acquisition fails.

## Declaration

```objectivec
kern_return_t GetAcquisitionFailure();
```

<a id="return-value"></a>

## Return Value

An error code for use when box acquisition fails.

<a id="Discussion"></a>

## Discussion

Call this method to retrieve the error to return from a failed call to [HandleChangeAcquireBox](handlechangeacquirebox.md).

This method synchronizes by using the work queue created by the object.

## See Also

### Managing Acquirability

- [HandleChangeAcquireBox](handlechangeacquirebox.md): Informs the box of a change to its acquisition state.
- [SetIsAcquired](setisacquired.md): Set the box’s acquisition state.
- [IsAcquired](isacquired.md): Returns a Boolean value that indicates the box’s acquisition state.
- [SetIsAcquirable](setisacquirable.md): Set the box’s acquirability state.
- [IsAcquirable](isacquirable.md): Returns a Boolean value that indicates the box’s acquirabilty state.
- [SetAcquisitionFailure](setacquisitionfailure.md): Sets the error code to return when box acquisition fails.
