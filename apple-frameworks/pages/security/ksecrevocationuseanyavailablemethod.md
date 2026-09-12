> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecrevocationuseanyavailablemethod](https://developer.apple.com/documentation/security/ksecrevocationuseanyavailablemethod)

# kSecRevocationUseAnyAvailableMethod (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Perform either OCSP or CRL checking.

## Declaration

```swift
var kSecRevocationUseAnyAvailableMethod: CFOptionFlags { get }
```

<a id="Discussion"></a>

## Discussion

The checking is performed according to the method(s) specified in the certificate and the value of [kSecRevocationPreferCRL](ksecrevocationprefercrl.md).

# kSecRevocationUseAnyAvailableMethod (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Perform either OCSP or CRL checking.

## Declaration

```objectivec
kSecRevocationUseAnyAvailableMethod
```

<a id="Discussion"></a>

## Discussion

The checking is performed according to the method(s) specified in the certificate and the value of [kSecRevocationPreferCRL](ksecrevocationprefercrl.md).
