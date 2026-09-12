> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencoderupdatecontent(_:_:_:)](https://developer.apple.com/documentation/security/cmsencoderupdatecontent(_:_:_:))

# CMSEncoderUpdateContent(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Feeds content bytes into the encoder.

## Declaration

```swift
func CMSEncoderUpdateContent(_ cmsEncoder: CMSEncoder, _ content: UnsafeRawPointer, _ contentLen: Int) -> OSStatus
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `content`: The content that you want to add to the message. The content must conform to the type set with the [CMSEncoderSetEncapsulatedContentType](cmsencodersetencapsulatedcontenttype.md) function (or type `id-data` if that function has not been called).
- `contentLen`: The length of the content being added, in bytes.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

You use this function to add the content that is to be signed or encrypted. If the message is only a container for certificates added with the [CMSEncoderAddSupportingCerts(\_:\_:)](cmsencoderaddsupportingcerts%28____%29.md) function and has no other content, do not call this function. This function can be called multiple times.

After you are finished adding content, call the `CMSEncoderCopyEncodedContent` function to complete the message creation process.

None of the setter functions ([CMSEncoderSetHasDetachedContent(\_:\_:)](cmsencodersethasdetachedcontent%28____%29.md), [CMSEncoderSetEncapsulatedContentType](cmsencodersetencapsulatedcontenttype.md), or [CMSEncoderSetCertificateChainMode(\_:\_:)](cmsencodersetcertificatechainmode%28____%29.md)) can be called after this function has been called.

# CMSEncoderUpdateContent (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Feeds content bytes into the encoder.

## Declaration

```objectivec
OSStatus CMSEncoderUpdateContent(CMSEncoderRef cmsEncoder, const void *content, size_t contentLen);
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `content`: The content that you want to add to the message. The content must conform to the type set with the [CMSEncoderSetEncapsulatedContentType](cmsencodersetencapsulatedcontenttype.md) function (or type `id-data` if that function has not been called).
- `contentLen`: The length of the content being added, in bytes.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

You use this function to add the content that is to be signed or encrypted. If the message is only a container for certificates added with the [CMSEncoderAddSupportingCerts](cmsencoderaddsupportingcerts%28____%29.md) function and has no other content, do not call this function. This function can be called multiple times.

After you are finished adding content, call the `CMSEncoderCopyEncodedContent` function to complete the message creation process.

None of the setter functions ([CMSEncoderSetHasDetachedContent](cmsencodersethasdetachedcontent%28____%29.md), [CMSEncoderSetEncapsulatedContentType](cmsencodersetencapsulatedcontenttype.md), or [CMSEncoderSetCertificateChainMode](cmsencodersetcertificatechainmode%28____%29.md)) can be called after this function has been called.
