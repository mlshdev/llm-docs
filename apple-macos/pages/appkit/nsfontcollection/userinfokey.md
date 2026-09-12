> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/userinfokey](https://developer.apple.com/documentation/appkit/nsfontcollection/userinfokey)

# NSFontCollection.UserInfoKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

These constants are used as keys in the [didChangeNotification](didchangenotification.md) `userInfo` dictionary to indicate the changes that have taken place.

## Declaration

```swift
struct UserInfoKey
```

## Topics

### User Info Keys

- [actionUserInfoKey](actionuserinfokey.md): An action was taken. See `NSFontCollectionAction Key Values` for the possible values. An `NSString`.
- [nameUserInfoKey](nameuserinfokey.md): The font collection’s name. If renamed, this is the new name. An `NSString`.
- [oldNameUserInfoKey](oldnameuserinfokey.md): Included as a value for the [oldNameUserInfoKey](oldnameuserinfokey.md) key, if present. This is the previous name. An `NSString`.
- [visibilityUserInfoKey](visibilityuserinfokey.md): The visibly of the font collection. An NSNumber containing a value from the [NSFontCollection.Visibility](visibility.md) enum.

### Initializers

- [init(rawValue:)](userinfokey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to Changes

- [didChangeNotification](didchangenotification.md): Posted whenever a font collection is changed.
- [NSFontCollection.ActionTypeKey](actiontypekey.md): The following actions are possible values of the [actionUserInfoKey](actionuserinfokey.md) in the [didChangeNotification](didchangenotification.md) `userInfo` method.

# NSFontCollectionUserInfoKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

These constants are used as keys in the [NSFontCollectionDidChangeNotification](didchangenotification.md) `userInfo` dictionary to indicate the changes that have taken place.

## Declaration

```objectivec
typedef NSString * NSFontCollectionUserInfoKey;
```

## Topics

### User Info Keys

- [NSFontCollectionActionKey](actionuserinfokey.md): An action was taken. See `NSFontCollectionAction Key Values` for the possible values. An `NSString`.
- [NSFontCollectionNameKey](nameuserinfokey.md): The font collection’s name. If renamed, this is the new name. An `NSString`.
- [NSFontCollectionOldNameKey](oldnameuserinfokey.md): Included as a value for the [NSFontCollectionOldNameKey](oldnameuserinfokey.md) key, if present. This is the previous name. An `NSString`.
- [NSFontCollectionVisibilityKey](visibilityuserinfokey.md): The visibly of the font collection. An NSNumber containing a value from the [NSFontCollectionVisibility](visibility.md) enum.

## See Also

### Responding to Changes

- [NSFontCollectionDidChangeNotification](didchangenotification.md): Posted whenever a font collection is changed.
- [NSFontCollectionActionTypeKey](actiontypekey.md): The following actions are possible values of the [NSFontCollectionActionKey](actionuserinfokey.md) in the [NSFontCollectionDidChangeNotification](didchangenotification.md) `userInfo` method.
