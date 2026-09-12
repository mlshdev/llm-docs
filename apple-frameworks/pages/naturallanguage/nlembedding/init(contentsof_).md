> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlembedding/init(contentsof:)](https://developer.apple.com/documentation/naturallanguage/nlembedding/init(contentsof:))

# init(contentsOf:) (Swift)

**Framework:** Natural Language  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a word embedding from a model file.

## Declaration

```swift
convenience init(contentsOf url: URL) throws
```

## Parameters

- `url`: The location of the .`mlmodel` file that contains a word embedding.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a word embedding from an `.mlmodel` file saved by Create ML’s [MLWordEmbedding](../../createml/mlwordembedding.md).

## See Also

### Creating a word embedding

- [wordEmbedding(for:)](wordembedding%28for_%29.md): Retrieves a word embedding for a given language.
- [wordEmbedding(for:revision:)](wordembedding%28for_revision_%29.md): Retrieves a word embedding for a given language and revision.

# embeddingWithContentsOfURL:error: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a word embedding from a model file.

## Declaration

```objectivec
+ (instancetype) embeddingWithContentsOfURL:(NSURL *) url error:(NSError **) error;
```

## Parameters

- `url`: The location of the .`mlmodel` file that contains a word embedding.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a word embedding from an `.mlmodel` file saved by Create ML’s [MLWordEmbedding](../../createml/mlwordembedding.md).

## See Also

### Creating a word embedding

- [wordEmbeddingForLanguage:](wordembedding%28for_%29.md): Retrieves a word embedding for a given language.
- [wordEmbeddingForLanguage:revision:](wordembedding%28for_revision_%29.md): Retrieves a word embedding for a given language and revision.
