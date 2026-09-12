> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideobox/setisprotected](https://developer.apple.com/documentation/videodriverkit/iouservideobox/setisprotected)

# SetIsProtected

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

Sets the value indicating the box’s protection state.

## Declaration

```objectivec
kern_return_t SetIsProtected(bool in_is_protected);
```

## Parameters

- `in_is_protected`: The box’s protection state.

<a id="discussion"></a>

## Discussion

The object sends a notification to the host to update the object state on success. The object’s work queue synchronizes access to the value.

## See Also

### Managing protection state

- [IsProtected](isprotected.md): A Boolean value indicating if box is protected.
