> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustsettingsremovetrustsettings(_:_:)](https://developer.apple.com/documentation/security/sectrustsettingsremovetrustsettings(_:_:))

# SecTrustSettingsRemoveTrustSettings(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Deletes the trust settings for a certificate.

## Declaration

```swift
func SecTrustSettingsRemoveTrustSettings(_ certRef: SecCertificate, _ domain: SecTrustSettingsDomain) -> OSStatus
```

## Parameters

- `certRef`: The certificate whose trust settings you wish to remove. Pass the value [kSecTrustSettingsDefaultRootCertSetting](ksectrustsettingsdefaultrootcertsetting.md) to remove the default root certificate trust settings for the domain.
- `domain`: The trust settings domain for which you wish to remove the trust settings. For possible values, see [SecTrustSettingsDomain](sectrustsettingsdomain.md).

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Returns [errSecItemNotFound](errsecitemnotfound.md) if no trust settings exist for the certificate.

<a id="Discussion"></a>

## Discussion

If a certificate has no trust settings, the certificate must be verified to a known, trusted certificate.

# SecTrustSettingsRemoveTrustSettings (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Deletes the trust settings for a certificate.

## Declaration

```objectivec
OSStatus SecTrustSettingsRemoveTrustSettings(SecCertificateRef certRef, SecTrustSettingsDomain domain);
```

## Parameters

- `certRef`: The certificate whose trust settings you wish to remove. Pass the value [kSecTrustSettingsDefaultRootCertSetting](ksectrustsettingsdefaultrootcertsetting.md) to remove the default root certificate trust settings for the domain.
- `domain`: The trust settings domain for which you wish to remove the trust settings. For possible values, see [SecTrustSettingsDomain](sectrustsettingsdomain.md).

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Returns [errSecItemNotFound](errsecitemnotfound.md) if no trust settings exist for the certificate.

<a id="Discussion"></a>

## Discussion

If a certificate has no trust settings, the certificate must be verified to a known, trusted certificate.
