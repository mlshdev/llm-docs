> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/match](https://developer.apple.com/documentation/datadetection/datadetector/match)

# DataDetector.Match

**Framework:** DataDetection  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A representation of a match that includes common properties and an enumeration that represents the match type and its specific semantic components.

## Declaration

```swift
struct Match
```

## Topics

### Match details

- [details](match/details.md): A property that contains the type and semantic data found in a match.
- [preferredHighlightStyle](match/preferredhighlightstyle.md): A value that suggests a highlight style for a match.
- [range](match/range.md): The range of characters in the original text corresponding to the match.

### Values that describe highlighting and semantic details of matches

- [DataDetector.Match.HighlightStyle](match/highlightstyle.md): Values that suggest how to style a highlighted item.
- [DataDetector.Match.SemanticDetails](match/semanticdetails.md): An enumeration of types of matches returned by the scanner.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Structures

- [DataDetector.MatchType](matchtype.md): A set of types of matches that the system can find in a string.
- [DataDetector.Options](options.md): A set of options you can use to refine the behavior of text scanning, and better interpret the semantic domain of the matches.
