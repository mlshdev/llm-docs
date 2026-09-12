> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctnsnotificationexpectation/handler-swift.typealias](https://developer.apple.com/documentation/xctest/xctnsnotificationexpectation/handler-swift.typealias)

# XCTNSNotificationExpectation.Handler (Swift)

**Framework:** XCTest  
**Kind:** Type Alias

A custom handler to be called when a matching notification is received.

## Declaration

```swift
typealias Handler = @Sendable (Notification) -> Bool
```

## Parameters

- `notification`: The notification object.

<a id="return-value"></a>

## Return Value

Your custom handler should return [true](https://developer.apple.com/documentation/swift/true) if the expectation is considered fulfilled after the notification is received, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Custom Notification Evaluation

- [handler](handler-swift.property.md): An optional handler that performs custom evaluation of matching notifications.

# XCNotificationExpectationHandler (Objective-C)

**Framework:** XCTest  
**Kind:** Type Alias

A custom handler to be called when a matching notification is received.

## Declaration

```objectivec
typedef _Bool (^)(NSNotification *) XCNotificationExpectationHandler;
```

## Parameters

- `notification`: The notification object.

<a id="return-value"></a>

## Return Value

Your custom handler should return [true](https://developer.apple.com/documentation/swift/true) if the expectation is considered fulfilled after the notification is received, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Custom Notification Evaluation

- [handler](handler-swift.property.md): An optional handler that performs custom evaluation of matching notifications.
