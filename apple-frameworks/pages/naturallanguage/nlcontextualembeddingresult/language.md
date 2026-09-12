> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlcontextualembeddingresult/language](https://developer.apple.com/documentation/naturallanguage/nlcontextualembeddingresult/language)

# language (Swift)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The language that the framework identified or used when processing the input string.

## Declaration

```swift
var language: NLLanguage { get }
```

## See Also

### Inspecting the result

- [sequenceLength](sequencelength.md): The number of embedding vectors the request generates.
- [string](string.md): A copy of the input string used to generate the embedding vectors.

# language (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The language that the framework identified or used when processing the input string.

## Declaration

```objectivec
@property (copy, readonly) NLLanguage language;
```

## See Also

### Inspecting the result

- [sequenceLength](sequencelength.md): The number of embedding vectors the request generates.
- [string](string.md): A copy of the input string used to generate the embedding vectors.
