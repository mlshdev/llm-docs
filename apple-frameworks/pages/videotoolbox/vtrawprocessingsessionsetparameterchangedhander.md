> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtrawprocessingsessionsetparameterchangedhander](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingsessionsetparameterchangedhander)

# VTRAWProcessingSessionSetParameterChangedHander

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** macOS 15.0+ (deprecated in 26.0)

Provides a block which will be called when the session changes the set of processing parameters.

## Declaration

```objectivec
extern OSStatus VTRAWProcessingSessionSetParameterChangedHander(VTRAWProcessingSessionRef session, VTRAWProcessingParameterChangeHandler parameterChangeHandler);
```

## Parameters

- `session`: The RAW processing session.
- `parameterChangeHandler`: A [VTRAWProcessingParameterChangeHandler](vtrawprocessingparameterchangehandler.md) block which will be called when the set of processing parameters changes, or the value of a parameter changes without the client explicitly requesting it. Setting this to `NULL` removes the current handler.

## See Also

### Data types

- [VTRAWProcessingSessionRef](vtrawprocessingsession.md): An object that processes frames in camera native formats such as RAW or Bayer.
- [VTRAWProcessingParameterChangeHandler](vtrawprocessingparameterchangehandler.md): A function the system calls when processing parameters change.
- [VTRAWProcessingOutputHandler](vtrawprocessingoutputhandler.md): A block the system calls when frame processing is complete.
