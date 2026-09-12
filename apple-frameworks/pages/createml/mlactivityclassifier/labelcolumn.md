> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlactivityclassifier/labelcolumn](https://developer.apple.com/documentation/createml/mlactivityclassifier/labelcolumn)

# labelColumn

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The name of the label column the activity classifier used during its training session.

## Declaration

```swift
var labelColumn: String
```

<a id="discussion"></a>

## Discussion

This property reflects the name of the data table column or annotation file column the training session used to label each activity.

> **Note**

> The [MLActivityClassifier](../mlactivityclassifier.md) instance provides a default name if you trained it with a data source that’s set to [MLActivityClassifier.DataSource.labeledDirectories(at:)](datasource/labeleddirectories%28at_%29.md).

Changing the value of this property doesn’t retrain the model or affect its behavior.

## See Also

### Inspecting an activity classifier model

- [model](model.md): The underlying Core ML model of the activity classifier stored in memory.
- [modelParameters](modelparameters-swift.property.md): The model configuration parameters the activity classifier used during its training session.
- [featureColumns](featurecolumns.md): The names of the feature columns the activity classifier used during its training session.
- [recordingFileColumn](recordingfilecolumn.md): The name of the column that contains the data files the activity classifier used during its training session.
