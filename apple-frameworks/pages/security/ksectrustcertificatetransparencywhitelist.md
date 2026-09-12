> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectrustcertificatetransparencywhitelist](https://developer.apple.com/documentation/security/ksectrustcertificatetransparencywhitelist)

# kSecTrustCertificateTransparencyWhiteList (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.13) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

A key whose value is a Boolean used to indicate the chain satisfies Certificate Transparency by being on the allow list.

## Declaration

```swift
let kSecTrustCertificateTransparencyWhiteList: CFString
```

<a id="Discussion"></a>

## Discussion

When the key is present and the value set to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), it indicates the chain is Extended Validation (EV) and not Certificate Transparency (CT) qualified, but is nonetheless included on the allow list.

# kSecTrustCertificateTransparencyWhiteList (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.13) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 4.0)

A key whose value is a Boolean used to indicate the chain satisfies Certificate Transparency by being on the allow list.

## Declaration

```objectivec
extern CFStringRef const kSecTrustCertificateTransparencyWhiteList;
```

<a id="Discussion"></a>

## Discussion

When the key is present and the value set to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), it indicates the chain is Extended Validation (EV) and not Certificate Transparency (CT) qualified, but is nonetheless included on the allow list.
