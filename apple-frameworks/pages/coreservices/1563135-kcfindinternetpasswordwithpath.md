> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1563135-kcfindinternetpasswordwithpath](https://developer.apple.com/documentation/coreservices/1563135-kcfindinternetpasswordwithpath)

# kcfindinternetpasswordwithpath

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

## Declaration

```objectivec
OSStatus kcfindinternetpasswordwithpath(const char *serverName, const char *securityDomain, const char *accountName, const char *path, UInt16 port, OSType protocol, OSType authType, UInt32 maxLength, void *passwordData, UInt32 *actualLength, KCItemRef *item);
```
