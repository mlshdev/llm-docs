> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenkeychainitem/objectid](https://developer.apple.com/documentation/cryptotokenkit/tktokenkeychainitem/objectid)

# objectID (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the object ID used for keychain item identification.

## Declaration

```swift
var objectID: TKToken.ObjectID { get }
```

## See Also

### Accessing Keychain Item Attributes

- [label](label.md): The user-visible label for the keychain item.
- [constraints](constraints.md): Access constraints for the keychain item, keyed by [TKTokenOperation](../tktokenoperation.md) values wrapped in [NSNumber](../../foundation/nsnumber.md) objects.

# objectID (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Returns the object ID used for keychain item identification.

## Declaration

```objectivec
@property (copy, readonly) TKTokenObjectID objectID;
```

## See Also

### Accessing Keychain Item Attributes

- [label](label.md): The user-visible label for the keychain item.
- [constraints](constraints.md): Access constraints for the keychain item, keyed by [TKTokenOperation](../tktokenoperation.md) values wrapped in [NSNumber](../../foundation/nsnumber.md) objects.
