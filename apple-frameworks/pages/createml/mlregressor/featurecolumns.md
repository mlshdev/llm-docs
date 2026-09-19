> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createml/mlregressor/featurecolumns

# featureColumns

**Framework:** Create ML  
**Kind:** Instance Property  
**Availability:** macOS 10.14+

The names of the columns you selected at initialization to train the regressor.

## Declaration

```swift
var featureColumns: [String] { get }
```

## See Also

### Creating and training a regressor

- [init(trainingData:targetColumn:featureColumns:)](init%28trainingdata_targetcolumn_featurecolumns_%29.md): Creates a regressor.
- [targetColumn](targetcolumn.md): The name of the column you selected at initialization to define which feature the regressor predicts.
