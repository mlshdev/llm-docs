> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/worldrecenterphase](https://developer.apple.com/documentation/swiftui/worldrecenterphase)

# WorldRecenterPhase

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** macOS 26.0+ · visionOS 26.0+

A type that represents information associated with a phase of a system recenter event. Values of this type are passed to the closure specified in View.onWorldRecenter(action:).

## Declaration

```swift
enum WorldRecenterPhase
```

## Topics

### Enumeration Cases

- [WorldRecenterPhase.began](worldrecenterphase/began.md): The app has begun to fade out. It is not re-positioned yet.
- [WorldRecenterPhase.ended](worldrecenterphase/ended.md): The app has begun to fade in after it has been re-positioned.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
