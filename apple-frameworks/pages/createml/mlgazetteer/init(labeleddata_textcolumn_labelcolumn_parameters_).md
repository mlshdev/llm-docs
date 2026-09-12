> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlgazetteer/init(labeleddata:textcolumn:labelcolumn:parameters:)](https://developer.apple.com/documentation/createml/mlgazetteer/init(labeleddata:textcolumn:labelcolumn:parameters:))

# init(labeledData:textColumn:labelColumn:parameters:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 10.15+ (deprecated in 14.0)

Creates a gazetteer from a table of labels and terms.

## Declaration

```swift
init(labeledData: MLDataTable, textColumn: String, labelColumn: String, parameters: MLGazetteer.ModelParameters = ModelParameters()) throws
```

## Parameters

- `labeledData`: A table of labels and terms.
- `textColumn`: The name of the column containing the terms.
- `labelColumn`: The name of the column containing the labels.
- `parameters`: The model parameters.

## See Also

### Creating a gazetteer

- [init(dictionary:parameters:)](init%28dictionary_parameters_%29.md): Creates a gazetteer from a dictionary of labels and terms.
- [MLGazetteer.ModelParameters](modelparameters-swift.struct.md): The model configuration parameters.
- [modelParameters](modelparameters-swift.property.md): The model configuration parameters.
