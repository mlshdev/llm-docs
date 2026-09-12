> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctnsnotificationexpectation/init(name:object:)](https://developer.apple.com/documentation/xctest/xctnsnotificationexpectation/init(name:object:))

# init(name:object:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates an expectation that is fulfilled when an `NSNotification` is posted from the default notification center by a specific object.

## Declaration

```swift
convenience init(name notificationName: NSNotification.Name, object: Any?)
```

## Parameters

- `notificationName`: The notification name to watch for.
- `object`: The object by which the notification must be posted.

## See Also

### Creating NSNotification Expectations

- [init(name:)](init%28name_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from the default notification center by any object.
- [init(name:object:notificationCenter:)](init%28name_object_notificationcenter_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from a specific notification center, optionally by a specific object.

# initWithName:object: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates an expectation that is fulfilled when an `NSNotification` is posted from the default notification center by a specific object.

## Declaration

```objectivec
- (instancetype) initWithName:(NSNotificationName) notificationName object:(id) object;
```

## Parameters

- `notificationName`: The notification name to watch for.
- `object`: The object by which the notification must be posted.

## See Also

### Creating NSNotification Expectations

- [initWithName:](init%28name_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from the default notification center by any object.
- [initWithName:object:notificationCenter:](init%28name_object_notificationcenter_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from a specific notification center, optionally by a specific object.
