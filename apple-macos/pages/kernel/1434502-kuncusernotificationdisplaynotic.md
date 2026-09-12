> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1434502-kuncusernotificationdisplaynotic](https://developer.apple.com/documentation/kernel/1434502-kuncusernotificationdisplaynotic)

# KUNCUserNotificationDisplayNotice

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

## Declaration

```objectivec
kern_return_t KUNCUserNotificationDisplayNotice(int noticeTimeout, unsigned int flags, char *iconPath, char *soundPath, char *localizationPath, char *alertHeader, char *alertMessage, char *defaultButtonTitle);
```
