> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1566163-fspathgettemporarydirectoryforre

# FSPathGetTemporaryDirectoryForReplaceObject

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.5+ (deprecated in 10.8)

## Declaration

```objectivec
OSStatus FSPathGetTemporaryDirectoryForReplaceObject(const char *originalObjectPath, char *temporaryDirectoryPath, UInt32 maxPathSize, OptionBits flags);
```
