> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1441712-geticonreffromfolder](https://developer.apple.com/documentation/coreservices/1441712-geticonreffromfolder)

# GetIconRefFromFolder(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.15)

## Declaration

```swift
func GetIconRefFromFolder(_ vRefNum: Int16, _ parentFolderID: Int32, _ folderID: Int32, _ attributes: Int8, _ accessPrivileges: Int8, _ theIconRef: UnsafeMutablePointer<IconRef?>!) -> OSErr
```

# GetIconRefFromFolder (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.15)

## Declaration

```objectivec
OSErr GetIconRefFromFolder(SInt16 vRefNum, SInt32 parentFolderID, SInt32 folderID, SInt8 attributes, SInt8 accessPrivileges, IconRef *theIconRef);
```
