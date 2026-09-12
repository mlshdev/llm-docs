> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlcontextualembeddingresult/enumeratetokenvectors(in:using:)](https://developer.apple.com/documentation/naturallanguage/nlcontextualembeddingresult/enumeratetokenvectors(in:using:))

# enumerateTokenVectors(in:using:)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Iterates over the embedding vectors corresponding to the subword tokens within the specified range of the input string.

## Declaration

```swift
@nonobjc func enumerateTokenVectors(in range: Range<String.Index>, using block: ([Double], Range<String.Index>) -> Bool)
```

## Parameters

- `range`: The range in the string to enumerate.
- `block`: A block that contains each token’s embedding vector and its corresponding character range in the string.

<a id="discussion"></a>

## Discussion

Use this method to access the individual (subword) token embeddings. You can apply pooling or combination techniques to aggregate these subword vectors into a single representation for a word, phrase, or entire input.

Common pooling techniques include:

- Mean pooling to take the average of subword vectors.
- Max pooling for finding the element-wise maximum across tokens.
- Use the embeddings of the first or last subword tokens to represent the entire input.

## See Also

### Enumerating the vectors

- [tokenVector(at:)](tokenvector%28at_%29.md): Gets a token vector at the index you specify.
