> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/uckeyboardlayout](https://developer.apple.com/documentation/coreservices/uckeyboardlayout)

# UCKeyboardLayout (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Provides header data for a `'uchr'` resource.

## Declaration

```swift
struct UCKeyboardLayout
```

<a id="overview"></a>

## Overview

The Unicode keyboard-layout ( `'uchr'`) resource contains the data necessary to map virtual key codes to Unicode character codes for a given keyboard layout. The `'uchr'` format consists of a header information section and five key mapping data sections. The `UCKeyboardLayout` type is used in the `'uchr'` resource header. It specifies version and format information, offsets to the various subtables, and an array of `UCKeyboardTypeHeader` entries. 

You should use low-ASCII (0 - 0x7F) only for the KCHR/uchr resource names and you should use Unicode in the Info.plist file when you specify strings for the user-interface (UI).

## Topics

### Initializers

- [init()](uckeyboardlayout/1447446-init.md)
- [init(keyLayoutHeaderFormat:keyLayoutDataVersion:keyLayoutFeatureInfoOffset:keyboardTypeCount:keyboardTypeList:)](uckeyboardlayout/1448404-init.md)

### Instance Properties

- [keyLayoutDataVersion](uckeyboardlayout/1390626-keylayoutdataversion.md): An unsigned 16-bit integer identifying the version of the data in the resource, in binary code decimal format. For example, 0x0100 would equal version 1.0.
- [keyLayoutFeatureInfoOffset](uckeyboardlayout/1390597-keylayoutfeatureinfooffset.md): An unsigned 32-bit integer providing an offset to a structure of type [UCKeyLayoutFeatureInfo](uckeylayoutfeatureinfo.md), if such is used in the resource. May be 0 if no `UCKeyLayoutFeatureInfo` table is included in the resource.
- [keyLayoutHeaderFormat](uckeyboardlayout/1390425-keylayoutheaderformat.md): An unsigned 16-bit integer identifying the format of the structure. Set to `kUCLayoutHeaderFormat`.
- [keyboardTypeCount](uckeyboardlayout/1390448-keyboardtypecount.md): An unsigned 32-bit integer specifying the number of `UCKeyboardTypeHeader` structures in the `keyboardTypeList[]` field’s array.
- [keyboardTypeList](uckeyboardlayout/1390494-keyboardtypelist.md): A variable-length array containing structures of type `UCKeyboardTypeHeader`. Each `UCKeyboardTypeHeader` entry specifies a range of physical keyboard types and contains offsets to each of the key mapping sections to be used for that range of keyboard types.

# UCKeyboardLayout (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Provides header data for a `'uchr'` resource.

## Declaration

```objectivec
typedef struct UCKeyboardLayout {
    ...
} UCKeyboardLayout;
```

<a id="overview"></a>

## Overview

The Unicode keyboard-layout ( `'uchr'`) resource contains the data necessary to map virtual key codes to Unicode character codes for a given keyboard layout. The `'uchr'` format consists of a header information section and five key mapping data sections. The `UCKeyboardLayout` type is used in the `'uchr'` resource header. It specifies version and format information, offsets to the various subtables, and an array of `UCKeyboardTypeHeader` entries. 

You should use low-ASCII (0 - 0x7F) only for the KCHR/uchr resource names and you should use Unicode in the Info.plist file when you specify strings for the user-interface (UI).

## Topics

### Instance Properties

- [keyLayoutDataVersion](uckeyboardlayout/1390626-keylayoutdataversion.md): An unsigned 16-bit integer identifying the version of the data in the resource, in binary code decimal format. For example, 0x0100 would equal version 1.0.
- [keyLayoutFeatureInfoOffset](uckeyboardlayout/1390597-keylayoutfeatureinfooffset.md): An unsigned 32-bit integer providing an offset to a structure of type [UCKeyLayoutFeatureInfo](uckeylayoutfeatureinfo.md), if such is used in the resource. May be 0 if no `UCKeyLayoutFeatureInfo` table is included in the resource.
- [keyLayoutHeaderFormat](uckeyboardlayout/1390425-keylayoutheaderformat.md): An unsigned 16-bit integer identifying the format of the structure. Set to `kUCLayoutHeaderFormat`.
- [keyboardTypeCount](uckeyboardlayout/1390448-keyboardtypecount.md): An unsigned 32-bit integer specifying the number of `UCKeyboardTypeHeader` structures in the `keyboardTypeList[]` field’s array.
- [keyboardTypeList](uckeyboardlayout/1390494-keyboardtypelist.md): A variable-length array containing structures of type `UCKeyboardTypeHeader`. Each `UCKeyboardTypeHeader` entry specifies a range of physical keyboard types and contains offsets to each of the key mapping sections to be used for that range of keyboard types.
