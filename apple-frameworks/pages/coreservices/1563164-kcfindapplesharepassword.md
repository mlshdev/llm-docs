> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1563164-kcfindapplesharepassword](https://developer.apple.com/documentation/coreservices/1563164-kcfindapplesharepassword)

# kcfindapplesharepassword

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

## Declaration

```objectivec
OSStatus kcfindapplesharepassword(AFPServerSignature *serverSignature, const char *serverAddress, const char *serverName, const char *volumeName, const char *accountName, UInt32 maxLength, void *passwordData, UInt32 *actualLength, KCItemRef *item);
```
