> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/ksecpolicyappleipsec

# kSecPolicyAppleIPsec (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Policy for use in IPsec communication. Functionally identical to SSL policy. A separate OID is provided to facilitate per-policy, per-certificate trust settings using the `SecTrust` mechanism.

## Declaration

```swift
let kSecPolicyAppleIPsec: CFString
```

# kSecPolicyAppleIPsec (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Policy for use in IPsec communication. Functionally identical to SSL policy. A separate OID is provided to facilitate per-policy, per-certificate trust settings using the `SecTrust` mechanism.

## Declaration

```objectivec
extern CFStringRef const kSecPolicyAppleIPsec;
```
