> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/modelparameters-swift.struct/validationdata/split(strategy:)](https://developer.apple.com/documentation/createml/mlobjectdetector/modelparameters-swift.struct/validationdata/split(strategy:))

# MLObjectDetector.ModelParameters.ValidationData.split(strategy:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 10.15+

A validation dataset Create ML derives by randomly selecting a portion of the object detector’s training dataset using the split strategy.

## Declaration

```swift
case split(strategy: MLSplitStrategy)
```

## Parameters

- `strategy`: An [MLSplitStrategy](../../../mlsplitstrategy.md) instance the enumeration case uses to select a portion of the object detector’s training dataset as its associated value.

## See Also

### Designating validation data

- [MLObjectDetector.ModelParameters.ValidationData.dataFrame(\_:imageColumn:annotationColumn:)](dataframe%28__imagecolumn_annotationcolumn_%29.md): Set validation data from the MLDataTable provided.
- [MLObjectDetector.ModelParameters.ValidationData.dataSource(\_:)](datasource%28__%29.md): A validation dataset you provide as a data source.
- [MLObjectDetector.ModelParameters.ValidationData.table(\_:imageColumn:annotationColumn:)](table%28__imagecolumn_annotationcolumn_%29.md): Deprecated. A validation dataset you provide as a data table.
- [MLObjectDetector.ModelParameters.ValidationData.none](none.md): An empty validation dataset that skips the model validation phase after training.
