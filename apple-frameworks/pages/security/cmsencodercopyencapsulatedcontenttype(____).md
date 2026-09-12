> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmsencodercopyencapsulatedcontenttype(_:_:)](https://developer.apple.com/documentation/security/cmsencodercopyencapsulatedcontenttype(_:_:))

# CMSEncoderCopyEncapsulatedContentType(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the object identifier for the encapsulated data of a signed message.

## Declaration

```swift
func CMSEncoderCopyEncapsulatedContentType(_ cmsEncoder: CMSEncoder, _ eContentTypeOut: UnsafeMutablePointer<CFData?>) -> OSStatus
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `eContentTypeOut`: On return, points to the object identifier for the encapsulated data in the signed message.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

In a signed message, the signed data consists of any type of data (the *encapsulated content*) plus the signature values. This function returns the object identifier (OID) of the encapsulated content as it was specified with the `CMSEncoderSetEncapsulatedContentType` function.

If the `CMSEncoderSetEncapsulatedContentType` function has not been called for this message, this function returns a  `NULL` pointer.

# CMSEncoderCopyEncapsulatedContentType (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.5+

Obtains the object identifier for the encapsulated data of a signed message.

## Declaration

```objectivec
OSStatus CMSEncoderCopyEncapsulatedContentType(CMSEncoderRef cmsEncoder, CFDataRef*eContentTypeOut);
```

## Parameters

- `cmsEncoder`: The CMSEncoder reference returned by the `CMSEncoderCreate` function.
- `eContentTypeOut`: On return, points to the object identifier for the encapsulated data in the signed message.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

In a signed message, the signed data consists of any type of data (the *encapsulated content*) plus the signature values. This function returns the object identifier (OID) of the encapsulated content as it was specified with the `CMSEncoderSetEncapsulatedContentType` function.

If the `CMSEncoderSetEncapsulatedContentType` function has not been called for this message, this function returns a  `NULL` pointer.
