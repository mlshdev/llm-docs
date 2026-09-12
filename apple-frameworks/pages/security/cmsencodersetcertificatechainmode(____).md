> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencodersetcertificatechainmode(_:_:)](https://developer.apple.com/documentation/security/cmsencodersetcertificatechainmode(_:_:))

# CMSEncoderSetCertificateChainMode(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Specifies which certificates to include in a signed CMS message.

## Declaration

```swift
func CMSEncoderSetCertificateChainMode(_ cmsEncoder: CMSEncoder, _ chainMode: CMSCertificateChainMode) -> OSStatus
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `chainMode`: A constant that indicates which certificate or certificates to include in the message. See [CMSCertificateChainMode](cmscertificatechainmode.md).

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function is used only for signed messages and is optional. If you don’t call this function, the default, `kCMSCertificateChain`, is used. In this case the message includes the signer certificate plus all certificates needed to verify the signer certificate, up to but not including the root  certificate.

If you do call this function, you must call it before the first call to the `CMSEncoderUpdateContent` function.

## See Also

### Related Documentation

- [CMSEncoderUpdateContent(\_:\_:\_:)](cmsencoderupdatecontent%28______%29.md): Feeds content bytes into the encoder.
- [CMSEncoderGetCertificateChainMode(\_:\_:)](cmsencodergetcertificatechainmode%28____%29.md): Obtains a constant that indicates which certificates are to be included in a signed CMS message.
- [CMSEncoderCreate(\_:)](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.

# CMSEncoderSetCertificateChainMode (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Specifies which certificates to include in a signed CMS message.

## Declaration

```objectivec
OSStatus CMSEncoderSetCertificateChainMode(CMSEncoderRef cmsEncoder, CMSCertificateChainMode chainMode);
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `chainMode`: A constant that indicates which certificate or certificates to include in the message. See [CMSCertificateChainMode](cmscertificatechainmode.md).

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function is used only for signed messages and is optional. If you don’t call this function, the default, `kCMSCertificateChain`, is used. In this case the message includes the signer certificate plus all certificates needed to verify the signer certificate, up to but not including the root  certificate.

If you do call this function, you must call it before the first call to the `CMSEncoderUpdateContent` function.

## See Also

### Related Documentation

- [CMSEncoderUpdateContent](cmsencoderupdatecontent%28______%29.md): Feeds content bytes into the encoder.
- [CMSEncoderGetCertificateChainMode](cmsencodergetcertificatechainmode%28____%29.md): Obtains a constant that indicates which certificates are to be included in a signed CMS message.
- [CMSEncoderCreate](cmsencodercreate%28__%29.md): Creates a CMSEncoder reference.
