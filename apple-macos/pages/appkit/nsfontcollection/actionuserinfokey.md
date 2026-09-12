> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/actionuserinfokey](https://developer.apple.com/documentation/appkit/nsfontcollection/actionuserinfokey)

# actionUserInfoKey (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

An action was taken. See `NSFontCollectionAction Key Values` for the possible values. An `NSString`.

## Declaration

```swift
class let actionUserInfoKey: NSFontCollection.UserInfoKey
```

## See Also

### User Info Keys

- [nameUserInfoKey](nameuserinfokey.md): The font collection’s name. If renamed, this is the new name. An `NSString`.
- [oldNameUserInfoKey](oldnameuserinfokey.md): Included as a value for the [oldNameUserInfoKey](oldnameuserinfokey.md) key, if present. This is the previous name. An `NSString`.
- [visibilityUserInfoKey](visibilityuserinfokey.md): The visibly of the font collection. An NSNumber containing a value from the [NSFontCollection.Visibility](visibility.md) enum.

# NSFontCollectionActionKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

An action was taken. See `NSFontCollectionAction Key Values` for the possible values. An `NSString`.

## Declaration

```objectivec
extern NSFontCollectionUserInfoKey const NSFontCollectionActionKey;
```

## See Also

### User Info Keys

- [NSFontCollectionNameKey](nameuserinfokey.md): The font collection’s name. If renamed, this is the new name. An `NSString`.
- [NSFontCollectionOldNameKey](oldnameuserinfokey.md): Included as a value for the [NSFontCollectionOldNameKey](oldnameuserinfokey.md) key, if present. This is the previous name. An `NSString`.
- [NSFontCollectionVisibilityKey](visibilityuserinfokey.md): The visibly of the font collection. An NSNumber containing a value from the [NSFontCollectionVisibility](visibility.md) enum.
