> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlauthenticationmethodservertrust](https://developer.apple.com/documentation/foundation/nsurlauthenticationmethodservertrust)

# NSURLAuthenticationMethodServerTrust (Swift)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Perform server trust authentication (certificate validation) for this protection space.

## Declaration

```swift
let NSURLAuthenticationMethodServerTrust: String
```

## Mentioned In

- [Performing manual server trust authentication](performing-manual-server-trust-authentication.md)

<a id="Discussion"></a>

## Discussion

This authentication method can apply to any protocol, and is most commonly used for overriding SSL and TLS chain validation.

To learn more, read [Overriding TLS Chain Validation Correctly](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/NetworkingTopics/Articles/OverridingSSLChainValidationCorrectly.html#//apple_ref/doc/uid/TP40012544).

## See Also

### Session-wide authentication challenges

- [NSURLAuthenticationMethodClientCertificate](nsurlauthenticationmethodclientcertificate.md): Use client certificate authentication for this protection space.
- [NSURLAuthenticationMethodNegotiate](nsurlauthenticationmethodnegotiate.md): Negotiate whether to use Kerberos or NTLM authentication for this protection space.
- [NSURLAuthenticationMethodNTLM](nsurlauthenticationmethodntlm.md): Use NTLM authentication for this protection space.

# NSURLAuthenticationMethodServerTrust (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Perform server trust authentication (certificate validation) for this protection space.

## Declaration

```objectivec
extern NSString * const NSURLAuthenticationMethodServerTrust;
```

## Mentioned In

- [Performing manual server trust authentication](performing-manual-server-trust-authentication.md)

<a id="Discussion"></a>

## Discussion

This authentication method can apply to any protocol, and is most commonly used for overriding SSL and TLS chain validation.

To learn more, read [Overriding TLS Chain Validation Correctly](https://developer.apple.com/library/archive/documentation/NetworkingInternet/Conceptual/NetworkingTopics/Articles/OverridingSSLChainValidationCorrectly.html#//apple_ref/doc/uid/TP40012544).

## See Also

### Session-wide authentication challenges

- [NSURLAuthenticationMethodClientCertificate](nsurlauthenticationmethodclientcertificate.md): Use client certificate authentication for this protection space.
- [NSURLAuthenticationMethodNegotiate](nsurlauthenticationmethodnegotiate.md): Negotiate whether to use Kerberos or NTLM authentication for this protection space.
- [NSURLAuthenticationMethodNTLM](nsurlauthenticationmethodntlm.md): Use NTLM authentication for this protection space.
