> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/keypress/phases](https://developer.apple.com/documentation/swiftui/keypress/phases)

# KeyPress.Phases

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Options for matching different phases of a key-press event.

## Declaration

```swift
struct Phases
```

## Topics

### Getting the phases

- [down](phases/down.md): The user pressed down on a key.
- [up](phases/up.md): The user released a key.
- [repeat](phases/repeat.md): The user held a key down to issue a sequence of repeating events.
- [all](phases/all.md): A value that matches all key press phases.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Getting the phase of the keypress

- [phase](phase.md): The phase of the key-press event (`.down`, `.repeat`, or `.up`).
