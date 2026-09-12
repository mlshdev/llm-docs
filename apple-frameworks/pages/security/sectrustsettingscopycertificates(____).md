> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustsettingscopycertificates(_:_:)](https://developer.apple.com/documentation/security/sectrustsettingscopycertificates(_:_:))

# SecTrustSettingsCopyCertificates(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Obtains an array of all certificates that have trust settings in a specific trust settings domain.

## Declaration

```swift
func SecTrustSettingsCopyCertificates(_ domain: SecTrustSettingsDomain, _ certArray: UnsafeMutablePointer<CFArray?>?) -> OSStatus
```

## Parameters

- `domain`: The trust settings domain for which you want a list of certificates. For possible values, see [SecTrustSettingsDomain](sectrustsettingsdomain.md).
- `certArray`: On return, an array of `SecCertificateRef` objects representing the certificates that have trust settings in the specified domain. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Returns [errSecNoTrustSettings](errsecnotrustsettings.md) if no trust settings exist for the specified domain.

# SecTrustSettingsCopyCertificates (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Obtains an array of all certificates that have trust settings in a specific trust settings domain.

## Declaration

```objectivec
OSStatus SecTrustSettingsCopyCertificates(SecTrustSettingsDomain domain, CFArrayRef*certArray);
```

## Parameters

- `domain`: The trust settings domain for which you want a list of certificates. For possible values, see [SecTrustSettingsDomain](sectrustsettingsdomain.md).
- `certArray`: On return, an array of `SecCertificateRef` objects representing the certificates that have trust settings in the specified domain. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Returns [errSecNoTrustSettings](errsecnotrustsettings.md) if no trust settings exist for the specified domain.
