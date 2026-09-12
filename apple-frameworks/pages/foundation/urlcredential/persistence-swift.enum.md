> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredential/persistence-swift.enum](https://developer.apple.com/documentation/foundation/urlcredential/persistence-swift.enum)

# URLCredential.Persistence (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that specify how long the credential will be kept.

## Declaration

```swift
enum Persistence
```

<a id="overview"></a>

## Overview

In iOS, credentials are stored in the app’s keychain, and can be accessed only by that app (and other apps in the same keychain access group, where applicable).

In macOS, credentials are stored in the user’s keychain. The credential’s initial access control list (ACL) allows access only by that app. However, other apps can see that a password exists for a given host, port, and realm combination, and can request that the user grant permission to use that credential.

## Topics

### Persistence strategies

- [URLCredential.Persistence.none](persistence-swift.enum/none.md): The credential should not be stored.
- [URLCredential.Persistence.forSession](persistence-swift.enum/forsession.md): The credential should be stored only for this session.
- [URLCredential.Persistence.permanent](persistence-swift.enum/permanent.md): The credential should be stored in the keychain.
- [URLCredential.Persistence.synchronizable](persistence-swift.enum/synchronizable.md): The credential should be stored permanently in the keychain, and in addition should be distributed to other devices based on the owning Apple ID.

### Initializers

- [init(rawValue:)](persistence-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a credential

- [init(forTrust:)](init%28fortrust_%29.md): Creates a URL credential instance for server trust authentication with a given accepted trust.
- [init(identity:certificates:persistence:)](init%28identity_certificates_persistence_%29.md): Creates a URL credential instance for resolving a client certificate authentication challenge.
- [init(trust:)](init%28trust_%29.md): Creates a URL credential instance for server trust authentication, initialized with a accepted trust.
- [init(user:password:persistence:)](init%28user_password_persistence_%29.md): Creates a URL credential instance initialized with a given user name and password, using a given persistence setting.

# NSURLCredentialPersistence (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that specify how long the credential will be kept.

## Declaration

```objectivec
enum NSURLCredentialPersistence : NSUInteger;
```

<a id="overview"></a>

## Overview

In iOS, credentials are stored in the app’s keychain, and can be accessed only by that app (and other apps in the same keychain access group, where applicable).

In macOS, credentials are stored in the user’s keychain. The credential’s initial access control list (ACL) allows access only by that app. However, other apps can see that a password exists for a given host, port, and realm combination, and can request that the user grant permission to use that credential.

## Topics

### Persistence strategies

- [NSURLCredentialPersistenceNone](persistence-swift.enum/none.md): The credential should not be stored.
- [NSURLCredentialPersistenceForSession](persistence-swift.enum/forsession.md): The credential should be stored only for this session.
- [NSURLCredentialPersistencePermanent](persistence-swift.enum/permanent.md): The credential should be stored in the keychain.
- [NSURLCredentialPersistenceSynchronizable](persistence-swift.enum/synchronizable.md): The credential should be stored permanently in the keychain, and in addition should be distributed to other devices based on the owning Apple ID.

## See Also

### Creating a credential

- [credentialWithUser:password:persistence:](../nsurlcredential/credentialwithuser_password_persistence_.md): Creates a URL credential instance for internet password authentication with a given user name and password, using a given persistence setting.
- [credentialWithIdentity:certificates:persistence:](../nsurlcredential/credentialwithidentity_certificates_persistence_.md): Creates a URL credential instance for resolving a client certificate authentication challenge.
- [initWithIdentity:certificates:persistence:](init%28identity_certificates_persistence_%29.md): Creates a URL credential instance for resolving a client certificate authentication challenge.
- [initWithTrust:](init%28trust_%29.md): Creates a URL credential instance for server trust authentication, initialized with a accepted trust.
- [initWithUser:password:persistence:](init%28user_password_persistence_%29.md): Creates a URL credential instance initialized with a given user name and password, using a given persistence setting.
