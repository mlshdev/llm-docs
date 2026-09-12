> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/ascredentialidentity](https://developer.apple.com/documentation/authenticationservices/ascredentialidentity)

# ASCredentialIdentity (Swift)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A protocol that credential identity classes conform to that uniquely identifies credentials.

## Declaration

```swift
protocol ASCredentialIdentity : NSObjectProtocol
```

## Topics

### Ordering credential identities

- [rank](ascredentialidentity/rank.md): An indicator that enables you to prioritize credential identities relative to each other.

### Associating a user

- [user](ascredentialidentity/user.md): The username associated with this credential.

### Distinguishing identities

- [recordIdentifier](ascredentialidentity/recordidentifier.md): A string used to correlate this identity to a record in your app’s own database.
- [serviceIdentifier](ascredentialidentity/serviceidentifier.md): An identifier that helps the system know with which apps or websites to associate this credential.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [ASOneTimeCodeCredentialIdentity](asonetimecodecredentialidentity.md)
- [ASPasskeyCredentialIdentity](aspasskeycredentialidentity.md)
- [ASPasswordCredentialIdentity](aspasswordcredentialidentity.md)

## See Also

### Adding and removing credential identities

- [saveCredentialIdentities(\_:completion:)](ascredentialidentitystore/savecredentialidentities%28__completion_%29-1bbx6.md): Save the supplied credential identities to the store.
- [replaceCredentialIdentities(\_:completion:)](ascredentialidentitystore/replacecredentialidentities%28__completion_%29.md): Replaces existing credential identities with new credential identities.
- [removeAllCredentialIdentities(\_:)](ascredentialidentitystore/removeallcredentialidentities%28__%29.md): Removes all existing credential identities from the store.
- [removeCredentialIdentities(\_:completion:)](ascredentialidentitystore/removecredentialidentities%28__completion_%29-67lcw.md): Remove the given credential identities from the store.
- [ASPasskeyCredentialIdentity](aspasskeycredentialidentity.md): A description that uniquely identifies a particular passkey credential.
- [ASPasswordCredentialIdentity](aspasswordcredentialidentity.md): A description that uniquely identifies a particular password credential.

# ASCredentialIdentity (Objective-C)

**Framework:** Authentication Services  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+

A protocol that credential identity classes conform to that uniquely identifies credentials.

## Declaration

```objectivec
@protocol ASCredentialIdentity <NSObject>
```

## Topics

### Ordering credential identities

- [rank](ascredentialidentity/rank.md): An indicator that enables you to prioritize credential identities relative to each other.

### Associating a user

- [user](ascredentialidentity/user.md): The username associated with this credential.

### Distinguishing identities

- [recordIdentifier](ascredentialidentity/recordidentifier.md): A string used to correlate this identity to a record in your app’s own database.
- [serviceIdentifier](ascredentialidentity/serviceidentifier.md): An identifier that helps the system know with which apps or websites to associate this credential.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [ASOneTimeCodeCredentialIdentity](asonetimecodecredentialidentity.md)
- [ASPasskeyCredentialIdentity](aspasskeycredentialidentity.md)
- [ASPasswordCredentialIdentity](aspasswordcredentialidentity.md)

## See Also

### Adding and removing credential identities

- [saveCredentialIdentityEntries:completion:](ascredentialidentitystore/savecredentialidentities%28__completion_%29-1bbx6.md): Save the supplied credential identities to the store.
- [replaceCredentialIdentityEntries:completion:](ascredentialidentitystore/replacecredentialidentities%28__completion_%29.md): Replaces existing credential identities with new credential identities.
- [removeAllCredentialIdentitiesWithCompletion:](ascredentialidentitystore/removeallcredentialidentities%28__%29.md): Removes all existing credential identities from the store.
- [removeCredentialIdentityEntries:completion:](ascredentialidentitystore/removecredentialidentities%28__completion_%29-67lcw.md): Remove the given credential identities from the store.
- [ASPasskeyCredentialIdentity](aspasskeycredentialidentity.md): A description that uniquely identifies a particular passkey credential.
- [ASPasswordCredentialIdentity](aspasswordcredentialidentity.md): A description that uniquely identifies a particular password credential.
