> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredential](https://developer.apple.com/documentation/foundation/urlcredential)

# URLCredential (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

`A`n authentication credential consisting of information specific to the type of credential and the type of persistent storage to use, if any.

## Declaration

```swift
class URLCredential
```

## Mentioned In

- [Performing manual server trust authentication](performing-manual-server-trust-authentication.md)

<a id="overview"></a>

## Overview

The URL Loading System supports password-based user credentials, certificate-based user credentials, and certificate-based server credentials.

When you create a credential, you can specify it for a single request, persist it temporarily (until your app quits), or persist it permanently. Permanent persistence can be local persistence in the keychain, or synchronized persistence across the user’s devices, based on their Apple ID.

> **Note**

>  Permanent storage of credentials is only available for password-based credentials. TLS credentials are never stored permanently by [URLCredentialStorage](urlcredentialstorage.md). In general, use for-session persistence for TLS credentials.

## Topics

### Creating a credential

- [init(forTrust:)](urlcredential/init%28fortrust_%29.md): Creates a URL credential instance for server trust authentication with a given accepted trust.
- [init(identity:certificates:persistence:)](urlcredential/init%28identity_certificates_persistence_%29.md): Creates a URL credential instance for resolving a client certificate authentication challenge.
- [init(trust:)](urlcredential/init%28trust_%29.md): Creates a URL credential instance for server trust authentication, initialized with a accepted trust.
- [init(user:password:persistence:)](urlcredential/init%28user_password_persistence_%29.md): Creates a URL credential instance initialized with a given user name and password, using a given persistence setting.
- [URLCredential.Persistence](urlcredential/persistence-swift.enum.md): Constants that specify how long the credential will be kept.

### Getting credential properties

- [user](urlcredential/user.md): The credential’s user name.
- [certificates](urlcredential/certificates.md): The intermediate certificates of the credential, if it is a client certificate credential.
- [hasPassword](urlcredential/haspassword.md): A Boolean value that indicates whether the credential has a password.
- [password](urlcredential/password.md): The credential’s password.
- [identity](urlcredential/identity.md): The identity of this credential if it is a client certificate credential.
- [persistence](urlcredential/persistence-swift.property.md): The credential’s persistence setting.
- [URLCredential.Persistence](urlcredential/persistence-swift.enum.md): Constants that specify how long the credential will be kept.

### Initializers

- [init(coder:)](urlcredential/init%28coder_%29.md)

### Default Implementations

- [NSURLCredential Implementations](urlcredential/nsurlcredential-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Authentication and credentials

- [Handling an authentication challenge](handling-an-authentication-challenge.md): Respond appropriately when a server demands authentication for a URL request.
- [URLAuthenticationChallenge](urlauthenticationchallenge.md): A challenge from a server requiring authentication from the client.
- [URLCredentialStorage](urlcredentialstorage.md): The manager of a shared credentials cache.
- [URLProtectionSpace](urlprotectionspace.md): A server or an area on a server, commonly referred to as a realm, that requires authentication.

# NSURLCredential (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

`A`n authentication credential consisting of information specific to the type of credential and the type of persistent storage to use, if any.

## Declaration

```objectivec
@interface NSURLCredential : NSObject
```

## Mentioned In

- [Performing manual server trust authentication](performing-manual-server-trust-authentication.md)

<a id="overview"></a>

## Overview

The URL Loading System supports password-based user credentials, certificate-based user credentials, and certificate-based server credentials.

When you create a credential, you can specify it for a single request, persist it temporarily (until your app quits), or persist it permanently. Permanent persistence can be local persistence in the keychain, or synchronized persistence across the user’s devices, based on their Apple ID.

> **Note**

>  Permanent storage of credentials is only available for password-based credentials. TLS credentials are never stored permanently by [NSURLCredentialStorage](urlcredentialstorage.md). In general, use for-session persistence for TLS credentials.

## Topics

### Creating a credential

- [credentialWithUser:password:persistence:](nsurlcredential/credentialwithuser_password_persistence_.md): Creates a URL credential instance for internet password authentication with a given user name and password, using a given persistence setting.
- [credentialWithIdentity:certificates:persistence:](nsurlcredential/credentialwithidentity_certificates_persistence_.md): Creates a URL credential instance for resolving a client certificate authentication challenge.
- [initWithIdentity:certificates:persistence:](urlcredential/init%28identity_certificates_persistence_%29.md): Creates a URL credential instance for resolving a client certificate authentication challenge.
- [initWithTrust:](urlcredential/init%28trust_%29.md): Creates a URL credential instance for server trust authentication, initialized with a accepted trust.
- [initWithUser:password:persistence:](urlcredential/init%28user_password_persistence_%29.md): Creates a URL credential instance initialized with a given user name and password, using a given persistence setting.
- [NSURLCredentialPersistence](urlcredential/persistence-swift.enum.md): Constants that specify how long the credential will be kept.

### Getting credential properties

- [user](urlcredential/user.md): The credential’s user name.
- [certificates](urlcredential/certificates.md): The intermediate certificates of the credential, if it is a client certificate credential.
- [hasPassword](urlcredential/haspassword.md): A Boolean value that indicates whether the credential has a password.
- [password](urlcredential/password.md): The credential’s password.
- [identity](urlcredential/identity.md): The identity of this credential if it is a client certificate credential.
- [persistence](urlcredential/persistence-swift.property.md): The credential’s persistence setting.
- [NSURLCredentialPersistence](urlcredential/persistence-swift.enum.md): Constants that specify how long the credential will be kept.

### Type Methods

- [credentialForTrust:](nsurlcredential/credentialfortrust_.md): Creates a URL credential instance for server trust authentication with a given accepted trust.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Authentication and credentials

- [Handling an authentication challenge](handling-an-authentication-challenge.md): Respond appropriately when a server demands authentication for a URL request.
- [NSURLAuthenticationChallenge](urlauthenticationchallenge.md): A challenge from a server requiring authentication from the client.
- [NSURLCredentialStorage](urlcredentialstorage.md): The manager of a shared credentials cache.
- [NSURLProtectionSpace](urlprotectionspace.md): A server or an area on a server, commonly referred to as a realm, that requires authentication.
