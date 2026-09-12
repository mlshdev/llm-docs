> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectrustorganizationname](https://developer.apple.com/documentation/security/ksectrustorganizationname)

# kSecTrustOrganizationName (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is the organization name field of the subject of the leaf certificate.

## Declaration

```swift
let kSecTrustOrganizationName: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFString](../corefoundation/cfstring.md) that is meant to be displayed to the user as the validated name of the company or entity that owns the certificate, but only if the [kSecTrustExtendedValidation](ksectrustextendedvalidation.md) key is present.

# kSecTrustOrganizationName (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is the organization name field of the subject of the leaf certificate.

## Declaration

```objectivec
extern CFStringRef const kSecTrustOrganizationName;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFStringRef](../corefoundation/cfstring.md) that is meant to be displayed to the user as the validated name of the company or entity that owns the certificate, but only if the [kSecTrustExtendedValidation](ksectrustextendedvalidation.md) key is present.
