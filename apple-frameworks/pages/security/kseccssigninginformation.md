> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccssigninginformation](https://developer.apple.com/documentation/security/kseccssigninginformation)

# kSecCSSigningInformation (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Cryptographic signing information.

## Declaration

```swift
var kSecCSSigningInformation: UInt32 { get }
```

<a id="Discussion"></a>

## Discussion

The certificate chain and Cryptographic Message Syntax (CMS) data (if any). For ad-hoc signed code, there are no certificates and the CMS data is empty.

# kSecCSSigningInformation (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Cryptographic signing information.

## Declaration

```objectivec
kSecCSSigningInformation
```

<a id="Discussion"></a>

## Discussion

The certificate chain and Cryptographic Message Syntax (CMS) data (if any). For ad-hoc signed code, there are no certificates and the CMS data is empty.
