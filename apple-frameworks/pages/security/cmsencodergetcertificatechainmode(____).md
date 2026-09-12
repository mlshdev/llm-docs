> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencodergetcertificatechainmode(_:_:)](https://developer.apple.com/documentation/security/cmsencodergetcertificatechainmode(_:_:))

# CMSEncoderGetCertificateChainMode(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains a constant that indicates which certificates are to be included in a signed CMS message.

## Declaration

```swift
func CMSEncoderGetCertificateChainMode(_ cmsEncoder: CMSEncoder, _ chainModeOut: UnsafeMutablePointer<CMSCertificateChainMode>) -> OSStatus
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `chainModeOut`: On return, a constant that indicates which certificate or certificates are to be included in the message. See [CMSCertificateChainMode](cmscertificatechainmode.md).

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## See Also

### Related Documentation

- [CMSEncoderCreate(\_:)](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.

# CMSEncoderGetCertificateChainMode (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains a constant that indicates which certificates are to be included in a signed CMS message.

## Declaration

```objectivec
OSStatus CMSEncoderGetCertificateChainMode(CMSEncoderRef cmsEncoder, CMSCertificateChainMode *chainModeOut);
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `chainModeOut`: On return, a constant that indicates which certificate or certificates are to be included in the message. See [CMSCertificateChainMode](cmscertificatechainmode.md).

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

## See Also

### Related Documentation

- [CMSEncoderCreate](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
