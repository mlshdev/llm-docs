> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/modelparameters-swift.property](https://developer.apple.com/documentation/createml/mlactivityclassifier/modelparameters-swift.property)

# modelParameters

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The model configuration parameters the activity classifier used during its training session.

## Declaration

```swift
nonisolated(unsafe) let modelParameters: MLActivityClassifier.ModelParameters
```

## See Also

### Inspecting an activity classifier model

- [model](model.md): The underlying Core ML model of the activity classifier stored in memory.
- [featureColumns](featurecolumns.md): The names of the feature columns the activity classifier used during its training session.
- [labelColumn](labelcolumn.md): The name of the label column the activity classifier used during its training session.
- [recordingFileColumn](recordingfilecolumn.md): The name of the column that contains the data files the activity classifier used during its training session.
