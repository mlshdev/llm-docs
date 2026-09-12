> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/object](https://developer.apple.com/documentation/foundation/nsnotification/object)

# object (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The object associated with the notification.

## Declaration

```swift
var object: Any? { get }
```

<a id="Discussion"></a>

## Discussion

This is often the object that posted this notification. In Objective-C, it may be `nil`.

Typically you use this method to find out what object a notification applies to when you receive a notification.

For example, suppose you’ve registered an object to receive the message `handlePortDeath:` when the `PortInvalid` notification is posted to the notification center and that `handlePortDeath:` needs to access the object monitoring the port that is now invalid. `handlePortDeath:` can retrieve that object as shown here:

Example of accessing notification object in Objective-C:

```objc
- (void)handlePortDeath:(NSNotification *)notification
{
    ...
    [self reclaimResourcesForPort:notification.object];
    ...
}
```

## See Also

### Getting Notification Information

- [name](name-swift.property.md): The name of the notification.
- [userInfo](userinfo.md): The user information dictionary associated with the notification.

# object (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The object associated with the notification.

## Declaration

```objectivec
@property (retain, readonly, nullable) id object;
```

<a id="Discussion"></a>

## Discussion

This is often the object that posted this notification. In Objective-C, it may be `nil`.

Typically you use this method to find out what object a notification applies to when you receive a notification.

For example, suppose you’ve registered an object to receive the message `handlePortDeath:` when the `PortInvalid` notification is posted to the notification center and that `handlePortDeath:` needs to access the object monitoring the port that is now invalid. `handlePortDeath:` can retrieve that object as shown here:

Example of accessing notification object in Objective-C:

```objc
- (void)handlePortDeath:(NSNotification *)notification
{
    ...
    [self reclaimResourcesForPort:notification.object];
    ...
}
```

## See Also

### Getting Notification Information

- [name](name-swift.property.md): The name of the notification.
- [userInfo](userinfo.md): The user information dictionary associated with the notification.
