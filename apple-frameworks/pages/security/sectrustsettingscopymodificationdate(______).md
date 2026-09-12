> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustsettingscopymodificationdate(_:_:_:)](https://developer.apple.com/documentation/security/sectrustsettingscopymodificationdate(_:_:_:))

# SecTrustSettingsCopyModificationDate(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Obtains the date and time at which a certificate’s trust settings were last modified.

## Declaration

```swift
func SecTrustSettingsCopyModificationDate(_ certRef: SecCertificate, _ domain: SecTrustSettingsDomain, _ modificationDate: UnsafeMutablePointer<CFDate?>) -> OSStatus
```

## Parameters

- `certRef`: The certificate for which you wish to obtain the modification time. Pass the value `kSecTrustSettingsDefaultRootCertSetting` to obtain the modification time for the default root certificate trust settings for the domain.
- `domain`: The trust settings domain of the trust settings for which you wish to obtain the modification time (it’s possible for a single certificate to have trust settings in more than one domain). For possible values, see [SecTrustSettingsDomain](sectrustsettingsdomain.md).
- `modificationDate`: On return, the date and time at which the certificate’s trust settings were last modified. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Returns [errSecItemNotFound](errsecitemnotfound.md) if no trust settings exist for the specified certificate and domain.

# SecTrustSettingsCopyModificationDate (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Obtains the date and time at which a certificate’s trust settings were last modified.

## Declaration

```objectivec
OSStatus SecTrustSettingsCopyModificationDate(SecCertificateRef certRef, SecTrustSettingsDomain domain, CFDateRef*modificationDate);
```

## Parameters

- `certRef`: The certificate for which you wish to obtain the modification time. Pass the value `kSecTrustSettingsDefaultRootCertSetting` to obtain the modification time for the default root certificate trust settings for the domain.
- `domain`: The trust settings domain of the trust settings for which you wish to obtain the modification time (it’s possible for a single certificate to have trust settings in more than one domain). For possible values, see [SecTrustSettingsDomain](sectrustsettingsdomain.md).
- `modificationDate`: On return, the date and time at which the certificate’s trust settings were last modified. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Returns [errSecItemNotFound](errsecitemnotfound.md) if no trust settings exist for the specified certificate and domain.
