> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustsettingssettrustsettings(_:_:_:)](https://developer.apple.com/documentation/security/sectrustsettingssettrustsettings(_:_:_:))

# SecTrustSettingsSetTrustSettings(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies trust settings for a certificate.

## Declaration

```swift
func SecTrustSettingsSetTrustSettings(_ certRef: SecCertificate, _ domain: SecTrustSettingsDomain, _ trustSettingsDictOrArray: CFTypeRef?) -> OSStatus
```

## Parameters

- `certRef`: The certificate for which you want to specify the trust settings. Pass the value [kSecTrustSettingsDefaultRootCertSetting](ksectrustsettingsdefaultrootcertsetting.md) to set the default root certificate trust settings for the domain.
- `domain`: The trust settings domain of the trust settings that you wish to specify.  For possible values, see [SecTrustSettingsDomain](sectrustsettingsdomain.md).
- `trustSettingsDictOrArray`: The trust settings you wish to specify for this certificate, in the form of a `CFDictionary` object, a `CFArray` of `CFDictionary` objects, or `NULL`. The contents of `CFDictionary` objects used to specify trust settings are detailed in the [SecTrustSettingsCopyTrustSettings(\_:\_:\_:)](sectrustsettingscopytrustsettings%28______%29.md) function description. Pass `NULL` if you want to specify an empty trust settings array.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

If you pass `NULL` for the `trustSettingsDictOrArray` parameter, then the trust settings for this certificate are stored as an empty trust settings array, indicating “always trust this root certificate regardless of use.” This setting is valid only for a self-signed (root) certificate. To instead remove all trust settings for the certificate (interpreted as “this certificate must be verified to a known trusted certificate”), use the [SecTrustSettingsRemoveTrustSettings(\_:\_:)](sectrustsettingsremovetrustsettings%28____%29.md) function.

If the specified certificate already has trust settings in the specified domain, this function replaces them.

<a id="Special-Considerations"></a>

### Special Considerations

When making changes to per-user trust settings, the user is prompted with an alert panel asking for authentication (user name and password or other credentials normally used for login). Therefore, it is not possible to modify per-user trust settings when not running in a GUI environment (that is, when the user is not logged in via the login window). When making changes to system-wide trust settings, the user is prompted with an alert panel asking for an administrator’s name and password unless the calling process is running as root, in which case no further authentication is needed. Note that this function might block while waiting for user input.

# SecTrustSettingsSetTrustSettings (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies trust settings for a certificate.

## Declaration

```objectivec
OSStatus SecTrustSettingsSetTrustSettings(SecCertificateRef certRef, SecTrustSettingsDomain domain, CFTypeRef trustSettingsDictOrArray);
```

## Parameters

- `certRef`: The certificate for which you want to specify the trust settings. Pass the value [kSecTrustSettingsDefaultRootCertSetting](ksectrustsettingsdefaultrootcertsetting.md) to set the default root certificate trust settings for the domain.
- `domain`: The trust settings domain of the trust settings that you wish to specify.  For possible values, see [SecTrustSettingsDomain](sectrustsettingsdomain.md).
- `trustSettingsDictOrArray`: The trust settings you wish to specify for this certificate, in the form of a `CFDictionary` object, a `CFArray` of `CFDictionary` objects, or `NULL`. The contents of `CFDictionary` objects used to specify trust settings are detailed in the [SecTrustSettingsCopyTrustSettings](sectrustsettingscopytrustsettings%28______%29.md) function description. Pass `NULL` if you want to specify an empty trust settings array.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

If you pass `NULL` for the `trustSettingsDictOrArray` parameter, then the trust settings for this certificate are stored as an empty trust settings array, indicating “always trust this root certificate regardless of use.” This setting is valid only for a self-signed (root) certificate. To instead remove all trust settings for the certificate (interpreted as “this certificate must be verified to a known trusted certificate”), use the [SecTrustSettingsRemoveTrustSettings](sectrustsettingsremovetrustsettings%28____%29.md) function.

If the specified certificate already has trust settings in the specified domain, this function replaces them.

<a id="Special-Considerations"></a>

### Special Considerations

When making changes to per-user trust settings, the user is prompted with an alert panel asking for authentication (user name and password or other credentials normally used for login). Therefore, it is not possible to modify per-user trust settings when not running in a GUI environment (that is, when the user is not logged in via the login window). When making changes to system-wide trust settings, the user is prompted with an alert panel asking for an administrator’s name and password unless the calling process is running as root, in which case no further authentication is needed. Note that this function might block while waiting for user input.
