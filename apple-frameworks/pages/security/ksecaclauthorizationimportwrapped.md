> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecaclauthorizationimportwrapped](https://developer.apple.com/documentation/security/ksecaclauthorizationimportwrapped)

# kSecACLAuthorizationImportWrapped (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

Import an encrypted key. This tag is checked on the key being imported; in addition, the `CSSM_ACL_AUTHORIZATION_DECRYPT` tag is checked for any key used in the unwrapping operation.

## Declaration

```swift
let kSecACLAuthorizationImportWrapped: CFString
```

# kSecACLAuthorizationImportWrapped (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

Import an encrypted key. This tag is checked on the key being imported; in addition, the `CSSM_ACL_AUTHORIZATION_DECRYPT` tag is checked for any key used in the unwrapping operation.

## Declaration

```objectivec
extern CFStringRef const kSecACLAuthorizationImportWrapped;
```
