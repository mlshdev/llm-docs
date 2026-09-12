> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuisiriservice](https://developer.apple.com/documentation/xcuiautomation/xcuisiriservice)

# XCUISiriService (Swift)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 10.3+ · Xcode 16.3+

A proxy that simulates a device’s Siri interface.

## Declaration

```swift
@MainActor class XCUISiriService
```

<a id="overview"></a>

## Overview

This class allows issuing textual queries and producing element queries for UI shown by Siri.

## Topics

### Siri activation

- [activate(voiceRecognitionText:)](xcuisiriservice/activate%28voicerecognitiontext_%29.md): Presents the Siri UI, if it’s not currently active, and accepts a string that is then processed as if it’s recognized speech.

### Siri proxy state

- [debugDescription](xcuisiriservice/debugdescription.md): Provides debugging information about the element representing the root of the Siri UI.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [XCUIElementTypeQueryProvider](xcuielementtypequeryprovider.md)

## See Also

### Related Documentation

- [siriService](xcuidevice/siriservice.md): An object that represents the Siri interface on the device.

### Device simulation

- [XCUIDevice](xcuidevice.md): A proxy that can simulate physical buttons, device orientation, and Siri interaction for an iOS, watchOS, or tvOS device.
- [XCUISystem](xcuisystem.md): A proxy that provides an interface to OS-specific properties and actions.

# XCUISiriService (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 10.3+ · Xcode 16.3+

A proxy that simulates a device’s Siri interface.

## Declaration

```objectivec
@interface XCUISiriService : NSObject
```

<a id="overview"></a>

## Overview

This class allows issuing textual queries and producing element queries for UI shown by Siri.

## Topics

### Siri activation

- [activateWithVoiceRecognitionText:](xcuisiriservice/activate%28voicerecognitiontext_%29.md): Presents the Siri UI, if it’s not currently active, and accepts a string that is then processed as if it’s recognized speech.

### Siri proxy state

- [debugDescription](xcuisiriservice/debugdescription.md): Provides debugging information about the element representing the root of the Siri UI.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [XCUIElementTypeQueryProvider](xcuielementtypequeryprovider.md)

## See Also

### Related Documentation

- [siriService](xcuidevice/siriservice.md): An object that represents the Siri interface on the device.

### Device simulation

- [XCUIDevice](xcuidevice.md): A proxy that can simulate physical buttons, device orientation, and Siri interaction for an iOS, watchOS, or tvOS device.
- [XCUISystem](xcuisystem.md): A proxy that provides an interface to OS-specific properties and actions.
