> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrarynotificationkey/passtypeidentifieruserinfokey](https://developer.apple.com/documentation/passkit/pkpasslibrarynotificationkey/passtypeidentifieruserinfokey)

# passTypeIdentifierUserInfoKey (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

The pass’s pass type identifier.

## Declaration

```swift
static let passTypeIdentifierUserInfoKey: PKPassLibraryNotificationKey
```

## See Also

### Notification keys

- [addedPassesUserInfoKey](addedpassesuserinfokey.md): An array of added passes.
- [recoveredPassesUserInfoKey](recoveredpassesuserinfokey.md)
- [removedPassInfosUserInfoKey](removedpassinfosuserinfokey.md): An array of dictionaries that describes the removed passes.
- [replacementPassesUserInfoKey](replacementpassesuserinfokey.md): An array of replaced passes.
- [serialNumberUserInfoKey](serialnumberuserinfokey.md): The pass’s serial number.

# PKPassLibraryPassTypeIdentifierUserInfoKey (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

The pass’s pass type identifier.

## Declaration

```objectivec
extern PKPassLibraryNotificationKey const PKPassLibraryPassTypeIdentifierUserInfoKey;
```

## See Also

### Notification keys

- [PKPassLibraryAddedPassesUserInfoKey](addedpassesuserinfokey.md): An array of added passes.
- [PKPassLibraryRecoveredPassesUserInfoKey](recoveredpassesuserinfokey.md)
- [PKPassLibraryRemovedPassInfosUserInfoKey](removedpassinfosuserinfokey.md): An array of dictionaries that describes the removed passes.
- [PKPassLibraryReplacementPassesUserInfoKey](replacementpassesuserinfokey.md): An array of replaced passes.
- [PKPassLibrarySerialNumberUserInfoKey](serialnumberuserinfokey.md): The pass’s serial number.
