> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsynccmmcreate(_:)](https://developer.apple.com/documentation/colorsync/colorsynccmmcreate(_:))

# ColorSyncCMMCreate(\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

Creates a CMM object from a CMM bundle.

## Declaration

```swift
func ColorSyncCMMCreate(_ cmmBundle: CFBundle!) -> Unmanaged<ColorSyncCMM>?
```

## Parameters

- `cmmBundle`: The bundle containing the CMM.

<a id="return-value"></a>

## Return Value

A new [ColorSyncCMM](colorsynccmm.md), or `NULL` in case of failure.

## See Also

### Working with CMMs

- [ColorSyncCMM](colorsynccmm.md): A reference to a Color Management Module (CMM).
- [ColorSyncCMMCopyCMMIdentifier(\_:)](colorsynccmmcopycmmidentifier%28__%29.md): Copies the identifier of a CMM.
- [ColorSyncCMMCopyLocalizedName(\_:)](colorsynccmmcopylocalizedname%28__%29.md): Copies the localized name of a CMM.
- [ColorSyncCMMGetBundle(\_:)](colorsynccmmgetbundle%28__%29.md): Returns the bundle associated with a CMM.
- [ColorSyncCMMGetTypeID()](colorsynccmmgettypeid%28%29.md): Returns the `CFTypeID` for `ColorSyncCMM`s.
- [ColorSyncIterateInstalledCMMs(\_:\_:)](colorsynciterateinstalledcmms%28____%29.md): Iterates over the installed CMMs, invoking a callback for each one.

# ColorSyncCMMCreate (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** macOS 10.4+

Creates a CMM object from a CMM bundle.

## Declaration

```objectivec
extern ColorSyncCMMRefColorSyncCMMCreate(CFBundleRef cmmBundle);
```

## Parameters

- `cmmBundle`: The bundle containing the CMM.

<a id="return-value"></a>

## Return Value

A new [ColorSyncCMMRef](colorsynccmm.md), or `NULL` in case of failure.

## See Also

### Working with CMMs

- [ColorSyncCMMRef](colorsynccmm.md): A reference to a Color Management Module (CMM).
- [ColorSyncCMMCopyCMMIdentifier](colorsynccmmcopycmmidentifier%28__%29.md): Copies the identifier of a CMM.
- [ColorSyncCMMCopyLocalizedName](colorsynccmmcopylocalizedname%28__%29.md): Copies the localized name of a CMM.
- [ColorSyncCMMGetBundle](colorsynccmmgetbundle%28__%29.md): Returns the bundle associated with a CMM.
- [ColorSyncCMMGetTypeID](colorsynccmmgettypeid%28%29.md): Returns the `CFTypeID` for `ColorSyncCMM`s.
- [ColorSyncIterateInstalledCMMs](colorsynciterateinstalledcmms%28____%29.md): Iterates over the installed CMMs, invoking a callback for each one.
