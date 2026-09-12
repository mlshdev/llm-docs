> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.property](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.property)

# name (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the notification.

## Declaration

```swift
var name: NSNotification.Name { get }
```

<a id="Discussion"></a>

## Discussion

Typically you use this property to find out what kind of notification you are dealing with when you receive a notification.

<a id="Special-Considerations"></a>

### Special Considerations

Notification names can be any string. To avoid name collisions, you might want to use a prefix that’s specific to your application.

## See Also

### Getting Notification Information

- [object](object.md): The object associated with the notification.
- [userInfo](userinfo.md): The user information dictionary associated with the notification.

# name (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the notification.

## Declaration

```objectivec
@property (copy, readonly) NSNotificationName name;
```

<a id="Discussion"></a>

## Discussion

Typically you use this property to find out what kind of notification you are dealing with when you receive a notification.

<a id="Special-Considerations"></a>

### Special Considerations

Notification names can be any string. To avoid name collisions, you might want to use a prefix that’s specific to your application.

## See Also

### Getting Notification Information

- [object](object.md): The object associated with the notification.
- [userInfo](userinfo.md): The user information dictionary associated with the notification.
