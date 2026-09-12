> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiobox/handlechangeacquirebox](https://developer.apple.com/documentation/audiodriverkit/iouseraudiobox/handlechangeacquirebox)

# HandleChangeAcquireBox

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Informs the box of a change to its acquisition state.

## Declaration

```objectivec
virtual kern_return_t HandleChangeAcquireBox(bool in_acquire);
```

## Parameters

- `in_acquire`: A Boolean value that indicates the acquisition state. If this value is `true`, the box is being acquired.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

The default implementation calls [SetIsAcquired](setisacquired.md) and return [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md). Custom drivers should override this method to validate the change, then return [kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) to confirm the change. If acquisition fails, return the error code returned from [GetAcquisitionFailure](getacquisitionfailure.md).

## See Also

### Managing Acquirability

- [SetIsAcquired](setisacquired.md): Set the box’s acquisition state.
- [IsAcquired](isacquired.md): Returns a Boolean value that indicates the box’s acquisition state.
- [SetIsAcquirable](setisacquirable.md): Set the box’s acquirability state.
- [IsAcquirable](isacquirable.md): Returns a Boolean value that indicates the box’s acquirabilty state.
- [SetAcquisitionFailure](setacquisitionfailure.md): Sets the error code to return when box acquisition fails.
- [GetAcquisitionFailure](getacquisitionfailure.md): Returns the error code for use when box acquisition fails.
