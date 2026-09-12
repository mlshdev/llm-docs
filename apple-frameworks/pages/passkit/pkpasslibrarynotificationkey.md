> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpasslibrarynotificationkey](https://developer.apple.com/documentation/passkit/pkpasslibrarynotificationkey)

# PKPassLibraryNotificationKey (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The user info keys that a pass library notification uses.

## Declaration

```swift
struct PKPassLibraryNotificationKey
```

## Topics

### Creating a pass library notification key

- [init(rawValue:)](pkpasslibrarynotificationkey/init%28rawvalue_%29.md): Creates a pass library notification key according to the provided raw value.

### Notification keys

- [addedPassesUserInfoKey](pkpasslibrarynotificationkey/addedpassesuserinfokey.md): An array of added passes.
- [passTypeIdentifierUserInfoKey](pkpasslibrarynotificationkey/passtypeidentifieruserinfokey.md): The pass’s pass type identifier.
- [recoveredPassesUserInfoKey](pkpasslibrarynotificationkey/recoveredpassesuserinfokey.md)
- [removedPassInfosUserInfoKey](pkpasslibrarynotificationkey/removedpassinfosuserinfokey.md): An array of dictionaries that describes the removed passes.
- [replacementPassesUserInfoKey](pkpasslibrarynotificationkey/replacementpassesuserinfokey.md): An array of replaced passes.
- [serialNumberUserInfoKey](pkpasslibrarynotificationkey/serialnumberuserinfokey.md): The pass’s serial number.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Receiving notifications

- [PKPassLibraryNotificationName](pkpasslibrarynotificationname.md): The types of notifications that the pass library posts.

# PKPassLibraryNotificationKey (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The user info keys that a pass library notification uses.

## Declaration

```objectivec
typedef NSString * PKPassLibraryNotificationKey;
```

## Topics

### Notification keys

- [PKPassLibraryAddedPassesUserInfoKey](pkpasslibrarynotificationkey/addedpassesuserinfokey.md): An array of added passes.
- [PKPassLibraryPassTypeIdentifierUserInfoKey](pkpasslibrarynotificationkey/passtypeidentifieruserinfokey.md): The pass’s pass type identifier.
- [PKPassLibraryRecoveredPassesUserInfoKey](pkpasslibrarynotificationkey/recoveredpassesuserinfokey.md)
- [PKPassLibraryRemovedPassInfosUserInfoKey](pkpasslibrarynotificationkey/removedpassinfosuserinfokey.md): An array of dictionaries that describes the removed passes.
- [PKPassLibraryReplacementPassesUserInfoKey](pkpasslibrarynotificationkey/replacementpassesuserinfokey.md): An array of replaced passes.
- [PKPassLibrarySerialNumberUserInfoKey](pkpasslibrarynotificationkey/serialnumberuserinfokey.md): The pass’s serial number.

## See Also

### Receiving notifications

- [PKPassLibraryNotificationName](pkpasslibrarynotificationname.md): The types of notifications that the pass library posts.
