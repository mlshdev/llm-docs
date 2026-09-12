> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordtaggermetrics/precisionrecalldataframe](https://developer.apple.com/documentation/createml/mlwordtaggermetrics/precisionrecalldataframe)

# precisionRecallDataFrame

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A data frame listing the precision and recall percentages for each class.

## Declaration

```swift
var precisionRecallDataFrame: DataFrame { get }
```

## See Also

### Describing metrics

- [description](description.md): A text representation of the word tagger metrics.
- [debugDescription](debugdescription.md): A text representation of the word tagger metrics that’s suitable for output during debugging.
- [playgroundDescription](playgrounddescription.md): A description of the word tagger metrics shown in a playground.
- [confusionDataFrame](confusiondataframe.md): A data frame comparing the actual and predicted labels for each class.
