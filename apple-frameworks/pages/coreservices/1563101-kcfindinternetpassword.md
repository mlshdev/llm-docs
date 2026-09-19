> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1563101-kcfindinternetpassword

# KCFindInternetPassword

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

## Declaration

```objectivec
OSStatus KCFindInternetPassword(ConstStringPtr serverName, ConstStringPtr securityDomain, ConstStringPtr accountName, UInt16 port, OSType protocol, OSType authType, UInt32 maxLength, void *passwordData, UInt32 *actualLength, KCItemRef *item);
```
