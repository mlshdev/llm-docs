> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlcontextualembedding/init(language:)](https://developer.apple.com/documentation/naturallanguage/nlcontextualembedding/init(language:))

# init(language:) (Swift)

**Framework:** Natural Language  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a contextual embedding from a language.

## Declaration

```swift
init?(language: NLLanguage)
```

## Parameters

- `language`: The language the framework uses to find the most recent embedding suitable for the value you specify.

<a id="discussion"></a>

## Discussion

The language the framework uses to find the most recent embedding suitable for the value you specify.

## See Also

### Creating a contextual embedding

- [init(modelIdentifier:)](init%28modelidentifier_%29.md): Creates a contextual embedding from a model identifier.
- [init(script:)](init%28script_%29.md): Creates a contextual embedding from a script.

# contextualEmbeddingWithLanguage: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a contextual embedding from a language.

## Declaration

```objectivec
+ (NLContextualEmbedding *) contextualEmbeddingWithLanguage:(NLLanguage) language;
```

## Parameters

- `language`: The language the framework uses to find the most recent embedding suitable for the value you specify.

<a id="discussion"></a>

## Discussion

The language the framework uses to find the most recent embedding suitable for the value you specify.

## See Also

### Creating a contextual embedding

- [contextualEmbeddingWithModelIdentifier:](init%28modelidentifier_%29.md): Creates a contextual embedding from a model identifier.
- [contextualEmbeddingWithScript:](init%28script_%29.md): Creates a contextual embedding from a script.
