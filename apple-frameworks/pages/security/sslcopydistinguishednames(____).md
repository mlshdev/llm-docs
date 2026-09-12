> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslcopydistinguishednames(_:_:)](https://developer.apple.com/documentation/security/sslcopydistinguishednames(_:_:))

# SSLCopyDistinguishedNames(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.15)

Retrieves the distinguished names of acceptable certification authorities.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLCopyDistinguishedNames(_ context: SSLContext, _ names: UnsafeMutablePointer<CFArray?>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `names`: On return, an array of `CFDataRef` objects, each representing one DER-encoded relative distinguished name of an acceptable certification authority. You must call the `CFRelease` function to release this array when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

The list of distinguished names is provided by the server if the context reference represents a client; if the context reference represents a server, the list of distinguished names is specified with the [SSLSetCertificateAuthorities(\_:\_:\_:)](sslsetcertificateauthorities%28______%29.md) function.

The array retrieved by this function is suitable for use in finding a client identity (that is, a certificate and associated private key) that matches a server’s requirements.

## See Also

### Related Documentation

- [SSLSetCertificateAuthorities(\_:\_:\_:)](sslsetcertificateauthorities%28______%29.md): Deprecated. Adds one or more certificates to a server’s list of certification authorities (CAs) acceptable for client authentication.
- [SSLCopyCertificateAuthorities(\_:\_:)](sslcopycertificateauthorities%28____%29.md): Deprecated. Retrieves the current list of certification authorities.

# SSLCopyDistinguishedNames (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.5+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Retrieves the distinguished names of acceptable certification authorities.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLCopyDistinguishedNames(SSLContextRef context, CFArrayRef*names);
```

## Parameters

- `context`: An SSL session context reference.
- `names`: On return, an array of `CFDataRef` objects, each representing one DER-encoded relative distinguished name of an acceptable certification authority. You must call the `CFRelease` function to release this array when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

The list of distinguished names is provided by the server if the context reference represents a client; if the context reference represents a server, the list of distinguished names is specified with the [SSLSetCertificateAuthorities](sslsetcertificateauthorities%28______%29.md) function.

The array retrieved by this function is suitable for use in finding a client identity (that is, a certificate and associated private key) that matches a server’s requirements.

## See Also

### Related Documentation

- [SSLSetCertificateAuthorities](sslsetcertificateauthorities%28______%29.md): Deprecated. Adds one or more certificates to a server’s list of certification authorities (CAs) acceptable for client authentication.
- [SSLCopyCertificateAuthorities](sslcopycertificateauthorities%28____%29.md): Deprecated. Retrieves the current list of certification authorities.
