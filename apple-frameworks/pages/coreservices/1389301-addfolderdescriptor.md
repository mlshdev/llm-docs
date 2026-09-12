> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1389301-addfolderdescriptor](https://developer.apple.com/documentation/coreservices/1389301-addfolderdescriptor)

# AddFolderDescriptor

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
OSErr AddFolderDescriptor(FolderType foldType, FolderDescFlags flags, FolderClass foldClass, FolderLocation foldLocation, OSType badgeSignature, OSType badgeType, ConstStrFileNameParam name, Boolean replaceFlag);
```
