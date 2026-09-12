> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlcontextualembedding/init(modelidentifier:)](https://developer.apple.com/documentation/naturallanguage/nlcontextualembedding/init(modelidentifier:))

# init(modelIdentifier:) (Swift)

**Framework:** Natural Language  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a contextual embedding from a model identifier.

## Declaration

```swift
convenience init?(modelIdentifier: String)
```

## Parameters

- `modelIdentifier`: A string that uniquely identifies the embedding model.

<a id="discussion"></a>

## Discussion

If you train a custom model with the contextual embedding as the feature layer, keep track of this identifier and use it when loading the custom model in your app.

## See Also

### Creating a contextual embedding

- [init(language:)](init%28language_%29.md): Creates a contextual embedding from a language.
- [init(script:)](init%28script_%29.md): Creates a contextual embedding from a script.

# contextualEmbeddingWithModelIdentifier: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a contextual embedding from a model identifier.

## Declaration

```objectivec
+ (instancetype) contextualEmbeddingWithModelIdentifier:(NSString *) modelIdentifier;
```

## Parameters

- `modelIdentifier`: A string that uniquely identifies the embedding model.

<a id="discussion"></a>

## Discussion

If you train a custom model with the contextual embedding as the feature layer, keep track of this identifier and use it when loading the custom model in your app.

## See Also

### Creating a contextual embedding

- [contextualEmbeddingWithLanguage:](init%28language_%29.md): Creates a contextual embedding from a language.
- [contextualEmbeddingWithScript:](init%28script_%29.md): Creates a contextual embedding from a script.
