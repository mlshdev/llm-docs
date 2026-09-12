> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustsettingsresult](https://developer.apple.com/documentation/security/sectrustsettingsresult)

# SecTrustSettingsResult (Swift)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Trust settings returned in usage constraints dictionaries.

## Declaration

```swift
enum SecTrustSettingsResult
```

<a id="overview"></a>

## Overview

These values appear in the usage constraints dictionaries returned by the [SecTrustSettingsCopyTrustSettings(\_:\_:\_:)](sectrustsettingscopytrustsettings%28______%29.md) and [SecTrustSettingsSetTrustSettings(\_:\_:\_:)](sectrustsettingssettrustsettings%28______%29.md) functions.

## Topics

### Constants

- [SecTrustSettingsResult.invalid](sectrustsettingsresult/invalid.md): Never valid in a trust settings array or in an API call.
- [SecTrustSettingsResult.trustRoot](sectrustsettingsresult/trustroot.md): This root certificate is explicitly trusted.
- [SecTrustSettingsResult.trustAsRoot](sectrustsettingsresult/trustasroot.md): This non-root certificate is explicitly trusted as if it were a trusted root.
- [SecTrustSettingsResult.deny](sectrustsettingsresult/deny.md): This certificate is explicitly distrusted.
- [SecTrustSettingsResult.unspecified](sectrustsettingsresult/unspecified.md): This certificate is neither trusted nor distrusted. This value can be used to specify an “allowed error” without assigning trust to a specific certificate.

### Initializers

- [init(rawValue:)](sectrustsettingsresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SecTrustSettingsResult (Objective-C)

**Framework:** Security  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Trust settings returned in usage constraints dictionaries.

## Declaration

```objectivec
enum SecTrustSettingsResult : uint32_t;
```

<a id="overview"></a>

## Overview

These values appear in the usage constraints dictionaries returned by the [SecTrustSettingsCopyTrustSettings](sectrustsettingscopytrustsettings%28______%29.md) and [SecTrustSettingsSetTrustSettings](sectrustsettingssettrustsettings%28______%29.md) functions.

## Topics

### Constants

- [kSecTrustSettingsResultInvalid](sectrustsettingsresult/invalid.md): Never valid in a trust settings array or in an API call.
- [kSecTrustSettingsResultTrustRoot](sectrustsettingsresult/trustroot.md): This root certificate is explicitly trusted.
- [kSecTrustSettingsResultTrustAsRoot](sectrustsettingsresult/trustasroot.md): This non-root certificate is explicitly trusted as if it were a trusted root.
- [kSecTrustSettingsResultDeny](sectrustsettingsresult/deny.md): This certificate is explicitly distrusted.
- [kSecTrustSettingsResultUnspecified](sectrustsettingsresult/unspecified.md): This certificate is neither trusted nor distrusted. This value can be used to specify an “allowed error” without assigning trust to a specific certificate.
