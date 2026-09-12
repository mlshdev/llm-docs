> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctdarwinnotificationexpectation/handler-swift.typealias](https://developer.apple.com/documentation/xctest/xctdarwinnotificationexpectation/handler-swift.typealias)

# XCTDarwinNotificationExpectation.Handler (Swift)

**Framework:** XCTest  
**Kind:** Type Alias

A custom handler to be called when a matching notification is received.

## Declaration

```swift
typealias Handler = @Sendable () -> Bool
```

<a id="return-value"></a>

## Return Value

Your custom handler should return [true](https://developer.apple.com/documentation/swift/true) if the expectation is considered fulfilled after the notification is received, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Custom Notification Evaluation

- [handler](handler-swift.property.md): An optional handler that performs custom evaluation of matching notifications.

# XCTDarwinNotificationExpectationHandler (Objective-C)

**Framework:** XCTest  
**Kind:** Type Alias

A custom handler to be called when a matching notification is received.

## Declaration

```objectivec
typedef _Bool (^)(void) XCTDarwinNotificationExpectationHandler;
```

<a id="return-value"></a>

## Return Value

Your custom handler should return [true](https://developer.apple.com/documentation/swift/true) if the expectation is considered fulfilled after the notification is received, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Custom Notification Evaluation

- [handler](handler-swift.property.md): An optional handler that performs custom evaluation of matching notifications.
