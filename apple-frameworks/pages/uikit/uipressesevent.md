> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipressesevent](https://developer.apple.com/documentation/uikit/uipressesevent)

# UIPressesEvent (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An event that describes the state of a set of physical buttons that are available to the device, such as those on an associated remote or game controller.

## Declaration

```swift
@MainActor class UIPressesEvent
```

## Topics

### Reading the event button presses

- [allPresses](uipressesevent/allpresses.md): The state of all physical buttons in the event.
- [presses(for:)](uipressesevent/presses%28for_%29.md): Returns the state of all physical buttons in the event that are associated with a particular gesture recognizer.

## Relationships

### Inherits From

- [UIEvent](uievent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Button presses

- [UIPress](uipress.md): An object that represents the presence or movement of a button press on the screen for a particular event.

# UIPressesEvent (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

An event that describes the state of a set of physical buttons that are available to the device, such as those on an associated remote or game controller.

## Declaration

```objectivec
@interface UIPressesEvent : UIEvent
```

## Topics

### Reading the event button presses

- [allPresses](uipressesevent/allpresses.md): The state of all physical buttons in the event.
- [pressesForGestureRecognizer:](uipressesevent/presses%28for_%29.md): Returns the state of all physical buttons in the event that are associated with a particular gesture recognizer.

## Relationships

### Inherits From

- [UIEvent](uievent.md)

## See Also

### Button presses

- [UIPress](uipress.md): An object that represents the presence or movement of a button press on the screen for a particular event.
