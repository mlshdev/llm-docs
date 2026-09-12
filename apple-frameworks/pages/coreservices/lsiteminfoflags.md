> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/lsiteminfoflags](https://developer.apple.com/documentation/coreservices/lsiteminfoflags)

# LSItemInfoFlags (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The specification that provides information about an item.

## Declaration

```swift
struct LSItemInfoFlags
```

<a id="overview"></a>

## Overview

These flags are set in an item-information record to provide information about an item; see [LSItemInfoRecord](lsiteminforecord.md) for a description of this structure.

## Topics

### Creating Item Information Flags

- [init(rawValue:)](lsiteminfoflags/1442051-init.md)

### Constants

- [isPlainFile](lsiteminfoflags/1444223-isplainfile.md): Deprecated. Item is a data file (and not, for example, a directory, volume, or UNIX symbolic link).
- [isPackage](lsiteminfoflags/1449324-ispackage.md): Deprecated. Item is a packaged directory.
- [isApplication](lsiteminfoflags/1449811-isapplication.md): Deprecated. Item is a single-file or packaged application.
- [isContainer](lsiteminfoflags/1443420-iscontainer.md): Deprecated. Item is a directory (includes packages) or volume.
- [isAliasFile](lsiteminfoflags/1444478-isaliasfile.md): Deprecated. Item is an alias file (includes symbolic links).
- [isSymlink](lsiteminfoflags/1446223-issymlink.md): Deprecated. Item is a UNIX symbolic link.
- [isInvisible](lsiteminfoflags/1449065-isinvisible.md): Deprecated. Item is invisible, because either its name begins with a period or its `isInvisible` Finder flag is set.
- [isNativeApp](lsiteminfoflags/1443624-isnativeapp.md): Deprecated. Item is an application that can run natively in macOS.
- [isClassicApp](lsiteminfoflags/1449915-isclassicapp.md): Deprecated. Item is an application that cannot run natively and must be launched in the Classic emulation environment.
- [appPrefersNative](lsiteminfoflags/1446535-appprefersnative.md): Deprecated. Item is an application that can run either natively or in the Classic emulation environment, but prefers to be launched natively. This flag is valid only when `kLSItemInfoIsNativeApp` is set.
- [appPrefersClassic](lsiteminfoflags/1447454-appprefersclassic.md): Deprecated. Item is an application that can run either natively or in the Classic emulation environment, but prefers tobe launched in the Classic environment. This flag is valid only when `kLSItemInfoIsNativeApp` isset.
- [appIsScriptable](lsiteminfoflags/1448463-appisscriptable.md): Deprecated. Item is an application that can be scripted.
- [isVolume](lsiteminfoflags/1448330-isvolume.md): Deprecated. Item is the root directory of a volume or mount point.
- [extensionIsHidden](lsiteminfoflags/1445838-extensionishidden.md): Deprecated. Item has a hidden filename extension.

## Relationships

### Conforms To

- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# LSItemInfoFlags (Objective-C)

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The specification that provides information about an item.

## Declaration

```objectivec
typedef enum LSItemInfoFlags : OptionBits {
    ...
} LSItemInfoFlags;
```

<a id="overview"></a>

## Overview

These flags are set in an item-information record to provide information about an item; see [LSItemInfoRecord](lsiteminforecord.md) for a description of this structure.

## Topics

### Constants

- [kLSItemInfoIsPlainFile](lsiteminfoflags/klsiteminfoisplainfile.md): Deprecated. Item is a data file (and not, for example, a directory, volume, or UNIX symbolic link).
- [kLSItemInfoIsPackage](lsiteminfoflags/klsiteminfoispackage.md): Deprecated. Item is a packaged directory.
- [kLSItemInfoIsApplication](lsiteminfoflags/klsiteminfoisapplication.md): Deprecated. Item is a single-file or packaged application.
- [kLSItemInfoIsContainer](lsiteminfoflags/klsiteminfoiscontainer.md): Deprecated. Item is a directory (includes packages) or volume.
- [kLSItemInfoIsAliasFile](lsiteminfoflags/klsiteminfoisaliasfile.md): Deprecated. Item is an alias file (includes symbolic links).
- [kLSItemInfoIsSymlink](lsiteminfoflags/klsiteminfoissymlink.md): Deprecated. Item is a UNIX symbolic link.
- [kLSItemInfoIsInvisible](lsiteminfoflags/klsiteminfoisinvisible.md): Deprecated. Item is invisible, because either its name begins with a period or its `isInvisible` Finder flag is set.
- [kLSItemInfoIsNativeApp](lsiteminfoflags/klsiteminfoisnativeapp.md): Deprecated. Item is an application that can run natively in macOS.
- [kLSItemInfoIsClassicApp](lsiteminfoflags/klsiteminfoisclassicapp.md): Deprecated. Item is an application that cannot run natively and must be launched in the Classic emulation environment.
- [kLSItemInfoAppPrefersNative](lsiteminfoflags/klsiteminfoappprefersnative.md): Deprecated. Item is an application that can run either natively or in the Classic emulation environment, but prefers to be launched natively. This flag is valid only when `kLSItemInfoIsNativeApp` is set.
- [kLSItemInfoAppPrefersClassic](lsiteminfoflags/klsiteminfoappprefersclassic.md): Deprecated. Item is an application that can run either natively or in the Classic emulation environment, but prefers tobe launched in the Classic environment. This flag is valid only when `kLSItemInfoIsNativeApp` isset.
- [kLSItemInfoAppIsScriptable](lsiteminfoflags/klsiteminfoappisscriptable.md): Deprecated. Item is an application that can be scripted.
- [kLSItemInfoIsVolume](lsiteminfoflags/klsiteminfoisvolume.md): Deprecated. Item is the root directory of a volume or mount point.
- [kLSItemInfoExtensionIsHidden](lsiteminfoflags/klsiteminfoextensionishidden.md): Deprecated. Item has a hidden filename extension.
