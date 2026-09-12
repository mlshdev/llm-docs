> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredential/init(user:password:persistence:)](https://developer.apple.com/documentation/foundation/urlcredential/init(user:password:persistence:))

# init(user:password:persistence:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL credential instance initialized with a given user name and password, using a given persistence setting.

## Declaration

```swift
init(user: String, password: String, persistence: URLCredential.Persistence)
```

## Parameters

- `user`: The user for the credential.
- `password`: The password for `user`.
- `persistence`: A [URLCredential.Persistence](persistence-swift.enum.md) value indicating whether the credential should be stored permanently, for the duration of the current session, or not at all.

<a id="return-value"></a>

## Return Value

An instance of [URLCredential](../urlcredential.md), initialized with user name `user`, password `password`, and using persistence setting `persistence`.

<a id="Discussion"></a>

## Discussion

If `persistence` is [URLCredential.Persistence.permanent](persistence-swift.enum/permanent.md), the credential is stored in the keychain. If `persistence` is [URLCredential.Persistence.synchronizable](persistence-swift.enum/synchronizable.md), it is also stored to the user’s other devices.

## See Also

### Creating a credential

- [init(forTrust:)](init%28fortrust_%29.md): Creates a URL credential instance for server trust authentication with a given accepted trust.
- [init(identity:certificates:persistence:)](init%28identity_certificates_persistence_%29.md): Creates a URL credential instance for resolving a client certificate authentication challenge.
- [init(trust:)](init%28trust_%29.md): Creates a URL credential instance for server trust authentication, initialized with a accepted trust.
- [URLCredential.Persistence](persistence-swift.enum.md): Constants that specify how long the credential will be kept.

# initWithUser:password:persistence: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL credential instance initialized with a given user name and password, using a given persistence setting.

## Declaration

```objectivec
- (instancetype) initWithUser:(NSString *) user password:(NSString *) password persistence:(NSURLCredentialPersistence) persistence;
```

## Parameters

- `user`: The user for the credential.
- `password`: The password for `user`.
- `persistence`: A [NSURLCredentialPersistence](persistence-swift.enum.md) value indicating whether the credential should be stored permanently, for the duration of the current session, or not at all.

<a id="return-value"></a>

## Return Value

An instance of [NSURLCredential](../urlcredential.md), initialized with user name `user`, password `password`, and using persistence setting `persistence`.

<a id="Discussion"></a>

## Discussion

If `persistence` is [NSURLCredentialPersistencePermanent](persistence-swift.enum/permanent.md), the credential is stored in the keychain. If `persistence` is [NSURLCredentialPersistenceSynchronizable](persistence-swift.enum/synchronizable.md), it is also stored to the user’s other devices.

## See Also

### Related Documentation

- [credentialWithUser:password:persistence:](../nsurlcredential/credentialwithuser_password_persistence_.md): Creates a URL credential instance for internet password authentication with a given user name and password, using a given persistence setting.

### Creating a credential

- [credentialWithUser:password:persistence:](../nsurlcredential/credentialwithuser_password_persistence_.md): Creates a URL credential instance for internet password authentication with a given user name and password, using a given persistence setting.
- [credentialWithIdentity:certificates:persistence:](../nsurlcredential/credentialwithidentity_certificates_persistence_.md): Creates a URL credential instance for resolving a client certificate authentication challenge.
- [initWithIdentity:certificates:persistence:](init%28identity_certificates_persistence_%29.md): Creates a URL credential instance for resolving a client certificate authentication challenge.
- [initWithTrust:](init%28trust_%29.md): Creates a URL credential instance for server trust authentication, initialized with a accepted trust.
- [NSURLCredentialPersistence](persistence-swift.enum.md): Constants that specify how long the credential will be kept.
