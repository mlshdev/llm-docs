> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksecaclauthorizationexportwrapped](https://developer.apple.com/documentation/security/ksecaclauthorizationexportwrapped)

# kSecACLAuthorizationExportWrapped (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

Export a wrapped (that is, encrypted) key. This tag is checked on the key being exported; in addition, the `CSSM_ACL_AUTHORIZATION_ENCRYPT` tag is checked for any key used in the wrapping operation.

## Declaration

```swift
let kSecACLAuthorizationExportWrapped: CFString
```

# kSecACLAuthorizationExportWrapped (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

Export a wrapped (that is, encrypted) key. This tag is checked on the key being exported; in addition, the `CSSM_ACL_AUTHORIZATION_ENCRYPT` tag is checked for any key used in the wrapping operation.

## Declaration

```objectivec
extern CFStringRef const kSecACLAuthorizationExportWrapped;
```
