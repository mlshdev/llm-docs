> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlgazetteer/init(dictionary:parameters:)](https://developer.apple.com/documentation/createml/mlgazetteer/init(dictionary:parameters:))

# init(dictionary:parameters:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a gazetteer from a dictionary of labels and terms.

## Declaration

```swift
init(dictionary: [String : [String]], parameters: MLGazetteer.ModelParameters = ModelParameters()) throws
```

## Parameters

- `dictionary`: A dictionary of labels and terms.
- `parameters`: The model parameters.

## See Also

### Creating a gazetteer

- [init(labeledData:textColumn:labelColumn:parameters:)](init%28labeleddata_textcolumn_labelcolumn_parameters_%29.md): Deprecated. Creates a gazetteer from a table of labels and terms.
- [MLGazetteer.ModelParameters](modelparameters-swift.struct.md): The model configuration parameters.
- [modelParameters](modelparameters-swift.property.md): The model configuration parameters.
