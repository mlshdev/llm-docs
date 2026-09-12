> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredential/init(fortrust:)](https://developer.apple.com/documentation/foundation/urlcredential/init(fortrust:))

# init(forTrust:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL credential instance for server trust authentication with a given accepted trust.

## Declaration

```swift
init(forTrust trust: SecTrust)
```

## Parameters

- `trust`: The accepted trust.

<a id="return-value"></a>

## Return Value

A new URL credential object, containing the accepted server trust.

<a id="Discussion"></a>

## Discussion

Before creating a server trust credential, it is the responsibility of the delegate of an [NSURLConnection](../nsurlconnection.md) instance or an [NSURLDownload](../nsurldownload.md) instance to evaluate the trust. Do this by calling [SecTrustEvaluate(\_:\_:)](../../security/sectrustevaluate%28____%29.md), passing it the trust obtained from the `serverTrust` method of the server’s [URLProtectionSpace](../urlprotectionspace.md) instance. If the trust is invalid, the authentication challenge should be cancelled with [cancel(\_:)](../urlauthenticationchallengesender/cancel%28__%29.md).

## See Also

### Creating a credential

- [init(identity:certificates:persistence:)](init%28identity_certificates_persistence_%29.md): Creates a URL credential instance for resolving a client certificate authentication challenge.
- [init(trust:)](init%28trust_%29.md): Creates a URL credential instance for server trust authentication, initialized with a accepted trust.
- [init(user:password:persistence:)](init%28user_password_persistence_%29.md): Creates a URL credential instance initialized with a given user name and password, using a given persistence setting.
- [URLCredential.Persistence](persistence-swift.enum.md): Constants that specify how long the credential will be kept.
