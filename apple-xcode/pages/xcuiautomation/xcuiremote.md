> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuiremote](https://developer.apple.com/documentation/xcuiautomation/xcuiremote)

# XCUIRemote (Swift)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** tvOS · Xcode 16.3+

A class that simulates interaction with a physical remote control.

## Declaration

```swift
@MainActor class XCUIRemote
```

## Topics

### Accessing the simulated remote

- [shared](xcuiremote/shared.md): The simulated physical remote control.

### Pressing remote buttons

- [press(\_:)](xcuiremote/press%28__%29.md): Sends a momentary press of a button on a physical remote control.
- [press(\_:forDuration:)](xcuiremote/press%28__forduration_%29.md): Sends a press and hold of a button on a physical remote control, holding for the specified duration.
- [XCUIRemoteButton](xcuiremote/button.md): A button on a physical remote control.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# XCUIRemote (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** tvOS · Xcode 16.3+

A class that simulates interaction with a physical remote control.

## Declaration

```objectivec
@interface XCUIRemote : NSObject
```

## Topics

### Accessing the simulated remote

- [sharedRemote](xcuiremote/shared.md): The simulated physical remote control.

### Pressing remote buttons

- [pressButton:](xcuiremote/press%28__%29.md): Sends a momentary press of a button on a physical remote control.
- [pressButton:forDuration:](xcuiremote/press%28__forduration_%29.md): Sends a press and hold of a button on a physical remote control, holding for the specified duration.
- [XCUIRemoteButton](xcuiremote/button.md): A button on a physical remote control.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
