> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrarynotificationkey/removedpassinfosuserinfokey](https://developer.apple.com/documentation/passkit/pkpasslibrarynotificationkey/removedpassinfosuserinfokey)

# removedPassInfosUserInfoKey (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

An array of dictionaries that describes the removed passes.

## Declaration

```swift
static let removedPassInfosUserInfoKey: PKPassLibraryNotificationKey
```

## See Also

### Notification keys

- [addedPassesUserInfoKey](addedpassesuserinfokey.md): An array of added passes.
- [passTypeIdentifierUserInfoKey](passtypeidentifieruserinfokey.md): The pass’s pass type identifier.
- [recoveredPassesUserInfoKey](recoveredpassesuserinfokey.md)
- [replacementPassesUserInfoKey](replacementpassesuserinfokey.md): An array of replaced passes.
- [serialNumberUserInfoKey](serialnumberuserinfokey.md): The pass’s serial number.

# PKPassLibraryRemovedPassInfosUserInfoKey (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · visionOS 1.0+ · watchOS 3.0+

An array of dictionaries that describes the removed passes.

## Declaration

```objectivec
extern PKPassLibraryNotificationKey const PKPassLibraryRemovedPassInfosUserInfoKey;
```

## See Also

### Notification keys

- [PKPassLibraryAddedPassesUserInfoKey](addedpassesuserinfokey.md): An array of added passes.
- [PKPassLibraryPassTypeIdentifierUserInfoKey](passtypeidentifieruserinfokey.md): The pass’s pass type identifier.
- [PKPassLibraryRecoveredPassesUserInfoKey](recoveredpassesuserinfokey.md)
- [PKPassLibraryReplacementPassesUserInfoKey](replacementpassesuserinfokey.md): An array of replaced passes.
- [PKPassLibrarySerialNumberUserInfoKey](serialnumberuserinfokey.md): The pass’s serial number.
