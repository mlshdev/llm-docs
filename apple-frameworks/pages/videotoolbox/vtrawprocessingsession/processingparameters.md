> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtrawprocessingsession/processingparameters](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingsession/processingparameters)

# processingParameters

**Framework:** Video Toolbox  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

An array of processing parameters available for this RAW processing session.

## Declaration

```swift
var processingParameters: [VTRAWProcessingSession.Parameter] { get throws }
```

<a id="discussion"></a>

## Discussion

This call throws an error if the RAW Processor extension process is unreachable.

## See Also

### Configuring parameters

- [parameters()](parameters%28%29.md): Returns an asynchronous sequence that provides updates to the processing Parameter array if the processing extension makes changes to the set of Parameters.
- [updateParameter(values:)](updateparameter%28values_%29.md): Sets the value for one or more of the processing parameters.
- [VTRAWProcessingSession.Parameter](parameter.md): A parameter expresses a control or a set of controls that influence frame processing.
