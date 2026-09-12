> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslcopycertificateauthorities(_:_:)](https://developer.apple.com/documentation/security/sslcopycertificateauthorities(_:_:))

# SSLCopyCertificateAuthorities(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.15)

Retrieves the current list of certification authorities.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLCopyCertificateAuthorities(_ context: SSLContext, _ certificates: UnsafeMutablePointer<CFArray?>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `certificates`: On return, a pointer to a value of type `CFArrayRef`. This array contains values of type `SecCertificateRef` representing the current set of certification authorities (specified with the [SSLSetCertificateAuthorities(\_:\_:\_:)](sslsetcertificateauthorities%28______%29.md) function). Returns a `NULL` array if [SSLSetCertificateAuthorities(\_:\_:\_:)](sslsetcertificateauthorities%28______%29.md) has not been called. You must call the `CFRelease` function to release this array when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

## See Also

### Related Documentation

- [SSLCopyDistinguishedNames(\_:\_:)](sslcopydistinguishednames%28____%29.md): Deprecated. Retrieves the distinguished names of acceptable certification authorities.

# SSLCopyCertificateAuthorities (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.15)

Retrieves the current list of certification authorities.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLCopyCertificateAuthorities(SSLContextRef context, CFArrayRef*certificates);
```

## Parameters

- `context`: An SSL session context reference.
- `certificates`: On return, a pointer to a value of type `CFArrayRef`. This array contains values of type `SecCertificateRef` representing the current set of certification authorities (specified with the [SSLSetCertificateAuthorities](sslsetcertificateauthorities%28______%29.md) function). Returns a `NULL` array if [SSLSetCertificateAuthorities](sslsetcertificateauthorities%28______%29.md) has not been called. You must call the `CFRelease` function to release this array when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

## See Also

### Related Documentation

- [SSLCopyDistinguishedNames](sslcopydistinguishednames%28____%29.md): Deprecated. Retrieves the distinguished names of acceptable certification authorities.
