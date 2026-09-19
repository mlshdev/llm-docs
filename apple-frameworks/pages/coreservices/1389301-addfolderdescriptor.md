> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1389301-addfolderdescriptor

# AddFolderDescriptor

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr AddFolderDescriptor(FolderType foldType, FolderDescFlags flags, FolderClass foldClass, FolderLocation foldLocation, OSType badgeSignature, OSType badgeType, ConstStrFileNameParam name, Boolean replaceFlag);
```
