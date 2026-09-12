> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/aspasskeycredentialidentity](https://developer.apple.com/documentation/authenticationservices/aspasskeycredentialidentity)

# ASPasskeyCredentialIdentity (Swift)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A description that uniquely identifies a particular passkey credential.

## Declaration

```swift
class ASPasskeyCredentialIdentity
```

## Topics

### Creating a credential identity

- [init(relyingPartyIdentifier:userName:credentialID:userHandle:recordIdentifier:)](aspasskeycredentialidentity/init%28relyingpartyidentifier_username_credentialid_userhandle_recordidentifier_%29-7u7p1.md): Initializes a passkey credential identity.
- [init(relyingPartyIdentifier:userName:credentialID:userHandle:recordIdentifier:)](aspasskeycredentialidentity/init%28relyingpartyidentifier_username_credentialid_userhandle_recordidentifier_%29-9iuhb.md): Creates and initializes a passkey credential identity.

### Ordering credential identities

- [rank](aspasskeycredentialidentity/rank.md): An indicator that enables you to prioritize credential identities relative to each other.

### Associating a user

- [userName](aspasskeycredentialidentity/username.md): The username of this passkey credential.
- [userHandle](aspasskeycredentialidentity/userhandle.md): The user handle of this passkey credential.

### Associating a relying party

- [relyingPartyIdentifier](aspasskeycredentialidentity/relyingpartyidentifier.md): A string that identifies this identity’s relying party.

### Distinguishing identities

- [credentialID](aspasskeycredentialidentity/credentialid.md): The credential identifier for this passkey credential identity.
- [recordIdentifier](aspasskeycredentialidentity/recordidentifier.md): A string used to correlate this identity to a record in your app’s own database.

### Initializers

- [init(coder:)](aspasskeycredentialidentity/init%28coder_%29.md)

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
- [ASPasswordCredentialIdentity](aspasswordcredentialidentity.md): A description that uniquely identifies a particular password credential.

# ASPasskeyCredentialIdentity (Objective-C)

**Framework:** Authentication Services  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A description that uniquely identifies a particular passkey credential.

## Declaration

```objectivec
@interface ASPasskeyCredentialIdentity : NSObject
```

## Topics

### Creating a credential identity

- [identityWithRelyingPartyIdentifier:userName:credentialID:userHandle:recordIdentifier:](aspasskeycredentialidentity/init%28relyingpartyidentifier_username_credentialid_userhandle_recordidentifier_%29-9iuhb.md): Creates and initializes a passkey credential identity.
- [initWithRelyingPartyIdentifier:userName:credentialID:userHandle:recordIdentifier:](aspasskeycredentialidentity/initwithrelyingpartyidentifier_username_credentialid_userhandle_recordidentifier_.md): Initializes a passkey credential identity.

### Ordering credential identities

- [rank](aspasskeycredentialidentity/rank.md): An indicator that enables you to prioritize credential identities relative to each other.

### Associating a user

- [userName](aspasskeycredentialidentity/username.md): The username of this passkey credential.
- [userHandle](aspasskeycredentialidentity/userhandle.md): The user handle of this passkey credential.

### Associating a relying party

- [relyingPartyIdentifier](aspasskeycredentialidentity/relyingpartyidentifier.md): A string that identifies this identity’s relying party.

### Distinguishing identities

- [credentialID](aspasskeycredentialidentity/credentialid.md): The credential identifier for this passkey credential identity.
- [recordIdentifier](aspasskeycredentialidentity/recordidentifier.md): A string used to correlate this identity to a record in your app’s own database.

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
- [ASPasswordCredentialIdentity](aspasswordcredentialidentity.md): A description that uniquely identifies a particular password credential.
