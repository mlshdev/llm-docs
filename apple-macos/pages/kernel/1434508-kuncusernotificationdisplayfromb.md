> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1434508-kuncusernotificationdisplayfromb

# KUNCUserNotificationDisplayFromBundle

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

## Declaration

```objectivec
kern_return_t KUNCUserNotificationDisplayFromBundle(KUNCUserNotificationID notificationID, char *bundleIdentifier, char *fileName, char *fileExtension, char *messageKey, char *tokenString, KUNCUserNotificationCallBack callback, int contextKey);
```
