> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectrustextendedvalidation](https://developer.apple.com/documentation/security/ksectrustextendedvalidation)

# kSecTrustExtendedValidation (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean used to indicate Extended Validation.

## Declaration

```swift
let kSecTrustExtendedValidation: CFString
```

<a id="Discussion"></a>

## Discussion

When the key is present and the value set to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), it indicates the chain is validated for Extended Validation (EV).

# kSecTrustExtendedValidation (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value is a Boolean used to indicate Extended Validation.

## Declaration

```objectivec
extern CFStringRef const kSecTrustExtendedValidation;
```

<a id="Discussion"></a>

## Discussion

When the key is present and the value set to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md), it indicates the chain is validated for Extended Validation (EV).
