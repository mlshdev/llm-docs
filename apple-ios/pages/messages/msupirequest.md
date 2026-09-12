> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msupirequest](https://developer.apple.com/documentation/messages/msupirequest)

# MSUPIRequest (Swift)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
class MSUPIRequest
```

<a id="overview"></a>

## Overview

Request for UPI (Unified Payments Interface) device validation.

In order to use this API, you must use the managed entitlement `com.apple.developer.upi-device-validation`. This API is only functional on devices with SMS capability, and only compatible with non-iMessagable recipients.

## Topics

### Initializers

- [init(validationToken:recipients:)](msupirequest/init%28validationtoken_recipients_%29.md)

### Instance Properties

- [recipients](msupirequest/recipients.md)
- [validationToken](msupirequest/validationtoken.md)

### Instance Methods

- [send(completionHandler:)](msupirequest/send%28completionhandler_%29.md)

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

# MSUPIRequest (Objective-C)

**Framework:** Messages  
**Kind:** Class  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```objectivec
@interface MSUPIRequest : NSObject
```

<a id="overview"></a>

## Overview

Request for UPI (Unified Payments Interface) device validation.

In order to use this API, you must use the managed entitlement `com.apple.developer.upi-device-validation`. This API is only functional on devices with SMS capability, and only compatible with non-iMessagable recipients.

## Topics

### Instance Properties

- [recipients](msupirequest/recipients.md)
- [validationToken](msupirequest/validationtoken.md)

### Instance Methods

- [initWithValidationToken:recipients:](msupirequest/init%28validationtoken_recipients_%29.md)
- [sendWithCompletionHandler:](msupirequest/send%28completionhandler_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
