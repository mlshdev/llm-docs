> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlcontextualembedding/embeddingresult(for:language:)](https://developer.apple.com/documentation/naturallanguage/nlcontextualembedding/embeddingresult(for:language:))

# embeddingResult(for:language:) (Swift)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Applies an embedding to a string and obtains the resulting embedding vectors.

## Declaration

```swift
func embeddingResult(for string: String, language: NLLanguage?) throws -> NLContextualEmbeddingResult
```

## Parameters

- `string`: The string to apply an embedding to.
- `language`: The language of the string.

<a id="return-value"></a>

## Return Value

An embedding result. On failure, this method returns nil.

## See Also

### Applying an embedding

- [NLContextualEmbeddingResult](../nlcontextualembeddingresult.md): An object that represents the embedding vector result from applying a contextual embedding to a string.

# embeddingResultForString:language:error: (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Applies an embedding to a string and obtains the resulting embedding vectors.

## Declaration

```objectivec
- (NLContextualEmbeddingResult *) embeddingResultForString:(NSString *) string language:(NLLanguage) language error:(NSError **) error;
```

## Parameters

- `string`: The string to apply an embedding to.
- `language`: The language of the string.
- `error`: On output, a pointer to an error object that describes why the method failed, or nil if no error occurred. If you are not interested in the error information, pass nil for this parameter.

<a id="return-value"></a>

## Return Value

An embedding result. On failure, this method returns nil.

## See Also

### Applying an embedding

- [NLContextualEmbeddingResult](../nlcontextualembeddingresult.md): An object that represents the embedding vector result from applying a contextual embedding to a string.
