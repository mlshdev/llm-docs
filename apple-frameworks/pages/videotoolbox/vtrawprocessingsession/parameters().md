> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtrawprocessingsession/parameters()](https://developer.apple.com/documentation/videotoolbox/vtrawprocessingsession/parameters())

# parameters()

**Framework:** Video Toolbox  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Returns an asynchronous sequence that provides updates to the processing Parameter array if the processing extension makes changes to the set of Parameters.

## Declaration

```swift
func parameters() -> any AsyncSequence<[VTRAWProcessingSession.Parameter], Never>
```

<a id="discussion"></a>

## Discussion

These changes could be: - adding or removing Parameters - enabling/disabling Parameters - changing default values for a Parameter

## See Also

### Configuring parameters

- [updateParameter(values:)](updateparameter%28values_%29.md): Sets the value for one or more of the processing parameters.
- [processingParameters](processingparameters.md): An array of processing parameters available for this RAW processing session.
- [VTRAWProcessingSession.Parameter](parameter.md): A parameter expresses a control or a set of controls that influence frame processing.
