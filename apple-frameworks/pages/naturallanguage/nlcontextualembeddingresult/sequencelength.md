> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/naturallanguage/nlcontextualembeddingresult/sequencelength

# sequenceLength (Swift)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The number of embedding vectors the request generates.

## Declaration

```swift
var sequenceLength: Int { get }
```

## See Also

### Inspecting the result

- [language](language.md): The language that the framework identified or used when processing the input string.
- [string](string.md): A copy of the input string used to generate the embedding vectors.

# sequenceLength (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The number of embedding vectors the request generates.

## Declaration

```objectivec
@property (readonly) NSUInteger sequenceLength;
```

## See Also

### Inspecting the result

- [language](language.md): The language that the framework identified or used when processing the input string.
- [string](string.md): A copy of the input string used to generate the embedding vectors.
