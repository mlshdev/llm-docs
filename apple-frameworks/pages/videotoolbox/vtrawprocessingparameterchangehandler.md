> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtrawprocessingparameterchangehandler](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingparameterchangehandler)

# VTRAWProcessingParameterChangeHandler

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Type Alias  
**Availability:** macOS 15.0+

A function the system calls when processing parameters change.

## Declaration

```objectivec
typedef void (^)(const struct __CFArray *) VTRAWProcessingParameterChangeHandler;
```

## Parameters

- `newParameters`: An array containing the new parameter details.  This follows the same form as the array returned from [VTRAWProcessingSessionCopyProcessingParameters](vtrawprocessingsessioncopyprocessingparameters.md).

<a id="Discussion"></a>

## Discussion

The system invokes this callback when available parameters or parameter values change without an explicit call to [VTRAWProcessingSessionSetProcessingParameters](vtrawprocessingsessionsetprocessingparameters.md). This is intended to allow the client to update any UI driven by these parameters.

## See Also

### Data types

- [VTRAWProcessingSessionRef](vtrawprocessingsession.md): An object that processes frames in camera native formats such as RAW or Bayer.
- [VTRAWProcessingSessionSetParameterChangedHander](vtrawprocessingsessionsetparameterchangedhander.md): Deprecated. Provides a block which will be called when the session changes the set of processing parameters.
- [VTRAWProcessingOutputHandler](vtrawprocessingoutputhandler.md): A block the system calls when frame processing is complete.
