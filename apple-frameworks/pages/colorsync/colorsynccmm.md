> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsynccmm](https://developer.apple.com/documentation/colorsync/colorsynccmm)

# ColorSyncCMM (Swift)

**Framework:** ColorSync  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A reference to a Color Management Module (CMM).

## Declaration

```swift
class ColorSyncCMM
```

<a id="overview"></a>

## Overview

This type is a lightweight wrapper around a Core Foundation bundle.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Working with CMMs

- [ColorSyncCMMCreate(\_:)](colorsynccmmcreate%28__%29.md): Creates a CMM object from a CMM bundle.
- [ColorSyncCMMCopyCMMIdentifier(\_:)](colorsynccmmcopycmmidentifier%28__%29.md): Copies the identifier of a CMM.
- [ColorSyncCMMCopyLocalizedName(\_:)](colorsynccmmcopylocalizedname%28__%29.md): Copies the localized name of a CMM.
- [ColorSyncCMMGetBundle(\_:)](colorsynccmmgetbundle%28__%29.md): Returns the bundle associated with a CMM.
- [ColorSyncCMMGetTypeID()](colorsynccmmgettypeid%28%29.md): Returns the `CFTypeID` for `ColorSyncCMM`s.
- [ColorSyncIterateInstalledCMMs(\_:\_:)](colorsynciterateinstalledcmms%28____%29.md): Iterates over the installed CMMs, invoking a callback for each one.

# ColorSyncCMMRef (Objective-C)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

A reference to a Color Management Module (CMM).

## Declaration

```objectivec
typedef struct ColorSyncCMM * ColorSyncCMMRef;
```

<a id="overview"></a>

## Overview

This type is a lightweight wrapper around a Core Foundation bundle.

## See Also

### Working with CMMs

- [ColorSyncCMMCreate](colorsynccmmcreate%28__%29.md): Creates a CMM object from a CMM bundle.
- [ColorSyncCMMCopyCMMIdentifier](colorsynccmmcopycmmidentifier%28__%29.md): Copies the identifier of a CMM.
- [ColorSyncCMMCopyLocalizedName](colorsynccmmcopylocalizedname%28__%29.md): Copies the localized name of a CMM.
- [ColorSyncCMMGetBundle](colorsynccmmgetbundle%28__%29.md): Returns the bundle associated with a CMM.
- [ColorSyncCMMGetTypeID](colorsynccmmgettypeid%28%29.md): Returns the `CFTypeID` for `ColorSyncCMM`s.
- [ColorSyncIterateInstalledCMMs](colorsynciterateinstalledcmms%28____%29.md): Iterates over the installed CMMs, invoking a callback for each one.
