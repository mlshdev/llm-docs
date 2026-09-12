> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrarynotificationkey/replacementpassesuserinfokey](https://developer.apple.com/documentation/passkit/pkpasslibrarynotificationkey/replacementpassesuserinfokey)

# replacementPassesUserInfoKey (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

An array of replaced passes.

## Declaration

```swift
static let replacementPassesUserInfoKey: PKPassLibraryNotificationKey
```

## See Also

### Notification keys

- [addedPassesUserInfoKey](addedpassesuserinfokey.md): An array of added passes.
- [passTypeIdentifierUserInfoKey](passtypeidentifieruserinfokey.md): The pass’s pass type identifier.
- [recoveredPassesUserInfoKey](recoveredpassesuserinfokey.md)
- [removedPassInfosUserInfoKey](removedpassinfosuserinfokey.md): An array of dictionaries that describes the removed passes.
- [serialNumberUserInfoKey](serialnumberuserinfokey.md): The pass’s serial number.

# PKPassLibraryReplacementPassesUserInfoKey (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

An array of replaced passes.

## Declaration

```objectivec
extern PKPassLibraryNotificationKey const PKPassLibraryReplacementPassesUserInfoKey;
```

## See Also

### Notification keys

- [PKPassLibraryAddedPassesUserInfoKey](addedpassesuserinfokey.md): An array of added passes.
- [PKPassLibraryPassTypeIdentifierUserInfoKey](passtypeidentifieruserinfokey.md): The pass’s pass type identifier.
- [PKPassLibraryRecoveredPassesUserInfoKey](recoveredpassesuserinfokey.md)
- [PKPassLibraryRemovedPassInfosUserInfoKey](removedpassinfosuserinfokey.md): An array of dictionaries that describes the removed passes.
- [PKPassLibrarySerialNumberUserInfoKey](serialnumberuserinfokey.md): The pass’s serial number.
