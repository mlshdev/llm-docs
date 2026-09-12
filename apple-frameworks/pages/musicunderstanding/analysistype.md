> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/musicunderstanding/analysistype](https://developer.apple.com/documentation/musicunderstanding/analysistype)

# AnalysisType

**Framework:** Music Understanding  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The analysis type for each session.

## Declaration

```swift
struct AnalysisType
```

<a id="overview"></a>

## Overview

This serves as the primarily type used by the [MusicUnderstandingSession](musicunderstandingsession.md).

## Topics

### Types of analysis

- [key](analysistype/key.md): A value that identifies the key music analysis type.
- [instrumentActivity](analysistype/instrumentactivity.md): A value that identifies the instrument activity music analysis type.
- [loudness](analysistype/loudness.md): A value that identifies the loudness music analysis type.
- [pace](analysistype/pace.md): A value that identifies the pace music analysis type.
- [rawValue](analysistype/rawvalue.md): A value that identifies the type of music analysis to perform.
- [rhythm](analysistype/rhythm.md): A value that identifies the rhythm music analysis type.
- [structure](analysistype/structure.md): A value that identifies the structure music analysis type.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Support types

- [MusicUnderstandingSession.TimedValue](musicunderstandingsession/timedvalue.md): A structure that pairs a value with a time.
- [MusicUnderstandingSession.RangedValue](musicunderstandingsession/rangedvalue.md): A structure that pairs a value over a time range.
