> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nlcontextualembeddingresult/string](https://developer.apple.com/documentation/naturallanguage/nlcontextualembeddingresult/string)

# string (Swift)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A copy of the input string used to generate the embedding vectors.

## Declaration

```swift
var string: String { get }
```

## See Also

### Inspecting the result

- [language](language.md): The language that the framework identified or used when processing the input string.
- [sequenceLength](sequencelength.md): The number of embedding vectors the request generates.

# string (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A copy of the input string used to generate the embedding vectors.

## Declaration

```objectivec
@property (copy, readonly) NSString * string;
```

## See Also

### Inspecting the result

- [language](language.md): The language that the framework identified or used when processing the input string.
- [sequenceLength](sequencelength.md): The number of embedding vectors the request generates.
