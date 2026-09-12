> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasswordcredentialidentity](https://developer.apple.com/documentation/authenticationservices/aspasswordcredentialidentity)

# ASPasswordCredentialIdentity (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A description that uniquely identifies a particular password credential.

## Declaration

```swift
class ASPasswordCredentialIdentity
```

## Topics

### Creating a credential identity

- [init(serviceIdentifier:user:recordIdentifier:)](aspasswordcredentialidentity/init%28serviceidentifier_user_recordidentifier_%29.md): Initializes a password credential identity.
- [ASCredentialServiceIdentifier](ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.

### Ordering credential identities

- [rank](aspasswordcredentialidentity/rank.md): An indicator that enables you to prioritze credential identities relative to each other.

### Associating a user

- [user](aspasswordcredentialidentity/user.md): The username associated with the credential.

### Distinguishing identities

- [recordIdentifier](aspasswordcredentialidentity/recordidentifier.md): A string used to correlate this identity to a record in your app’s own database.
- [serviceIdentifier](aspasswordcredentialidentity/serviceidentifier.md): An identifier that helps the system know with which apps or websites to associate this credential.

### Initializers

- [init(coder:)](aspasswordcredentialidentity/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASCredentialIdentity](ascredentialidentity.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Adding and removing credential identities

- [saveCredentialIdentities(\_:completion:)](ascredentialidentitystore/savecredentialidentities%28__completion_%29-1bbx6.md): Save the supplied credential identities to the store.
- [replaceCredentialIdentities(\_:completion:)](ascredentialidentitystore/replacecredentialidentities%28__completion_%29.md): Replaces existing credential identities with new credential identities.
- [removeAllCredentialIdentities(\_:)](ascredentialidentitystore/removeallcredentialidentities%28__%29.md): Removes all existing credential identities from the store.
- [removeCredentialIdentities(\_:completion:)](ascredentialidentitystore/removecredentialidentities%28__completion_%29-67lcw.md): Remove the given credential identities from the store.
- [ASCredentialIdentity](ascredentialidentity.md): A protocol that credential identity classes conform to that uniquely identifies credentials.
- [ASPasskeyCredentialIdentity](aspasskeycredentialidentity.md): A description that uniquely identifies a particular passkey credential.

# ASPasswordCredentialIdentity (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A description that uniquely identifies a particular password credential.

## Declaration

```objectivec
@interface ASPasswordCredentialIdentity : NSObject
```

## Topics

### Creating a credential identity

- [identityWithServiceIdentifier:user:recordIdentifier:](aspasswordcredentialidentity/identitywithserviceidentifier_user_recordidentifier_.md): Creates and returns a password credential identity object with a service identifier.
- [initWithServiceIdentifier:user:recordIdentifier:](aspasswordcredentialidentity/init%28serviceidentifier_user_recordidentifier_%29.md): Initializes a password credential identity.
- [ASCredentialServiceIdentifier](ascredentialserviceidentifier.md): An identifier representing a particular service for which the user needs a credential, like a web site.

### Ordering credential identities

- [rank](aspasswordcredentialidentity/rank.md): An indicator that enables you to prioritze credential identities relative to each other.

### Associating a user

- [user](aspasswordcredentialidentity/user.md): The username associated with the credential.

### Distinguishing identities

- [recordIdentifier](aspasswordcredentialidentity/recordidentifier.md): A string used to correlate this identity to a record in your app’s own database.
- [serviceIdentifier](aspasswordcredentialidentity/serviceidentifier.md): An identifier that helps the system know with which apps or websites to associate this credential.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [ASCredentialIdentity](ascredentialidentity.md)
- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Adding and removing credential identities

- [saveCredentialIdentityEntries:completion:](ascredentialidentitystore/savecredentialidentities%28__completion_%29-1bbx6.md): Save the supplied credential identities to the store.
- [replaceCredentialIdentityEntries:completion:](ascredentialidentitystore/replacecredentialidentities%28__completion_%29.md): Replaces existing credential identities with new credential identities.
- [removeAllCredentialIdentitiesWithCompletion:](ascredentialidentitystore/removeallcredentialidentities%28__%29.md): Removes all existing credential identities from the store.
- [removeCredentialIdentityEntries:completion:](ascredentialidentitystore/removecredentialidentities%28__completion_%29-67lcw.md): Remove the given credential identities from the store.
- [ASCredentialIdentity](ascredentialidentity.md): A protocol that credential identity classes conform to that uniquely identifies credentials.
- [ASPasskeyCredentialIdentity](aspasskeycredentialidentity.md): A description that uniquely identifies a particular passkey credential.
