> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsdecodercopyencapsulatedcontenttype(_:_:)](https://developer.apple.com/documentation/security/cmsdecodercopyencapsulatedcontenttype(_:_:))

# CMSDecoderCopyEncapsulatedContentType(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the object identifier for the encapsulated data of a signed message.

## Declaration

```swift
func CMSDecoderCopyEncapsulatedContentType(_ cmsDecoder: CMSDecoder, _ eContentTypeOut: UnsafeMutablePointer<CFData?>) -> OSStatus
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `eContentTypeOut`: On return, the object identifier for the encapsulated data in a signed message.  Returns `NULL` if the message was not signed.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

In a signed message, the signed data consists of any type of content (referred to as the *encapsulated content*, because it is encapsulated in the signed data) plus the signature values. The content type of the encapsulated data is indicated by an object identifier. The default value for the OID is `id-data`, which indicates MIME-encoded content.

You cannot call this function until after you have called the `CMSDecoderFinalizeMessage` function.

# CMSDecoderCopyEncapsulatedContentType (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the object identifier for the encapsulated data of a signed message.

## Declaration

```objectivec
OSStatus CMSDecoderCopyEncapsulatedContentType(CMSDecoderRef cmsDecoder, CFDataRef*eContentTypeOut);
```

## Parameters

- `cmsDecoder`: The CMSDecoder reference returned by the `CMSDecoderCreate` function.
- `eContentTypeOut`: On return, the object identifier for the encapsulated data in a signed message.  Returns `NULL` if the message was not signed.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

In a signed message, the signed data consists of any type of content (referred to as the *encapsulated content*, because it is encapsulated in the signed data) plus the signature values. The content type of the encapsulated data is indicated by an object identifier. The default value for the OID is `id-data`, which indicates MIME-encoded content.

You cannot call this function until after you have called the `CMSDecoderFinalizeMessage` function.
