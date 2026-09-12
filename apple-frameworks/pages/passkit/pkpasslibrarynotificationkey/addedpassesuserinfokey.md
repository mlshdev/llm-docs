> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrarynotificationkey/addedpassesuserinfokey](https://developer.apple.com/documentation/passkit/pkpasslibrarynotificationkey/addedpassesuserinfokey)

# addedPassesUserInfoKey (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

An array of added passes.

## Declaration

```swift
static let addedPassesUserInfoKey: PKPassLibraryNotificationKey
```

## See Also

### Notification keys

- [passTypeIdentifierUserInfoKey](passtypeidentifieruserinfokey.md): The pass’s pass type identifier.
- [recoveredPassesUserInfoKey](recoveredpassesuserinfokey.md)
- [removedPassInfosUserInfoKey](removedpassinfosuserinfokey.md): An array of dictionaries that describes the removed passes.
- [replacementPassesUserInfoKey](replacementpassesuserinfokey.md): An array of replaced passes.
- [serialNumberUserInfoKey](serialnumberuserinfokey.md): The pass’s serial number.

# PKPassLibraryAddedPassesUserInfoKey (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

An array of added passes.

## Declaration

```objectivec
extern PKPassLibraryNotificationKey const PKPassLibraryAddedPassesUserInfoKey;
```

## See Also

### Notification keys

- [PKPassLibraryPassTypeIdentifierUserInfoKey](passtypeidentifieruserinfokey.md): The pass’s pass type identifier.
- [PKPassLibraryRecoveredPassesUserInfoKey](recoveredpassesuserinfokey.md)
- [PKPassLibraryRemovedPassInfosUserInfoKey](removedpassinfosuserinfokey.md): An array of dictionaries that describes the removed passes.
- [PKPassLibraryReplacementPassesUserInfoKey](replacementpassesuserinfokey.md): An array of replaced passes.
- [PKPassLibrarySerialNumberUserInfoKey](serialnumberuserinfokey.md): The pass’s serial number.
