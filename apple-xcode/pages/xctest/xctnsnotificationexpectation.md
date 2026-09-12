> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctnsnotificationexpectation](https://developer.apple.com/documentation/xctest/xctnsnotificationexpectation)

# XCTNSNotificationExpectation (Swift)

**Framework:** XCTest  
**Kind:** Class

An expectation that is fulfilled when an expected `NSNotification` is received.

## Declaration

```swift
class XCTNSNotificationExpectation
```

## Topics

### Creating NSNotification Expectations

- [init(name:)](xctnsnotificationexpectation/init%28name_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from the default notification center by any object.
- [init(name:object:)](xctnsnotificationexpectation/init%28name_object_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from the default notification center by a specific object.
- [init(name:object:notificationCenter:)](xctnsnotificationexpectation/init%28name_object_notificationcenter_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from a specific notification center, optionally by a specific object.

### Expectation Properties

- [notificationName](xctnsnotificationexpectation/notificationname.md): The name of the notification that the expectation is waiting for.
- [observedObject](xctnsnotificationexpectation/observedobject.md): The object by which the notification must be posted, or nil if the notification can be posted by any object.
- [notificationCenter](xctnsnotificationexpectation/notificationcenter.md): The notification center from which the notification must be posted.

### Custom Notification Evaluation

- [handler](xctnsnotificationexpectation/handler-swift.property.md): An optional handler that performs custom evaluation of matching notifications.
- [XCTNSNotificationExpectation.Handler](xctnsnotificationexpectation/handler-swift.typealias.md): A custom handler to be called when a matching notification is received.

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

- [XCTDarwinNotificationExpectation](xctdarwinnotificationexpectation.md): An expectation that is fulfilled when an expected Darwin notification is received.

# XCTNSNotificationExpectation (Objective-C)

**Framework:** XCTest  
**Kind:** Class

An expectation that is fulfilled when an expected `NSNotification` is received.

## Declaration

```objectivec
@interface XCTNSNotificationExpectation : XCTestExpectation
```

## Topics

### Creating NSNotification Expectations

- [initWithName:](xctnsnotificationexpectation/init%28name_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from the default notification center by any object.
- [initWithName:object:](xctnsnotificationexpectation/init%28name_object_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from the default notification center by a specific object.
- [initWithName:object:notificationCenter:](xctnsnotificationexpectation/init%28name_object_notificationcenter_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from a specific notification center, optionally by a specific object.

### Expectation Properties

- [notificationName](xctnsnotificationexpectation/notificationname.md): The name of the notification that the expectation is waiting for.
- [observedObject](xctnsnotificationexpectation/observedobject.md): The object by which the notification must be posted, or nil if the notification can be posted by any object.
- [notificationCenter](xctnsnotificationexpectation/notificationcenter.md): The notification center from which the notification must be posted.

### Custom Notification Evaluation

- [handler](xctnsnotificationexpectation/handler-swift.property.md): An optional handler that performs custom evaluation of matching notifications.
- [XCNotificationExpectationHandler](xctnsnotificationexpectation/handler-swift.typealias.md): A custom handler to be called when a matching notification is received.

## Relationships

### Inherits From

- [XCTestExpectation](xctestexpectation.md)

## See Also

### Notification-Based Expectations

- [XCTDarwinNotificationExpectation](xctdarwinnotificationexpectation.md): An expectation that is fulfilled when an expected Darwin notification is received.
