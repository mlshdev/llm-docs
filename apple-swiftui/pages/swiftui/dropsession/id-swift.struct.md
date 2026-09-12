> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/dropsession/id-swift.struct](https://developer.apple.com/documentation/swiftui/dropsession/id-swift.struct)

# DropSession.ID

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The identifier of a drag session.

## Declaration

```swift
struct ID
```

## Topics

### Instance Methods

- [matches(\_:)](id-swift.struct/matches%28__%29.md): Checks if the session value describes the same drag session as the object provided by AppKit.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting drop session details

- [id](id-swift.property.md): The unique identifier of the drop session.
- [localSession](localsession-swift.property.md): Provides additional information about a session if it originated within the app.
- [DropSession.LocalSession](localsession-swift.struct.md): Describes the session originated within the app.
- [phase](phase-swift.property.md): The phase of the current drop session.
- [DropSession.Phase](phase-swift.enum.md): The phase of the current drop session.
- [suggestedOperations](suggestedoperations.md): Operations suggested by the drag source.
