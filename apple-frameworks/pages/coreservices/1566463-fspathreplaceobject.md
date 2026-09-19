> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1566463-fspathreplaceobject

# FSPathReplaceObject

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.8)

## Declaration

```objectivec
OSStatus FSPathReplaceObject(const char *originalObjectPath, const char *replacementObjectPath, CFStringRef newName, CFStringRef temporaryName, const char *temporaryDirectoryPath, OptionBits flags);
```
