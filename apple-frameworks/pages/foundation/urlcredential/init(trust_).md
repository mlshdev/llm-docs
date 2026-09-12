> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlcredential/init(trust:)](https://developer.apple.com/documentation/foundation/urlcredential/init(trust:))

# init(trust:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL credential instance for server trust authentication, initialized with a accepted trust.

## Declaration

```swift
init(trust: SecTrust)
```

## Parameters

- `trust`: The accepted trust.

<a id="return-value"></a>

## Return Value

A new URL credential object, containing the provided server trust.

<a id="Discussion"></a>

## Discussion

Before your implementation of [urlSession(\_:task:didReceive:completionHandler:)](../urlsessiontaskdelegate/urlsession%28__task_didreceive_completionhandler_%29.md) uses this initializer to create a server trust credential, you are responsible for evaluating the received [SecTrust](../../security/sectrust.md) instance. You get this [serverTrust](../urlprotectionspace/servertrust.md) from the [protectionSpace](../urlauthenticationchallenge/protectionspace.md) of the [URLAuthenticationChallenge](../urlauthenticationchallenge.md) parameter that is passed to your delegate method. Pass the trust instance to [SecTrustEvaluate(\_:\_:)](../../security/sectrustevaluate%28____%29.md) to evaluate it. If this call indicates the trust is invalid, you should cancel the challenge by passing the [URLSession.AuthChallengeDisposition.cancelAuthenticationChallenge](../urlsession/authchallengedisposition/cancelauthenticationchallenge.md) disposition to the completion handler.

## See Also

### Creating a credential

- [init(forTrust:)](init%28fortrust_%29.md): Creates a URL credential instance for server trust authentication with a given accepted trust.
- [init(identity:certificates:persistence:)](init%28identity_certificates_persistence_%29.md): Creates a URL credential instance for resolving a client certificate authentication challenge.
- [init(user:password:persistence:)](init%28user_password_persistence_%29.md): Creates a URL credential instance initialized with a given user name and password, using a given persistence setting.
- [URLCredential.Persistence](persistence-swift.enum.md): Constants that specify how long the credential will be kept.

# initWithTrust: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL credential instance for server trust authentication, initialized with a accepted trust.

## Declaration

```objectivec
- (instancetype) initWithTrust:(SecTrustRef) trust;
```

## Parameters

- `trust`: The accepted trust.

<a id="return-value"></a>

## Return Value

A new URL credential object, containing the provided server trust.

<a id="Discussion"></a>

## Discussion

Before your implementation of [URLSession:task:didReceiveChallenge:completionHandler:](../urlsessiontaskdelegate/urlsession%28__task_didreceive_completionhandler_%29.md) uses this initializer to create a server trust credential, you are responsible for evaluating the received [SecTrustRef](../../security/sectrust.md) instance. You get this [serverTrust](../urlprotectionspace/servertrust.md) from the [protectionSpace](../urlauthenticationchallenge/protectionspace.md) of the [NSURLAuthenticationChallenge](../urlauthenticationchallenge.md) parameter that is passed to your delegate method. Pass the trust instance to [SecTrustEvaluate](../../security/sectrustevaluate%28____%29.md) to evaluate it. If this call indicates the trust is invalid, you should cancel the challenge by passing the [NSURLSessionAuthChallengeCancelAuthenticationChallenge](../urlsession/authchallengedisposition/cancelauthenticationchallenge.md) disposition to the completion handler.

## See Also

### Creating a credential

- [credentialWithUser:password:persistence:](../nsurlcredential/credentialwithuser_password_persistence_.md): Creates a URL credential instance for internet password authentication with a given user name and password, using a given persistence setting.
- [credentialWithIdentity:certificates:persistence:](../nsurlcredential/credentialwithidentity_certificates_persistence_.md): Creates a URL credential instance for resolving a client certificate authentication challenge.
- [initWithIdentity:certificates:persistence:](init%28identity_certificates_persistence_%29.md): Creates a URL credential instance for resolving a client certificate authentication challenge.
- [initWithUser:password:persistence:](init%28user_password_persistence_%29.md): Creates a URL credential instance initialized with a given user name and password, using a given persistence setting.
- [NSURLCredentialPersistence](persistence-swift.enum.md): Constants that specify how long the credential will be kept.
