> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuivoiceoverservice](https://developer.apple.com/documentation/xcuiautomation/xcuivoiceoverservice)

# XCUIVoiceOverService (Swift)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 16.3+

## Declaration

```swift
@MainActor class XCUIVoiceOverService
```

<a id="overview"></a>

## Overview

Provides programmatic control of VoiceOver for UI testing.

Access this service through the @c voiceOverService property on @c XCUIDevice.

## Topics

### Classes

- [XCUIVoiceOverService.Output](xcuivoiceoverservice/output.md)

### Structures

- [XCUIVoiceOverService.Error](xcuivoiceoverservice/error.md)

### Instance Properties

- [debugDescription](xcuivoiceoverservice/debugdescription.md): Provides debugging information about the service.
- [isEnabled](xcuivoiceoverservice/isenabled.md): Whether VoiceOver is currently enabled.

### Instance Methods

- [currentSpeech()](xcuivoiceoverservice/currentspeech%28%29.md): Return the speech for the currently focused element.
- [disable()](xcuivoiceoverservice/disable%28%29.md): Disable VoiceOver.
- [enable()](xcuivoiceoverservice/enable%28%29.md): Enable VoiceOver.
- [moveBackward()](xcuivoiceoverservice/movebackward%28%29.md): Move VoiceOver to the previous element and return its speech.
- [moveForward()](xcuivoiceoverservice/moveforward%28%29.md): Move VoiceOver to the next element and return its speech.
- [moveIn()](xcuivoiceoverservice/movein%28%29.md): Move VoiceOver into the current container and return its speech.
- [moveOut()](xcuivoiceoverservice/moveout%28%29.md): Move VoiceOver out of the current container and return its speech.

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

# XCUIVoiceOverService (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 16.3+

## Declaration

```objectivec
@interface XCUIVoiceOverService : NSObject
```

<a id="overview"></a>

## Overview

Provides programmatic control of VoiceOver for UI testing.

Access this service through the @c voiceOverService property on @c XCUIDevice.

## Topics

### Instance Properties

- [debugDescription](xcuivoiceoverservice/debugdescription.md): Provides debugging information about the service.
- [enabled](xcuivoiceoverservice/isenabled.md): Whether VoiceOver is currently enabled.

### Instance Methods

- [currentSpeechAndReturnError:](xcuivoiceoverservice/currentspeech%28%29.md): Return the speech for the currently focused element.
- [disableAndReturnError:](xcuivoiceoverservice/disable%28%29.md): Disable VoiceOver.
- [enableAndReturnError:](xcuivoiceoverservice/enable%28%29.md): Enable VoiceOver.
- [moveBackwardAndReturnError:](xcuivoiceoverservice/movebackward%28%29.md): Move VoiceOver to the previous element and return its speech.
- [moveForwardAndReturnError:](xcuivoiceoverservice/moveforward%28%29.md): Move VoiceOver to the next element and return its speech.
- [moveInAndReturnError:](xcuivoiceoverservice/movein%28%29.md): Move VoiceOver into the current container and return its speech.
- [moveOutAndReturnError:](xcuivoiceoverservice/moveout%28%29.md): Move VoiceOver out of the current container and return its speech.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
