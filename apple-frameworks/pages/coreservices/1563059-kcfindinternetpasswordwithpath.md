> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1563059-kcfindinternetpasswordwithpath](https://developer.apple.com/documentation/coreservices/1563059-kcfindinternetpasswordwithpath)

# KCFindInternetPasswordWithPath

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

## Declaration

```objectivec
OSStatus KCFindInternetPasswordWithPath(ConstStringPtr serverName, ConstStringPtr securityDomain, ConstStringPtr accountName, ConstStringPtr path, UInt16 port, OSType protocol, OSType authType, UInt32 maxLength, void *passwordData, UInt32 *actualLength, KCItemRef *item);
```
