> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontcollection/actiontypekey](https://developer.apple.com/documentation/appkit/nsfontcollection/actiontypekey)

# NSFontCollection.ActionTypeKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

The following actions are possible values of the [actionUserInfoKey](actionuserinfokey.md) in the [didChangeNotification](didchangenotification.md) `userInfo` method.

## Declaration

```swift
struct ActionTypeKey
```

## Topics

### Action Key Types

- [shown](actiontypekey/shown.md): The font collection was shown.
- [hidden](actiontypekey/hidden.md): The font collection was hidden.
- [renamed](actiontypekey/renamed.md): The font collection was renamed.

### Initializers

- [init(rawValue:)](actiontypekey/init%28rawvalue_%29.md)

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
- [NSFontCollection.UserInfoKey](userinfokey.md): These constants are used as keys in the [didChangeNotification](didchangenotification.md) `userInfo` dictionary to indicate the changes that have taken place.

# NSFontCollectionActionTypeKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

The following actions are possible values of the [NSFontCollectionActionKey](actionuserinfokey.md) in the [NSFontCollectionDidChangeNotification](didchangenotification.md) `userInfo` method.

## Declaration

```objectivec
typedef NSString * NSFontCollectionActionTypeKey;
```

## Topics

### Action Key Types

- [NSFontCollectionWasShown](actiontypekey/shown.md): The font collection was shown.
- [NSFontCollectionWasHidden](actiontypekey/hidden.md): The font collection was hidden.
- [NSFontCollectionWasRenamed](actiontypekey/renamed.md): The font collection was renamed.

## See Also

### Responding to Changes

- [NSFontCollectionDidChangeNotification](didchangenotification.md): Posted whenever a font collection is changed.
- [NSFontCollectionUserInfoKey](userinfokey.md): These constants are used as keys in the [NSFontCollectionDidChangeNotification](didchangenotification.md) `userInfo` dictionary to indicate the changes that have taken place.
