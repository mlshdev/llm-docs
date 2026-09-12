> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/lsiteminforecord](https://developer.apple.com/documentation/coreservices/lsiteminforecord)

# LSItemInfoRecord (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.11)

The specification that contains requested information about an item.

## Declaration

```swift
struct LSItemInfoRecord
```

<a id="overview"></a>

## Overview

This data type defines an item-information record used bythe `LSCopyItemInfoForRef` and `LSCopyItemInfoForURL` functionsto return requested information about an item.

## Topics

### Initializers

- [init()](lsiteminforecord/1445690-init.md): Deprecated.
- [init(flags:filetype:creator:extension:)](lsiteminforecord/1448481-init.md): Deprecated.

### Instance Properties

- [creator](lsiteminforecord/1441870-creator.md): Deprecated. The item’s creator signature.
- [extension](lsiteminforecord/1442123-extension.md): Deprecated. A Core Foundation string object specifying theitem’s filename extension; see the *CFString Reference* inthe Core Foundation Reference Documentation for a description ofthe `CFStringRef` datatype.
- [filetype](lsiteminforecord/1447384-filetype.md): Deprecated. The item’s file type.
- [flags](lsiteminforecord/1446281-flags.md): Deprecated. Item-information flags specifying informationabout the item; see [LSItemInfoFlags](lsiteminfoflags.md) for a description of these flags.

## See Also

### Deprecated Structures

- [LSApplicationParameters](lsapplicationparameters.md): Deprecated. The specification that defines the app, launch flags, and additional parameters that control how an app launches.
- [LSLaunchFSRefSpec](lslaunchfsrefspec.md): Deprecated. The specification that defines, by file-system reference, an app to launch, items to open, or both, along with related information.

# LSItemInfoRecord (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.11)

The specification that contains requested information about an item.

## Declaration

```objectivec
typedef struct LSItemInfoRecord {
    ...
} LSItemInfoRecord;
```

<a id="overview"></a>

## Overview

This data type defines an item-information record used bythe `LSCopyItemInfoForRef` and `LSCopyItemInfoForURL` functionsto return requested information about an item.

## Topics

### Instance Properties

- [creator](lsiteminforecord/1441870-creator.md): Deprecated. The item’s creator signature.
- [extension](lsiteminforecord/1442123-extension.md): Deprecated. A Core Foundation string object specifying theitem’s filename extension; see the *CFString Reference* inthe Core Foundation Reference Documentation for a description ofthe `CFStringRef` datatype.
- [filetype](lsiteminforecord/1447384-filetype.md): Deprecated. The item’s file type.
- [flags](lsiteminforecord/1446281-flags.md): Deprecated. Item-information flags specifying informationabout the item; see [LSItemInfoFlags](lsiteminfoflags.md) for a description of these flags.

## See Also

### Deprecated Structures

- [LSApplicationParameters](lsapplicationparameters.md): Deprecated. The specification that defines the app, launch flags, and additional parameters that control how an app launches.
- [LSLaunchFSRefSpec](lslaunchfsrefspec.md): Deprecated. The specification that defines, by file-system reference, an app to launch, items to open, or both, along with related information.
