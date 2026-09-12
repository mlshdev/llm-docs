> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctdarwinnotificationexpectation/handler-swift.property](https://developer.apple.com/documentation/xctest/xctdarwinnotificationexpectation/handler-swift.property)

# handler (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

An optional handler that performs custom evaluation of matching notifications.

## Declaration

```swift
var handler: XCTDarwinNotificationExpectation.Handler? { get set }
```

<a id="Discussion"></a>

## Discussion

If provided, the custom handler will be queried each time a matching notification is received to determine whether the expectation should be fulfilled. This allows the handler to check Darwin state variables or perform other logic beyond simply verifying that the notification has been received.

## See Also

### Custom Notification Evaluation

- [XCTDarwinNotificationExpectation.Handler](handler-swift.typealias.md): A custom handler to be called when a matching notification is received.

# handler (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

An optional handler that performs custom evaluation of matching notifications.

## Declaration

```objectivec
@property (copy, nullable) XCTDarwinNotificationExpectationHandler handler;
```

<a id="Discussion"></a>

## Discussion

If provided, the custom handler will be queried each time a matching notification is received to determine whether the expectation should be fulfilled. This allows the handler to check Darwin state variables or perform other logic beyond simply verifying that the notification has been received.

## See Also

### Custom Notification Evaluation

- [XCTDarwinNotificationExpectationHandler](handler-swift.typealias.md): A custom handler to be called when a matching notification is received.
