> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctnsnotificationexpectation/notificationcenter](https://developer.apple.com/documentation/xctest/xctnsnotificationexpectation/notificationcenter)

# notificationCenter (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The notification center from which the notification must be posted.

## Declaration

```swift
var notificationCenter: NotificationCenter { get }
```

## See Also

### Expectation Properties

- [notificationName](notificationname.md): The name of the notification that the expectation is waiting for.
- [observedObject](observedobject.md): The object by which the notification must be posted, or nil if the notification can be posted by any object.

# notificationCenter (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The notification center from which the notification must be posted.

## Declaration

```objectivec
@property (strong, readonly) NSNotificationCenter * notificationCenter;
```

## See Also

### Expectation Properties

- [notificationName](notificationname.md): The name of the notification that the expectation is waiting for.
- [observedObject](observedobject.md): The object by which the notification must be posted, or nil if the notification can be posted by any object.
