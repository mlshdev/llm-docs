> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1389166-determineifpathisenclosedbyfolde

# DetermineIfPathIsEnclosedByFolder

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.4+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr DetermineIfPathIsEnclosedByFolder(FSVolumeRefNum domainOrVRefNum, OSType folderType, const UInt8 *utf8Path, Boolean pathIsRealPath, Boolean *outResult);
```
