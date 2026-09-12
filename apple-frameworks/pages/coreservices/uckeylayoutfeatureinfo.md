> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/uckeylayoutfeatureinfo](https://developer.apple.com/documentation/coreservices/uckeylayoutfeatureinfo)

# UCKeyLayoutFeatureInfo (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies the longest possible output string to be produced by the current `'uchr'` resource.

## Declaration

```swift
struct UCKeyLayoutFeatureInfo
```

<a id="overview"></a>

## Overview

The Unicode keyboard-layout ( `'uchr'`) resource contains the data necessary to map virtual key codes to Unicode character codes for a given keyboard layout. The `'uchr'` format consists of a header information section and five key mapping data sections. The `UCKeyLayoutFeatureInfo` type is used in the header section of the `'uchr'` resource.

## Topics

### Initializers

- [init()](uckeylayoutfeatureinfo/1442653-init.md)
- [init(keyLayoutFeatureInfoFormat:reserved:maxOutputStringLength:)](uckeylayoutfeatureinfo/1445182-init.md)

### Instance Properties

- [keyLayoutFeatureInfoFormat](uckeylayoutfeatureinfo/1390617-keylayoutfeatureinfoformat.md): An unsigned 16-bit integer identifying the format of the `UCKeyLayoutFeatureInfo` structure. Set to `kUCKeyLayoutFeatureInfoFormat`.
- [maxOutputStringLength](uckeylayoutfeatureinfo/1390572-maxoutputstringlength.md): An unsigned 32-bit integer specifying the longest possible output string of Unicode characters to be produced by this `'uchr'` resource.
- [reserved](uckeylayoutfeatureinfo/1390566-reserved.md): Reserved. Set to 0.

# UCKeyLayoutFeatureInfo (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Specifies the longest possible output string to be produced by the current `'uchr'` resource.

## Declaration

```objectivec
typedef struct UCKeyLayoutFeatureInfo {
    ...
} UCKeyLayoutFeatureInfo;
```

<a id="overview"></a>

## Overview

The Unicode keyboard-layout ( `'uchr'`) resource contains the data necessary to map virtual key codes to Unicode character codes for a given keyboard layout. The `'uchr'` format consists of a header information section and five key mapping data sections. The `UCKeyLayoutFeatureInfo` type is used in the header section of the `'uchr'` resource.

## Topics

### Instance Properties

- [keyLayoutFeatureInfoFormat](uckeylayoutfeatureinfo/1390617-keylayoutfeatureinfoformat.md): An unsigned 16-bit integer identifying the format of the `UCKeyLayoutFeatureInfo` structure. Set to `kUCKeyLayoutFeatureInfoFormat`.
- [maxOutputStringLength](uckeylayoutfeatureinfo/1390572-maxoutputstringlength.md): An unsigned 32-bit integer specifying the longest possible output string of Unicode characters to be produced by this `'uchr'` resource.
- [reserved](uckeylayoutfeatureinfo/1390566-reserved.md): Reserved. Set to 0.
