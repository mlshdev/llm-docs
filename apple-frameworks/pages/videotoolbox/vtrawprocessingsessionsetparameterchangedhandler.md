> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtrawprocessingsessionsetparameterchangedhandler](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingsessionsetparameterchangedhandler)

# VTRAWProcessingSessionSetParameterChangedHandler

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** macOS 26.0+

## Declaration

```objectivec
extern OSStatus VTRAWProcessingSessionSetParameterChangedHandler(VTRAWProcessingSessionRef session, VTRAWProcessingParameterChangeHandler parameterChangeHandler);
```

## Parameters

- `session`: The RAW processing session.
- `parameterChangeHandler`: A VTRAWProcessingParameterChangeHandler block which will be called when the set of processing parameters changes, or the value of a parameter changes without the client explicitly requesting it. Setting this to NULL removes the current handler.

<a id="discussion"></a>

## Discussion

Provides a block which will be called when the VTRAWProcessingPlugin changes the set of processing parameters..

This block will be called the VTRAWProcessingPlugin either changes the set of available processing parameters, or changes the current value of parameters. The VTRAWProcessingPlugin may change parameters based on metadata associated with input frames, or in response to other parameters configured by VTRAWProcessingSessionSetProcessingParameters. This optional and does not need to be configured if the client is not driving UI based on these parameters, or otherwise does not need this.

## See Also

### Configuring a session

- [VTRAWProcessingSessionCopyProcessingParameters](vtrawprocessingsessioncopyprocessingparameters.md): Copies an array of dictionaries describing the parameters provided by the RAW Processor for frame processing.
- [VTRAWProcessingSessionSetProcessingParameters](vtrawprocessingsessionsetprocessingparameters.md): Sets a collection of RAW Processing parameters.
- [RAW processing parameters](raw-processing-parameters.md): Parameters to set on a RAW processing session.
- [VTCopyRAWProcessorExtensionProperties](vtcopyrawprocessorextensionproperties.md): Returns information about the Media Extension RAW processor supporting the specified format.
- [RAW Processing Properties](raw-processing-properties.md): Properties that you use to configure a RAW processing session.
