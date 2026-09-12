> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videodriverkit/iouservideobox/isprotected](https://developer.apple.com/documentation/videodriverkit/iouservideobox/isprotected)

# IsProtected

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 27.0+

A Boolean value indicating if box is protected.

## Declaration

```objectivec
bool IsProtected();
```

<a id="discussion"></a>

## Discussion

The object’s work queue synchronizes access to the value.

## See Also

### Managing protection state

- [SetIsProtected](setisprotected.md): Sets the value indicating the box’s protection state.
