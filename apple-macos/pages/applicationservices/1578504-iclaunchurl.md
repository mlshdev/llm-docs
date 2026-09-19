> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1578504-iclaunchurl

# ICLaunchURL

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.7)

## Declaration

```objectivec
OSStatus ICLaunchURL(ICInstance inst, ConstStr255Param hint, const void *data, long len, long *selStart, long *selEnd);
```
