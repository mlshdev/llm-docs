> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificatesetpreferred(_:_:_:)](https://developer.apple.com/documentation/security/seccertificatesetpreferred(_:_:_:))

# SecCertificateSetPreferred(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+

Sets the certificate that should be preferred for the specified name and key use.

## Declaration

```swift
func SecCertificateSetPreferred(_ certificate: SecCertificate?, _ name: CFString, _ keyUsage: CFArray?) -> OSStatus
```

## Parameters

- `certificate`: The key to use as the preferred certificate for the specified name and key usage.
- `name`: A string containing an email address (RFC 822) or other name for which a preferred certificate is requested.
- `keyUsage`: An array containing a list of usage attributes ([kSecAttrCanEncrypt](ksecattrcanencrypt.md), for example), or `NULL` if you want this certificate to be preferred for any usage. See Attribute Item Keys for a complete list of possible usage attributes.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

# SecCertificateSetPreferred (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+

Sets the certificate that should be preferred for the specified name and key use.

## Declaration

```objectivec
OSStatus SecCertificateSetPreferred(SecCertificateRef certificate, CFStringRef name, CFArrayRef keyUsage);
```

## Parameters

- `certificate`: The key to use as the preferred certificate for the specified name and key usage.
- `name`: A string containing an email address (RFC 822) or other name for which a preferred certificate is requested.
- `keyUsage`: An array containing a list of usage attributes ([kSecAttrCanEncrypt](ksecattrcanencrypt.md), for example), or `NULL` if you want this certificate to be preferred for any usage. See Attribute Item Keys for a complete list of possible usage attributes.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).
