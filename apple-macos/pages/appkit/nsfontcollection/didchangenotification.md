> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/didchangenotification](https://developer.apple.com/documentation/appkit/nsfontcollection/didchangenotification)

# didChangeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Posted whenever a font collection is changed.

## Declaration

```swift
class let didChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification’s object is the font collection that was affected. The notification’s `userInfo` dictionary contains information about the the collection change containing the keys defined in [NSFontCollection.UserInfoKey](userinfokey.md) and the corresponding values.

To observe this notification using Swift concurrency, use [NSFontCollection.DidChangeMessage](didchangemessage.md).

## See Also

### Responding to Changes

- [NSFontCollection.UserInfoKey](userinfokey.md): These constants are used as keys in the [didChangeNotification](didchangenotification.md) `userInfo` dictionary to indicate the changes that have taken place.
- [NSFontCollection.ActionTypeKey](actiontypekey.md): The following actions are possible values of the [actionUserInfoKey](actionuserinfokey.md) in the [didChangeNotification](didchangenotification.md) `userInfo` method.

# NSFontCollectionDidChangeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

Posted whenever a font collection is changed.

## Declaration

```objectivec
extern NSNotificationName const NSFontCollectionDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The notification’s object is the font collection that was affected. The notification’s `userInfo` dictionary contains information about the the collection change containing the keys defined in [NSFontCollectionUserInfoKey](userinfokey.md) and the corresponding values.

To observe this notification using Swift concurrency, use [NSFontCollection.DidChangeMessage](didchangemessage.md).

## See Also

### Responding to Changes

- [NSFontCollectionUserInfoKey](userinfokey.md): These constants are used as keys in the [NSFontCollectionDidChangeNotification](didchangenotification.md) `userInfo` dictionary to indicate the changes that have taken place.
- [NSFontCollectionActionTypeKey](actiontypekey.md): The following actions are possible values of the [NSFontCollectionActionKey](actionuserinfokey.md) in the [NSFontCollectionDidChangeNotification](didchangenotification.md) `userInfo` method.
