> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdisplaystreamupdategetdropcount](https://developer.apple.com/documentation/coregraphics/cgdisplaystreamupdategetdropcount)

# CGDisplayStreamUpdateGetDropCount

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function

## Declaration

```objectivec
extern size_t CGDisplayStreamUpdateGetDropCount(CGDisplayStreamUpdateRef updateRef);
```

## Parameters

- `updateRef`: The CGDisplayStreamUpdateRef

<a id="return-value"></a>

## Return Value

The number of dropped frames

<a id="discussion"></a>

## Discussion

Return how many frames (if any) have been dropped since the last call to the handler.

This call is primarily useful for performance measurement to determine if the client is keeping up with all WindowServer updates.
