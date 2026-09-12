> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/nameuserinfokey](https://developer.apple.com/documentation/appkit/nsfontcollection/nameuserinfokey)

# nameUserInfoKey (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

The font collection’s name. If renamed, this is the new name. An `NSString`.

## Declaration

```swift
class let nameUserInfoKey: NSFontCollection.UserInfoKey
```

## See Also

### User Info Keys

- [actionUserInfoKey](actionuserinfokey.md): An action was taken. See `NSFontCollectionAction Key Values` for the possible values. An `NSString`.
- [oldNameUserInfoKey](oldnameuserinfokey.md): Included as a value for the [oldNameUserInfoKey](oldnameuserinfokey.md) key, if present. This is the previous name. An `NSString`.
- [visibilityUserInfoKey](visibilityuserinfokey.md): The visibly of the font collection. An NSNumber containing a value from the [NSFontCollection.Visibility](visibility.md) enum.

# NSFontCollectionNameKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

The font collection’s name. If renamed, this is the new name. An `NSString`.

## Declaration

```objectivec
extern NSFontCollectionUserInfoKey const NSFontCollectionNameKey;
```

## See Also

### User Info Keys

- [NSFontCollectionActionKey](actionuserinfokey.md): An action was taken. See `NSFontCollectionAction Key Values` for the possible values. An `NSString`.
- [NSFontCollectionOldNameKey](oldnameuserinfokey.md): Included as a value for the [NSFontCollectionOldNameKey](oldnameuserinfokey.md) key, if present. This is the previous name. An `NSString`.
- [NSFontCollectionVisibilityKey](visibilityuserinfokey.md): The visibly of the font collection. An NSNumber containing a value from the [NSFontCollectionVisibility](visibility.md) enum.
