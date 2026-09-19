> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1434506-kuncusernotificationdisplayalert

# KUNCUserNotificationDisplayAlert

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

## Declaration

```objectivec
kern_return_t KUNCUserNotificationDisplayAlert(int alertTimeout, unsigned int flags, char *iconPath, char *soundPath, char *localizationPath, char *alertHeader, char *alertMessage, char *defaultButtonTitle, char *alternateButtonTitle, char *otherButtonTitle, unsigned int *responseFlags);
```
