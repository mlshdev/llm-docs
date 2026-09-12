> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlcontextualembedding/init(script:)](https://developer.apple.com/documentation/naturallanguage/nlcontextualembedding/init(script:))

# init(script:) (Swift)

**Framework:** Natural Language  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a contextual embedding from a script.

## Declaration

```swift
init?(script: NLScript)
```

## Parameters

- `script`: The writing system the framework uses to find the most suitable system embedding for the value you specify; for example, Chinese or Latin.

## See Also

### Creating a contextual embedding

- [init(modelIdentifier:)](init%28modelidentifier_%29.md): Creates a contextual embedding from a model identifier.
- [init(language:)](init%28language_%29.md): Creates a contextual embedding from a language.

# contextualEmbeddingWithScript: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a contextual embedding from a script.

## Declaration

```objectivec
+ (NLContextualEmbedding *) contextualEmbeddingWithScript:(NLScript) script;
```

## Parameters

- `script`: The writing system the framework uses to find the most suitable system embedding for the value you specify; for example, Chinese or Latin.

## See Also

### Creating a contextual embedding

- [contextualEmbeddingWithModelIdentifier:](init%28modelidentifier_%29.md): Creates a contextual embedding from a model identifier.
- [contextualEmbeddingWithLanguage:](init%28language_%29.md): Creates a contextual embedding from a language.
