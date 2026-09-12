> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsynccmmgettypeid()](https://developer.apple.com/documentation/colorsync/colorsynccmmgettypeid())

# ColorSyncCMMGetTypeID() (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

Returns the `CFTypeID` for `ColorSyncCMM`s.

## Declaration

```swift
func ColorSyncCMMGetTypeID() -> CFTypeID
```

## See Also

### Working with CMMs

- [ColorSyncCMM](colorsynccmm.md): A reference to a Color Management Module (CMM).
- [ColorSyncCMMCreate(\_:)](colorsynccmmcreate%28__%29.md): Creates a CMM object from a CMM bundle.
- [ColorSyncCMMCopyCMMIdentifier(\_:)](colorsynccmmcopycmmidentifier%28__%29.md): Copies the identifier of a CMM.
- [ColorSyncCMMCopyLocalizedName(\_:)](colorsynccmmcopylocalizedname%28__%29.md): Copies the localized name of a CMM.
- [ColorSyncCMMGetBundle(\_:)](colorsynccmmgetbundle%28__%29.md): Returns the bundle associated with a CMM.
- [ColorSyncIterateInstalledCMMs(\_:\_:)](colorsynciterateinstalledcmms%28____%29.md): Iterates over the installed CMMs, invoking a callback for each one.

# ColorSyncCMMGetTypeID (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 16.0+ · macOS 10.4+

Returns the `CFTypeID` for `ColorSyncCMM`s.

## Declaration

```objectivec
extern CFTypeID ColorSyncCMMGetTypeID();
```

## See Also

### Working with CMMs

- [ColorSyncCMMRef](colorsynccmm.md): A reference to a Color Management Module (CMM).
- [ColorSyncCMMCreate](colorsynccmmcreate%28__%29.md): Creates a CMM object from a CMM bundle.
- [ColorSyncCMMCopyCMMIdentifier](colorsynccmmcopycmmidentifier%28__%29.md): Copies the identifier of a CMM.
- [ColorSyncCMMCopyLocalizedName](colorsynccmmcopylocalizedname%28__%29.md): Copies the localized name of a CMM.
- [ColorSyncCMMGetBundle](colorsynccmmgetbundle%28__%29.md): Returns the bundle associated with a CMM.
- [ColorSyncIterateInstalledCMMs](colorsynciterateinstalledcmms%28____%29.md): Iterates over the installed CMMs, invoking a callback for each one.
