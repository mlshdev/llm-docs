> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiodriverkit/iouseraudiobox/setisprotected](https://developer.apple.com/documentation/audiodriverkit/iouseraudiobox/setisprotected)

# SetIsProtected

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Sets a Boolean value that indicates if the box requires authentication before use.

## Declaration

```objectivec
kern_return_t SetIsProtected(bool in_is_protected);
```

## Parameters

- `in_is_protected`: The new value of the box’s protection state.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. For a list of error codes, see [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If successful, changing the protection state sends a notification to the host to update the object state.

This method synchronizes by using the work queue created by the object.

## See Also

### Managing Protection State

- [IsProtected](isprotected.md): Returns a Boolean value that indicates if the box requires authentication before use.
