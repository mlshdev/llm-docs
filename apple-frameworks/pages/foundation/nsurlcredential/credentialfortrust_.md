> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlcredential/credentialfortrust:](https://developer.apple.com/documentation/foundation/nsurlcredential/credentialfortrust:)

# credentialForTrust:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL credential instance for server trust authentication with a given accepted trust.

## Declaration

```objectivec
+ (NSURLCredential *) credentialForTrust:(SecTrustRef) trust;
```

## Parameters

- `trust`: The accepted trust.

<a id="return-value"></a>

## Return Value

A new URL credential object, containing the accepted server trust.

<a id="discussion"></a>

## Discussion

Before creating a server trust credential, it is the responsibility of the delegate of an [NSURLConnection](../nsurlconnection.md) instance or an [NSURLDownload](../nsurldownload.md) instance to evaluate the trust. Do this by calling `SecTrustEvaluate`, passing it the trust obtained from the `serverTrust` method of the server’s [NSURLProtectionSpace](../urlprotectionspace.md) instance. If the trust is invalid, the authentication challenge should be cancelled with the [NSURLAuthenticationChallengeSender](../urlauthenticationchallengesender.md) protocol’s `cancelAuthenticationChallenge:` method.
