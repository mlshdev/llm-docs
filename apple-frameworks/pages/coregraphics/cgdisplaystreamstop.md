> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdisplaystreamstop](https://developer.apple.com/documentation/coregraphics/cgdisplaystreamstop)

# CGDisplayStreamStop

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function

## Declaration

```objectivec
extern CGError CGDisplayStreamStop(CGDisplayStreamRef displayStream);
```

## Parameters

- `displayStream`: To be stopped

<a id="return-value"></a>

## Return Value

kCGErrorSuccess If the display stream was stopped, otherwise an error.

<a id="discussion"></a>

## Discussion

End delivery of frame updates to the handler block.

After this call returns, the CGDisplayStream callback function will eventually be called with a status of kCGDisplayStreamFrameStatusStopped.  After that point it is safe to release the CGDisplayStream. It is safe to call this function from within the handler block, but the previous caveat still applies.
