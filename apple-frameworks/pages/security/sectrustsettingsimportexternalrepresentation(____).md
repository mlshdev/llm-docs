> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustsettingsimportexternalrepresentation(_:_:)](https://developer.apple.com/documentation/security/sectrustsettingsimportexternalrepresentation(_:_:))

# SecTrustSettingsImportExternalRepresentation(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Imports trust settings into a trust domain.

## Declaration

```swift
func SecTrustSettingsImportExternalRepresentation(_ domain: SecTrustSettingsDomain, _ trustSettings: CFData) -> OSStatus
```

## Parameters

- `domain`: The trust settings domain into which you want to import trust settings. For possible values, see [SecTrustSettingsDomain](sectrustsettingsdomain.md).
- `trustSettings`: An external representation of the trust settings (created by the [SecTrustSettingsCreateExternalRepresentation(\_:\_:)](sectrustsettingscreateexternalrepresentation%28____%29.md) function) that you want to import.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Trust settings for a certificate are associated with the hash of the certificate. Whenever the system encounters a certificate with the hash value associated with the trust settings, it applies those trust settings to the certificate. This function allows you to import trust settings in a portable data format that was exported from another machine. You can use this ability, for example, to clone trust settings to all the machines within an enterprise or university.

# SecTrustSettingsImportExternalRepresentation (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Imports trust settings into a trust domain.

## Declaration

```objectivec
OSStatus SecTrustSettingsImportExternalRepresentation(SecTrustSettingsDomain domain, CFDataRef trustSettings);
```

## Parameters

- `domain`: The trust settings domain into which you want to import trust settings. For possible values, see [SecTrustSettingsDomain](sectrustsettingsdomain.md).
- `trustSettings`: An external representation of the trust settings (created by the [SecTrustSettingsCreateExternalRepresentation](sectrustsettingscreateexternalrepresentation%28____%29.md) function) that you want to import.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

Trust settings for a certificate are associated with the hash of the certificate. Whenever the system encounters a certificate with the hash value associated with the trust settings, it applies those trust settings to the certificate. This function allows you to import trust settings in a portable data format that was exported from another machine. You can use this ability, for example, to clone trust settings to all the machines within an enterprise or university.
