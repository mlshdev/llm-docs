> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccertificatecopypreferred(_:_:)](https://developer.apple.com/documentation/security/seccertificatecopypreferred(_:_:))

# SecCertificateCopyPreferred(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+

Returns the preferred certificate for the specified name and key usage.

## Declaration

```swift
func SecCertificateCopyPreferred(_ name: CFString, _ keyUsage: CFArray?) -> SecCertificate?
```

## Parameters

- `name`: A string containing an email address (RFC 822) or other name for which a preferred certificate is requested.
- `keyUsage`: An array containing a list of usage attributes ([kSecAttrCanEncrypt](ksecattrcanencrypt.md), for example), or `NULL` if you do not want to request a certificate based on a particular usage. See Attribute Item Keys for a complete list of possible usage attributes.

<a id="return-value"></a>

## Return Value

The preferred certificate for the specified name and key usage, or `NULL` if a matching certificate does not exist. In Objective-C, free the certificate with a call to the [CFRelease](../corefoundation/cfrelease.md) function when you are done with it.

<a id="Discussion"></a>

## Discussion

This function is typically used to obtain the preferred encryption certificate for an email recipient. If a preferred certificate has not been set for the supplied name, this function returns `NULL`. Your code should then perform a search for possible certificates by calling [SecItemCopyMatching(\_:\_:)](secitemcopymatching%28____%29.md).

# SecCertificateCopyPreferred (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+

Returns the preferred certificate for the specified name and key usage.

## Declaration

```objectivec
SecCertificateRefSecCertificateCopyPreferred(CFStringRef name, CFArrayRef keyUsage);
```

## Parameters

- `name`: A string containing an email address (RFC 822) or other name for which a preferred certificate is requested.
- `keyUsage`: An array containing a list of usage attributes ([kSecAttrCanEncrypt](ksecattrcanencrypt.md), for example), or `NULL` if you do not want to request a certificate based on a particular usage. See Attribute Item Keys for a complete list of possible usage attributes.

<a id="return-value"></a>

## Return Value

The preferred certificate for the specified name and key usage, or `NULL` if a matching certificate does not exist. In Objective-C, free the certificate with a call to the [CFRelease](../corefoundation/cfrelease.md) function when you are done with it.

<a id="Discussion"></a>

## Discussion

This function is typically used to obtain the preferred encryption certificate for an email recipient. If a preferred certificate has not been set for the supplied name, this function returns `NULL`. Your code should then perform a search for possible certificates by calling [SecItemCopyMatching](secitemcopymatching%28____%29.md).
