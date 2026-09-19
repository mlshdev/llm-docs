> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1389175-findfolder

# FindFolder

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr FindFolder(FSVolumeRefNum vRefNum, OSType folderType, Boolean createFolder, FSVolumeRefNum *foundVRefNum, SInt32 *foundDirID);
```
