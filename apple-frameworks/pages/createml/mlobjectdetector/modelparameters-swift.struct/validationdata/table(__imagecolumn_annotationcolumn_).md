> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlobjectdetector/modelparameters-swift.struct/validationdata/table(_:imagecolumn:annotationcolumn:)](https://developer.apple.com/documentation/createml/mlobjectdetector/modelparameters-swift.struct/validationdata/table(_:imagecolumn:annotationcolumn:))

# MLObjectDetector.ModelParameters.ValidationData.table(\_:imageColumn:annotationColumn:)

**Framework:** Create ML  
**Kind:** Case  
**Availability:** macOS 10.15+ (deprecated in 14.0)

A validation dataset you provide as a data table.

## Declaration

```swift
case table(MLDataTable, imageColumn: String, annotationColumn: String)
```

## Parameters

- `table`: An [MLDataTable](../../../mldatatable.md) instance the enumeration case uses as its associated value.
- `imageColumn`: The name of the column in the data table that contains the image file URLs.
- `annotationColumn `: The name of the column in the data table that contains the image annotations.

## See Also

### Designating validation data

- [MLObjectDetector.ModelParameters.ValidationData.split(strategy:)](split%28strategy_%29.md): A validation dataset Create ML derives by randomly selecting a portion of the object detector’s training dataset using the split strategy.
- [MLObjectDetector.ModelParameters.ValidationData.dataFrame(\_:imageColumn:annotationColumn:)](dataframe%28__imagecolumn_annotationcolumn_%29.md): Set validation data from the MLDataTable provided.
- [MLObjectDetector.ModelParameters.ValidationData.dataSource(\_:)](datasource%28__%29.md): A validation dataset you provide as a data source.
- [MLObjectDetector.ModelParameters.ValidationData.none](none.md): An empty validation dataset that skips the model validation phase after training.
