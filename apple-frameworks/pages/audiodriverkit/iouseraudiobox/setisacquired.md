> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiobox/setisacquired](https://developer.apple.com/documentation/audiodriverkit/iouseraudiobox/setisacquired)

# SetIsAcquired

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Set the box’s acquisition state.

## Declaration

```objectivec
kern_return_t SetIsAcquired(bool in_is_acquired);
```

## Parameters

- `in_is_acquired`: The new value of the box’s acquisition state.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If successful, changing the acquisition state sends a notification to the host to update the object state.

This method synchronizes by using the work queue created by the object.

## See Also

### Managing Acquirability

- [HandleChangeAcquireBox](handlechangeacquirebox.md): Informs the box of a change to its acquisition state.
- [IsAcquired](isacquired.md): Returns a Boolean value that indicates the box’s acquisition state.
- [SetIsAcquirable](setisacquirable.md): Set the box’s acquirability state.
- [IsAcquirable](isacquirable.md): Returns a Boolean value that indicates the box’s acquirabilty state.
- [SetAcquisitionFailure](setacquisitionfailure.md): Sets the error code to return when box acquisition fails.
- [GetAcquisitionFailure](getacquisitionfailure.md): Returns the error code for use when box acquisition fails.
