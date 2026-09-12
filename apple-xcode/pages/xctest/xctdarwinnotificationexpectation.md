> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctdarwinnotificationexpectation](https://developer.apple.com/documentation/xctest/xctdarwinnotificationexpectation)

# XCTDarwinNotificationExpectation (Swift)

**Framework:** XCTest  
**Kind:** Class

An expectation that is fulfilled when an expected Darwin notification is received.

## Declaration

```swift
class XCTDarwinNotificationExpectation
```

<a id="overview"></a>

## Overview

If a custom [handler](xctdarwinnotificationexpectation/handler-swift.property.md) value is not provided, the expectation will be fulfilled as soon as a matching Darwin notification is received from any process.

## Topics

### Creating Darwin Notification Expectations

- [init(notificationName:)](xctdarwinnotificationexpectation/init%28notificationname_%29.md): Creates an expectation that waits for a Darwin notification with the specified name to be posted.

### Expectation Properties

- [notificationName](xctdarwinnotificationexpectation/notificationname.md): The name of the notification that the expectation is waiting for.

### Custom Notification Evaluation

- [handler](xctdarwinnotificationexpectation/handler-swift.property.md): An optional handler that performs custom evaluation of matching notifications.
- [XCTDarwinNotificationExpectation.Handler](xctdarwinnotificationexpectation/handler-swift.typealias.md): A custom handler to be called when a matching notification is received.

## Relationships

### Inherits From

- [XCTestExpectation](xctestexpectation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Notification-Based Expectations

- [XCTNSNotificationExpectation](xctnsnotificationexpectation.md): An expectation that is fulfilled when an expected `NSNotification` is received.

# XCTDarwinNotificationExpectation (Objective-C)

**Framework:** XCTest  
**Kind:** Class

An expectation that is fulfilled when an expected Darwin notification is received.

## Declaration

```objectivec
@interface XCTDarwinNotificationExpectation : XCTestExpectation
```

<a id="overview"></a>

## Overview

If a custom [handler](xctdarwinnotificationexpectation/handler-swift.property.md) value is not provided, the expectation will be fulfilled as soon as a matching Darwin notification is received from any process.

## Topics

### Creating Darwin Notification Expectations

- [initWithNotificationName:](xctdarwinnotificationexpectation/init%28notificationname_%29.md): Creates an expectation that waits for a Darwin notification with the specified name to be posted.

### Expectation Properties

- [notificationName](xctdarwinnotificationexpectation/notificationname.md): The name of the notification that the expectation is waiting for.

### Custom Notification Evaluation

- [handler](xctdarwinnotificationexpectation/handler-swift.property.md): An optional handler that performs custom evaluation of matching notifications.
- [XCTDarwinNotificationExpectationHandler](xctdarwinnotificationexpectation/handler-swift.typealias.md): A custom handler to be called when a matching notification is received.

## Relationships

### Inherits From

- [XCTestExpectation](xctestexpectation.md)

## See Also

### Notification-Based Expectations

- [XCTNSNotificationExpectation](xctnsnotificationexpectation.md): An expectation that is fulfilled when an expected `NSNotification` is received.
