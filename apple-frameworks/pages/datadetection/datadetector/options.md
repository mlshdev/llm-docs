> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/datadetection/datadetector/options](https://developer.apple.com/documentation/datadetection/datadetector/options)

# DataDetector.Options

**Framework:** DataDetection  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A set of options you can use to refine the behavior of text scanning, and better interpret the semantic domain of the matches.

## Declaration

```swift
struct Options
```

<a id="overview"></a>

## Overview

These properties are only hints, so it’s best to not make assumptions about how the framework uses them:

- Set `documentDate` to the creation date of the scanned string, such as a text message reception date. The default is now.
- Set `documentTimeZone` to the time zone matching the `documentDate`. The default is a person’s current time zone.
- Set `documentLanguageCode` to the language code of the scanned string, for example, “en” for English. Only set this property if you know the target language with a high degree of confidence; otherwise, set to `nil`.
- Set `documentRegion` to the region relevant to the scanned string, if any. Only set this property if you know the region with a high degree of confidence; otherwise, set to `nil`.

## Topics

### Hints you can provide to add more context for the matching process

- [documentDate](options/documentdate.md): The creation date of the scanned string.
- [documentLanguageCode](options/documentlanguagecode.md): An optional value that represents the language code of a specific locale.
- [documentRegion](options/documentregion.md): A locale region that’s relevant to the scanned string.
- [documentTimeZone](options/documenttimezone.md): A date that represents the date of the scanned string.

### Initializers

- [init()](options/init%28%29.md): Initializes a new data detector.

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

- [DataDetector.Match](match.md): A representation of a match that includes common properties and an enumeration that represents the match type and its specific semantic components.
- [DataDetector.MatchType](matchtype.md): A set of types of matches that the system can find in a string.
