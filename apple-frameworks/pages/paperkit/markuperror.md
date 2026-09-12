> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/paperkit/markuperror](https://developer.apple.com/documentation/paperkit/markuperror)

# MarkupError

**Framework:** PaperKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The error thrown for encoding / decoding data models.

## Declaration

```swift
enum MarkupError
```

## Topics

### Handling error cases

- [MarkupError.incorrectFormat](markuperror/incorrectformat.md): Incorrect format or header.
- [MarkupError.malformedData](markuperror/malformeddata.md): The binary data was malformed in some way.
- [MarkupError.incompatibleFormatTooNew](markuperror/incompatibleformattoonew.md): The data being decoded has a newer format that cannot be decoded.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
