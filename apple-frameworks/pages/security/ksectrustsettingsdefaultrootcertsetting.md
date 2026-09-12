> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectrustsettingsdefaultrootcertsetting](https://developer.apple.com/documentation/security/ksectrustsettingsdefaultrootcertsetting)

# kSecTrustSettingsDefaultRootCertSetting

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A value indicating the default root certificate trust settings when used as a certificate object in a trust settings API function.

## Declaration

```objectivec
#define kSecTrustSettingsDefaultRootCertSetting
```

<a id="Discussion"></a>

## Discussion

Use this value with the [SecTrustSettingsSetTrustSettings](sectrustsettingssettrustsettings%28______%29.md) function to set the default trust settings for root certificates. When evaluating trust settings for a root certificate in a given domain, if no matching explicit trust settings exist for that certificate, then the default value for the effective trust setting is returned (assuming that a default has been set and that the result is not [kSecTrustSettingsResultUnspecified](sectrustsettingsresult/unspecified.md)).
