> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/lsrequestedinfo](https://developer.apple.com/documentation/coreservices/lsrequestedinfo)

# LSRequestedInfo (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The specification that controls which information to obtain about an item.

## Declaration

```swift
struct LSRequestedInfo
```

<a id="overview"></a>

## Overview

These flags are passed to the `LSCopyItemInfoForRef` and `LSCopyItemInfoForURL` functions to specify the type of information to be obtained in an item-information record; see [LSItemInfoRecord](lsiteminforecord.md) for a description of this structure.

## Topics

### Creating an Item Information Request

- [init(rawValue:)](lsrequestedinfo/1443883-init.md)

### Constants

- [requestExtension](lsrequestedinfo/1448601-requestextension.md): Deprecated. Requests the item’s filename extension.
- [requestTypeCreator](lsrequestedinfo/1446509-requesttypecreator.md): Deprecated. Requests the item’s file type and creator signature.
- [requestBasicFlagsOnly](lsrequestedinfo/1447145-requestbasicflagsonly.md): Deprecated. Requests all item-information flags that are not application-specific: that is, all except `kLSItemInfoIsNativeApp` through `kLSItemInfoAppIsScriptable`.
- [requestAppTypeFlags](lsrequestedinfo/1442110-requestapptypeflags.md): Deprecated. Requests all application-specific item-information flags: that is, `kLSItemInfoIsNativeApp` through `kLSItemInfoAppIsScriptable`.
- [requestAllFlags](lsrequestedinfo/1445356-requestallflags.md): Deprecated. Requests all item-information flags.
- [requestIconAndKind](lsrequestedinfo/1447945-requesticonandkind.md): Deprecated. Not used.
- [requestExtensionFlagsOnly](lsrequestedinfo/1445164-requestextensionflagsonly.md): Deprecated. Requests only the `kLSItemInfoExtensionIsHidden` item-information flag.
- [requestAllInfo](lsrequestedinfo/1447901-requestallinfo.md): Deprecated. Requests all available item information.

## Relationships

### Conforms To

- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# LSRequestedInfo (Objective-C)

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The specification that controls which information to obtain about an item.

## Declaration

```objectivec
typedef enum LSRequestedInfo : OptionBits {
    ...
} LSRequestedInfo;
```

<a id="overview"></a>

## Overview

These flags are passed to the `LSCopyItemInfoForRef` and `LSCopyItemInfoForURL` functions to specify the type of information to be obtained in an item-information record; see [LSItemInfoRecord](lsiteminforecord.md) for a description of this structure.

## Topics

### Constants

- [kLSRequestExtension](lsrequestedinfo/klsrequestextension.md): Deprecated. Requests the item’s filename extension.
- [kLSRequestTypeCreator](lsrequestedinfo/klsrequesttypecreator.md): Deprecated. Requests the item’s file type and creator signature.
- [kLSRequestBasicFlagsOnly](lsrequestedinfo/klsrequestbasicflagsonly.md): Deprecated. Requests all item-information flags that are not application-specific: that is, all except `kLSItemInfoIsNativeApp` through `kLSItemInfoAppIsScriptable`.
- [kLSRequestAppTypeFlags](lsrequestedinfo/klsrequestapptypeflags.md): Deprecated. Requests all application-specific item-information flags: that is, `kLSItemInfoIsNativeApp` through `kLSItemInfoAppIsScriptable`.
- [kLSRequestAllFlags](lsrequestedinfo/klsrequestallflags.md): Deprecated. Requests all item-information flags.
- [kLSRequestIconAndKind](lsrequestedinfo/klsrequesticonandkind.md): Deprecated. Not used.
- [kLSRequestExtensionFlagsOnly](lsrequestedinfo/klsrequestextensionflagsonly.md): Deprecated. Requests only the `kLSItemInfoExtensionIsHidden` item-information flag.
- [kLSRequestAllInfo](lsrequestedinfo/klsrequestallinfo.md): Deprecated. Requests all available item information.
