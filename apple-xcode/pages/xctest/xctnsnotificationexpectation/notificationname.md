> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctnsnotificationexpectation/notificationname](https://developer.apple.com/documentation/xctest/xctnsnotificationexpectation/notificationname)

# notificationName (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

The name of the notification that the expectation is waiting for.

## Declaration

```swift
var notificationName: NSNotification.Name { get }
```

## See Also

### Expectation Properties

- [observedObject](observedobject.md): The object by which the notification must be posted, or nil if the notification can be posted by any object.
- [notificationCenter](notificationcenter.md): The notification center from which the notification must be posted.

# notificationName (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The name of the notification that the expectation is waiting for.

## Declaration

```objectivec
@property (copy, readonly) NSNotificationName notificationName;
```

## See Also

### Expectation Properties

- [observedObject](observedobject.md): The object by which the notification must be posted, or nil if the notification can be posted by any object.
- [notificationCenter](notificationcenter.md): The notification center from which the notification must be posted.
