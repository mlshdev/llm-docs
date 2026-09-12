> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/userinfo](https://developer.apple.com/documentation/foundation/nsnotification/userinfo)

# userInfo (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user information dictionary associated with the notification.

## Declaration

```swift
var userInfo: [AnyHashable : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

In Objective-C, this may be `nil`.

The user information dictionary stores any additional objects that objects receiving the notification might use.

For example, in AppKit, [NSControl](https://developer.apple.com/documentation/appkit/nscontrol) objects post the [textDidChangeNotification](https://developer.apple.com/documentation/appkit/nscontrol/textdidchangenotification) whenever the field editor (an [NSText](https://developer.apple.com/documentation/appkit/nstext) object) changes text inside the `NSControl`. This notification provides the `NSControl` object as the notification’s associated object. In order to provide access to the field editor, the `NSControl` object posting the notification adds the field editor to the notification’s user information dictionary. Objects receiving the notification can access the field editor and the `NSControl` object posting the notification as follows:

```swift
func controlTextDidChange(_ notification: Notification) {
    if let fieldEditor = notification.userInfo?["NSFieldEditor"] as? NSText,
        let postingObject = notification.object as? NSControl {
        // work with the field editor and posting object
    }
}
```

## See Also

### Getting Notification Information

- [name](name-swift.property.md): The name of the notification.
- [object](object.md): The object associated with the notification.

# userInfo (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The user information dictionary associated with the notification.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary * userInfo;
```

<a id="Discussion"></a>

## Discussion

In Objective-C, this may be `nil`.

The user information dictionary stores any additional objects that objects receiving the notification might use.

For example, in AppKit, [NSControl](https://developer.apple.com/documentation/appkit/nscontrol) objects post the [NSControlTextDidChangeNotification](https://developer.apple.com/documentation/appkit/nscontrol/textdidchangenotification) whenever the field editor (an [NSText](https://developer.apple.com/documentation/appkit/nstext) object) changes text inside the `NSControl`. This notification provides the `NSControl` object as the notification’s associated object. In order to provide access to the field editor, the `NSControl` object posting the notification adds the field editor to the notification’s user information dictionary. Objects receiving the notification can access the field editor and the `NSControl` object posting the notification as follows:

```swift
func controlTextDidChange(_ notification: Notification) {
    if let fieldEditor = notification.userInfo?["NSFieldEditor"] as? NSText,
        let postingObject = notification.object as? NSControl {
        // work with the field editor and posting object
    }
}
```

## See Also

### Getting Notification Information

- [name](name-swift.property.md): The name of the notification.
- [object](object.md): The object associated with the notification.
