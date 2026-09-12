> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlwordembedding/init(dictionary:parameters:)](https://developer.apple.com/documentation/createml/mlwordembedding/init(dictionary:parameters:))

# init(dictionary:parameters:)

**Framework:** Create ML  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Creates a word embedding.

## Declaration

```swift
init(dictionary: [String : [Double]], parameters: MLWordEmbedding.ModelParameters = ModelParameters()) throws
```

## Parameters

- `dictionary`: A dictionary of strings and their embeddings.
- `parameters`: The model parameters.

## See Also

### Creating a word embedding

- [MLWordEmbedding.ModelParameters](modelparameters-swift.struct.md): The model configuration parameters.
- [modelParameters](modelparameters-swift.property.md): The model configuration parameters.
