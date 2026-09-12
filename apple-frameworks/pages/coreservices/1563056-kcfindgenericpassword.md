> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1563056-kcfindgenericpassword](https://developer.apple.com/documentation/coreservices/1563056-kcfindgenericpassword)

# KCFindGenericPassword

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

## Declaration

```objectivec
OSStatus KCFindGenericPassword(ConstStringPtr serviceName, ConstStringPtr accountName, UInt32 maxLength, void *passwordData, UInt32 *actualLength, KCItemRef *item);
```
