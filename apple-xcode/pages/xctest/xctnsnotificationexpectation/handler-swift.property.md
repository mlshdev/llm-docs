> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctnsnotificationexpectation/handler-swift.property](https://developer.apple.com/documentation/xctest/xctnsnotificationexpectation/handler-swift.property)

# handler (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

An optional handler that performs custom evaluation of matching notifications.

## Declaration

```swift
var handler: XCTNSNotificationExpectation.Handler? { get set }
```

## See Also

### Custom Notification Evaluation

- [XCTNSNotificationExpectation.Handler](handler-swift.typealias.md): A custom handler to be called when a matching notification is received.

# handler (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

An optional handler that performs custom evaluation of matching notifications.

## Declaration

```objectivec
@property (copy, nullable) XCNotificationExpectationHandler handler;
```

## See Also

### Custom Notification Evaluation

- [XCNotificationExpectationHandler](handler-swift.typealias.md): A custom handler to be called when a matching notification is received.
