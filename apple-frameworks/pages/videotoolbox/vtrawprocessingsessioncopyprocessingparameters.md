> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtrawprocessingsessioncopyprocessingparameters](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingsessioncopyprocessingparameters)

# VTRAWProcessingSessionCopyProcessingParameters

**Interface language:** Objective-C

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** macOS 15.0+

Copies an array of dictionaries describing the parameters provided by the RAW Processor for frame processing.

## Declaration

```objectivec
extern OSStatus VTRAWProcessingSessionCopyProcessingParameters(VTRAWProcessingSessionRef session, CFArrayRef*outParameterArray);
```

## Parameters

- `session`: The RAW processing session.
- `outParameterArray`: Pointer for receiving the RAW Processing parameter array.

<a id="Discussion"></a>

## Discussion

This method returns an array of dictionaries - one for each parameter that can be controlled in the RAW processing operation.

The dictionary for each parameter will contain a set of keys whose values provide a name, value type, value range, and current value for each parameter. See [RAW processing parameters](raw-processing-parameters.md) for more information.

The returned values can be used to construct dynamic UI presenting RAW Processing controls allowing the various knobs for this specific RAW Processor to be viewed and manipulated.

## See Also

### Configuring a session

- [VTRAWProcessingSessionSetProcessingParameters](vtrawprocessingsessionsetprocessingparameters.md): Sets a collection of RAW Processing parameters.
- [VTRAWProcessingSessionSetParameterChangedHandler](vtrawprocessingsessionsetparameterchangedhandler.md)
- [RAW processing parameters](raw-processing-parameters.md): Parameters to set on a RAW processing session.
- [VTCopyRAWProcessorExtensionProperties](vtcopyrawprocessorextensionproperties.md): Returns information about the Media Extension RAW processor supporting the specified format.
- [RAW Processing Properties](raw-processing-properties.md): Properties that you use to configure a RAW processing session.
