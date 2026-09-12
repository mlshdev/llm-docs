> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetcertificateauthorities(_:_:_:)](https://developer.apple.com/documentation/security/sslsetcertificateauthorities(_:_:_:))

# SSLSetCertificateAuthorities(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.15)

Adds one or more certificates to a server’s list of certification authorities (CAs) acceptable for client authentication.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLSetCertificateAuthorities(_ context: SSLContext, _ certificateOrArray: CFTypeRef, _ replaceExisting: Bool) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `certificateOrArray`: A value of type `SecCertificateRef`, or a value of type `CFArray` containing an array of `SecCertificateRef` values, representing one or more certificates to be added to the server’s list of acceptable certification authorities (CAs).
- `replaceExisting`: A Boolean value specifying whether to replace or append the current set of certification authorities. If this value is `true`, the specified certificates replace the existing list of acceptable CAs, if any. If `false`, the specified certificates are appended to the existing list of.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md). Returns [errSecParam](errsecparam.md) if this function is called for a session that is configured as a client, or when a session is active.

<a id="Discussion"></a>

## Discussion

Each successive call to this function with the `replaceExisting` parameter set to [false](https://developer.apple.com/documentation/swift/false) results in accumulation of additional certification authorities. To see the current set of certification authorities, call the [SSLCopyCertificateAuthorities(\_:\_:)](sslcopycertificateauthorities%28____%29.md) function.

## See Also

### Related Documentation

- [SSLCopyDistinguishedNames(\_:\_:)](sslcopydistinguishednames%28____%29.md): Deprecated. Retrieves the distinguished names of acceptable certification authorities.

# SSLSetCertificateAuthorities (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.15)

Adds one or more certificates to a server’s list of certification authorities (CAs) acceptable for client authentication.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLSetCertificateAuthorities(SSLContextRef context, CFTypeRef certificateOrArray, Boolean replaceExisting);
```

## Parameters

- `context`: An SSL session context reference.
- `certificateOrArray`: A value of type `SecCertificateRef`, or a value of type `CFArray` containing an array of `SecCertificateRef` values, representing one or more certificates to be added to the server’s list of acceptable certification authorities (CAs).
- `replaceExisting`: A Boolean value specifying whether to replace or append the current set of certification authorities. If this value is `true`, the specified certificates replace the existing list of acceptable CAs, if any. If `false`, the specified certificates are appended to the existing list of.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md). Returns [errSecParam](errsecparam.md) if this function is called for a session that is configured as a client, or when a session is active.

<a id="Discussion"></a>

## Discussion

Each successive call to this function with the `replaceExisting` parameter set to [false](https://developer.apple.com/documentation/swift/false) results in accumulation of additional certification authorities. To see the current set of certification authorities, call the [SSLCopyCertificateAuthorities](sslcopycertificateauthorities%28____%29.md) function.

## See Also

### Related Documentation

- [SSLCopyDistinguishedNames](sslcopydistinguishednames%28____%29.md): Deprecated. Retrieves the distinguished names of acceptable certification authorities.
