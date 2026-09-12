> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecmatchpolicy](https://developer.apple.com/documentation/security/ksecmatchpolicy)

# kSecMatchPolicy (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates a policy with which a matching certificate or identity must verify.

## Declaration

```swift
let kSecMatchPolicy: CFString
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [SecPolicy](secpolicy.md).

# kSecMatchPolicy (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates a policy with which a matching certificate or identity must verify.

## Declaration

```objectivec
extern CFStringRef const kSecMatchPolicy;
```

<a id="Discussion"></a>

## Discussion

The corresponding value is of type [SecPolicyRef](secpolicy.md).
