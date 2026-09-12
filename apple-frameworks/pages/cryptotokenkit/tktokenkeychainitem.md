> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokenkeychainitem](https://developer.apple.com/documentation/cryptotokenkit/tktokenkeychainitem)

# TKTokenKeychainItem (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An abstract base class for managing a token’s contents as keychain items.

## Declaration

```swift
class TKTokenKeychainItem
```

<a id="overview"></a>

## Overview

Don’t use this base class directly. Instead, use one of its subclasses, such as [TKTokenKeychainCertificate](tktokenkeychaincertificate.md) for managing certificates or [TKTokenKeychainKey](tktokenkeychainkey.md) for managing cryptographic keys.

## Topics

### Creating Token Keychain Items

- [init(objectID:)](tktokenkeychainitem/init%28objectid_%29.md): Initializes a token keychain item with the specified object ID.

### Accessing Keychain Item Attributes

- [objectID](tktokenkeychainitem/objectid.md): Returns the object ID used for keychain item identification.
- [label](tktokenkeychainitem/label.md): The user-visible label for the keychain item.
- [constraints](tktokenkeychainitem/constraints.md): Access constraints for the keychain item, keyed by [TKTokenOperation](tktokenoperation.md) values wrapped in [NSNumber](../foundation/nsnumber.md) objects.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [TKTokenKeychainCertificate](tktokenkeychaincertificate.md)
- [TKTokenKeychainKey](tktokenkeychainkey.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accessing Keychain Items

- [keychainContents](tktoken/keychaincontents.md): The contents of the keychain for this token.
- [TKTokenKeychainContents](tktokenkeychaincontents.md): A representation of the state of the keychain for a particular token.
- [TKTokenKeychainCertificate](tktokenkeychaincertificate.md): A token’s certificate as stored in the keychain.
- [TKTokenKeychainKey](tktokenkeychainkey.md): A token’s key as stored in the keychain.
- [TKToken.ObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
- [TKToken.ObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.

# TKTokenKeychainItem (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

An abstract base class for managing a token’s contents as keychain items.

## Declaration

```objectivec
@interface TKTokenKeychainItem : NSObject
```

<a id="overview"></a>

## Overview

Don’t use this base class directly. Instead, use one of its subclasses, such as [TKTokenKeychainCertificate](tktokenkeychaincertificate.md) for managing certificates or [TKTokenKeychainKey](tktokenkeychainkey.md) for managing cryptographic keys.

## Topics

### Creating Token Keychain Items

- [initWithObjectID:](tktokenkeychainitem/init%28objectid_%29.md): Initializes a token keychain item with the specified object ID.

### Accessing Keychain Item Attributes

- [objectID](tktokenkeychainitem/objectid.md): Returns the object ID used for keychain item identification.
- [label](tktokenkeychainitem/label.md): The user-visible label for the keychain item.
- [constraints](tktokenkeychainitem/constraints.md): Access constraints for the keychain item, keyed by [TKTokenOperation](tktokenoperation.md) values wrapped in [NSNumber](../foundation/nsnumber.md) objects.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [TKTokenKeychainCertificate](tktokenkeychaincertificate.md)
- [TKTokenKeychainKey](tktokenkeychainkey.md)

## See Also

### Accessing Keychain Items

- [keychainContents](tktoken/keychaincontents.md): The contents of the keychain for this token.
- [TKTokenKeychainContents](tktokenkeychaincontents.md): A representation of the state of the keychain for a particular token.
- [TKTokenKeychainCertificate](tktokenkeychaincertificate.md): A token’s certificate as stored in the keychain.
- [TKTokenKeychainKey](tktokenkeychainkey.md): A token’s key as stored in the keychain.
- [TKTokenObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
- [TKTokenObjectID](tktoken/objectid.md): A unique and persistent identifier of a particular token object.
