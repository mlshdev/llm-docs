> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctnsnotificationexpectation/init(name:object:notificationcenter:)](https://developer.apple.com/documentation/xctest/xctnsnotificationexpectation/init(name:object:notificationcenter:))

# init(name:object:notificationCenter:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates an expectation that is fulfilled when an `NSNotification` is posted from a specific notification center, optionally by a specific object.

## Declaration

```swift
init(name notificationName: NSNotification.Name, object: Any?, notificationCenter: NotificationCenter)
```

## Parameters

- `notificationName`: The notification name to watch for.
- `object`: The object by which the notification must be posted, or nil if the notification can be posted by any object.
- `notificationCenter`: The [NotificationCenter](https://developer.apple.com/documentation/foundation/notificationcenter) from which the notification must be posted.

## See Also

### Creating NSNotification Expectations

- [init(name:)](init%28name_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from the default notification center by any object.
- [init(name:object:)](init%28name_object_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from the default notification center by a specific object.

# initWithName:object:notificationCenter: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates an expectation that is fulfilled when an `NSNotification` is posted from a specific notification center, optionally by a specific object.

## Declaration

```objectivec
- (instancetype) initWithName:(NSNotificationName) notificationName object:(id) object notificationCenter:(NSNotificationCenter *) notificationCenter;
```

## Parameters

- `notificationName`: The notification name to watch for.
- `object`: The object by which the notification must be posted, or nil if the notification can be posted by any object.
- `notificationCenter`: The [NSNotificationCenter](https://developer.apple.com/documentation/foundation/notificationcenter) from which the notification must be posted.

## See Also

### Creating NSNotification Expectations

- [initWithName:](init%28name_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from the default notification center by any object.
- [initWithName:object:](init%28name_object_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from the default notification center by a specific object.
