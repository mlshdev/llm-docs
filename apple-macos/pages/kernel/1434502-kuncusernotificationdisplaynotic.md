> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1434502-kuncusernotificationdisplaynotic

# KUNCUserNotificationDisplayNotice

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

## Declaration

```objectivec
kern_return_t KUNCUserNotificationDisplayNotice(int noticeTimeout, unsigned int flags, char *iconPath, char *soundPath, char *localizationPath, char *alertHeader, char *alertMessage, char *defaultButtonTitle);
```
