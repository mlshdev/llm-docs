> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtrawprocessingoutputhandler](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingoutputhandler)

# VTRAWProcessingOutputHandler

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** macOS 15.0+

A block the system calls when frame processing is complete.

## Declaration

```objectivec
typedef void (^)(int, struct __CVBuffer *) VTRAWProcessingOutputHandler;
```

<a id="Discussion"></a>

## Discussion

On successful processing, will return a CVPixelBuffer conforming to the session’s outputPixelBufferAttributes if any were provided.

## See Also

### Data types

- [VTRAWProcessingSessionRef](vtrawprocessingsession.md): An object that processes frames in camera native formats such as RAW or Bayer.
- [VTRAWProcessingParameterChangeHandler](vtrawprocessingparameterchangehandler.md): A function the system calls when processing parameters change.
- [VTRAWProcessingSessionSetParameterChangedHander](vtrawprocessingsessionsetparameterchangedhander.md): Deprecated. Provides a block which will be called when the session changes the set of processing parameters.
