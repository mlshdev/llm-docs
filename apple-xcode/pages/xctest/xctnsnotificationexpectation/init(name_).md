> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctnsnotificationexpectation/init(name:)](https://developer.apple.com/documentation/xctest/xctnsnotificationexpectation/init(name:))

# init(name:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates an expectation that is fulfilled when an `NSNotification` is posted from the default notification center by any object.

## Declaration

```swift
convenience init(name notificationName: NSNotification.Name)
```

## Parameters

- `notificationName`: The notification name to watch for.

## See Also

### Creating NSNotification Expectations

- [init(name:object:)](init%28name_object_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from the default notification center by a specific object.
- [init(name:object:notificationCenter:)](init%28name_object_notificationcenter_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from a specific notification center, optionally by a specific object.

# initWithName: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates an expectation that is fulfilled when an `NSNotification` is posted from the default notification center by any object.

## Declaration

```objectivec
- (instancetype) initWithName:(NSNotificationName) notificationName;
```

## Parameters

- `notificationName`: The notification name to watch for.

## See Also

### Creating NSNotification Expectations

- [initWithName:object:](init%28name_object_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from the default notification center by a specific object.
- [initWithName:object:notificationCenter:](init%28name_object_notificationcenter_%29.md): Creates an expectation that is fulfilled when an `NSNotification` is posted from a specific notification center, optionally by a specific object.
