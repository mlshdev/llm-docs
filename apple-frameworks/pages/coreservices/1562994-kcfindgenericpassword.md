> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1562994-kcfindgenericpassword](https://developer.apple.com/documentation/coreservices/1562994-kcfindgenericpassword)

# kcfindgenericpassword

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

## Declaration

```objectivec
OSStatus kcfindgenericpassword(const char *serviceName, const char *accountName, UInt32 maxLength, void *passwordData, UInt32 *actualLength, KCItemRef *item);
```
