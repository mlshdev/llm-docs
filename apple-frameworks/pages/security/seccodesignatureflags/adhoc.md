> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccodesignatureflags/adhoc](https://developer.apple.com/documentation/security/seccodesignatureflags/adhoc)

# adhoc (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Must be used without a signing identity.

## Declaration

```swift
static var adhoc: SecCodeSignatureFlags { get }
```

<a id="Discussion"></a>

## Discussion

The code has been sealed without a signing identity. No identity may be retrieved from it, and any code requirement placing restrictions on the signing identity will fail. This flag is set by Code Signing Services when you create an ad-hoc signature, and cannot be set explicitly. An ad-hoc signature is created by signing with the pseudo-identity “-” (a dash).

# kSecCodeSignatureAdhoc (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Must be used without a signing identity.

## Declaration

```objectivec
kSecCodeSignatureAdhoc
```

<a id="Discussion"></a>

## Discussion

The code has been sealed without a signing identity. No identity may be retrieved from it, and any code requirement placing restrictions on the signing identity will fail. This flag is set by Code Signing Services when you create an ad-hoc signature, and cannot be set explicitly. An ad-hoc signature is created by signing with the pseudo-identity “-” (a dash).
