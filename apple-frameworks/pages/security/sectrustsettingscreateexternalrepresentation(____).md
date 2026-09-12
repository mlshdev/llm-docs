> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustsettingscreateexternalrepresentation(_:_:)](https://developer.apple.com/documentation/security/sectrustsettingscreateexternalrepresentation(_:_:))

# SecTrustSettingsCreateExternalRepresentation(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Obtains an external, portable representation of the specified domain’s trust settings.

## Declaration

```swift
func SecTrustSettingsCreateExternalRepresentation(_ domain: SecTrustSettingsDomain, _ trustSettings: UnsafeMutablePointer<CFData?>) -> OSStatus
```

## Parameters

- `domain`: The trust settings domain for which you want an external representation of trust settings. For possible values, see [SecTrustSettingsDomain](sectrustsettingsdomain.md).
- `trustSettings`: An external representation of the domain’s trust settings. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Returns [errSecNoTrustSettings](errsecnotrustsettings.md) if no trust settings exist for the specified domain.

<a id="Discussion"></a>

## Discussion

Trust settings for a certificate are associated with the hash of the certificate. Whenever the system encounters a certificate with the hash value associated with the trust settings, it applies those trust settings to the certificate. This function allows you to export trust settings to a portable data format that can subsequently be imported on another machine. You can use this ability, for example, to clone trust settings to all the machines within an enterprise or university.

# SecTrustSettingsCreateExternalRepresentation (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Obtains an external, portable representation of the specified domain’s trust settings.

## Declaration

```objectivec
OSStatus SecTrustSettingsCreateExternalRepresentation(SecTrustSettingsDomain domain, CFDataRef*trustSettings);
```

## Parameters

- `domain`: The trust settings domain for which you want an external representation of trust settings. For possible values, see [SecTrustSettingsDomain](sectrustsettingsdomain.md).
- `trustSettings`: An external representation of the domain’s trust settings. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md). Returns [errSecNoTrustSettings](errsecnotrustsettings.md) if no trust settings exist for the specified domain.

<a id="Discussion"></a>

## Discussion

Trust settings for a certificate are associated with the hash of the certificate. Whenever the system encounters a certificate with the hash value associated with the trust settings, it applies those trust settings to the certificate. This function allows you to export trust settings to a portable data format that can subsequently be imported on another machine. You can use this ability, for example, to clone trust settings to all the machines within an enterprise or university.
