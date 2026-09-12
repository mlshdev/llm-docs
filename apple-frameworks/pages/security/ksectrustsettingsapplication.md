> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectrustsettingsapplication](https://developer.apple.com/documentation/security/ksectrustsettingsapplication)

# kSecTrustSettingsApplication (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A trusted application reference for the application checking the certificate’s trust settings.

## Declaration

```swift
var kSecTrustSettingsApplication: String { get }
```

<a id="Discussion"></a>

## Discussion

The value is a [SecTrustedApplication](sectrustedapplication.md) object.

# kSecTrustSettingsApplication (Objective-C)

**Framework:** Security  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A trusted application reference for the application checking the certificate’s trust settings.

## Declaration

```objectivec
#define kSecTrustSettingsApplication
```

<a id="Discussion"></a>

## Discussion

The value is a [SecTrustedApplicationRef](sectrustedapplication.md) object.
