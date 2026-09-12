> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsynccmmcopylocalizedname(_:)](https://developer.apple.com/documentation/colorsync/colorsynccmmcopylocalizedname(_:))

# ColorSyncCMMCopyLocalizedName(\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

Copies the localized name of a CMM.

## Declaration

```swift
func ColorSyncCMMCopyLocalizedName(_: ColorSyncCMM!) -> Unmanaged<CFString>?
```

<a id="return-value"></a>

## Return Value

The localized name of the CMM.

<a id="discussion"></a>

## Discussion

Use this function to get the name of the built-in CMM.

## See Also

### Working with CMMs

- [ColorSyncCMM](colorsynccmm.md): A reference to a Color Management Module (CMM).
- [ColorSyncCMMCreate(\_:)](colorsynccmmcreate%28__%29.md): Creates a CMM object from a CMM bundle.
- [ColorSyncCMMCopyCMMIdentifier(\_:)](colorsynccmmcopycmmidentifier%28__%29.md): Copies the identifier of a CMM.
- [ColorSyncCMMGetBundle(\_:)](colorsynccmmgetbundle%28__%29.md): Returns the bundle associated with a CMM.
- [ColorSyncCMMGetTypeID()](colorsynccmmgettypeid%28%29.md): Returns the `CFTypeID` for `ColorSyncCMM`s.
- [ColorSyncIterateInstalledCMMs(\_:\_:)](colorsynciterateinstalledcmms%28____%29.md): Iterates over the installed CMMs, invoking a callback for each one.

# ColorSyncCMMCopyLocalizedName (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** macOS 10.4+

Copies the localized name of a CMM.

## Declaration

```objectivec
extern CFStringRefColorSyncCMMCopyLocalizedName(ColorSyncCMMRef );
```

<a id="return-value"></a>

## Return Value

The localized name of the CMM.

<a id="discussion"></a>

## Discussion

Use this function to get the name of the built-in CMM.

## See Also

### Working with CMMs

- [ColorSyncCMMRef](colorsynccmm.md): A reference to a Color Management Module (CMM).
- [ColorSyncCMMCreate](colorsynccmmcreate%28__%29.md): Creates a CMM object from a CMM bundle.
- [ColorSyncCMMCopyCMMIdentifier](colorsynccmmcopycmmidentifier%28__%29.md): Copies the identifier of a CMM.
- [ColorSyncCMMGetBundle](colorsynccmmgetbundle%28__%29.md): Returns the bundle associated with a CMM.
- [ColorSyncCMMGetTypeID](colorsynccmmgettypeid%28%29.md): Returns the `CFTypeID` for `ColorSyncCMM`s.
- [ColorSyncIterateInstalledCMMs](colorsynciterateinstalledcmms%28____%29.md): Iterates over the installed CMMs, invoking a callback for each one.
