> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectrustcertificatetransparency](https://developer.apple.com/documentation/security/ksectrustcertificatetransparency)

# kSecTrustCertificateTransparency (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean used to indicate Certificate Transparency.

## Declaration

```swift
let kSecTrustCertificateTransparency: CFString
```

<a id="Discussion"></a>

## Discussion

When the key is present and the value set to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), it indicates the chain is Certificate Transparency (CT) qualified.

# kSecTrustCertificateTransparency (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean used to indicate Certificate Transparency.

## Declaration

```objectivec
extern CFStringRef const kSecTrustCertificateTransparency;
```

<a id="Discussion"></a>

## Discussion

When the key is present and the value set to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), it indicates the chain is Certificate Transparency (CT) qualified.
