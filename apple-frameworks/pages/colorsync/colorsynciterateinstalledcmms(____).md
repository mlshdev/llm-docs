> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsynciterateinstalledcmms(_:_:)](https://developer.apple.com/documentation/colorsync/colorsynciterateinstalledcmms(_:_:))

# ColorSyncIterateInstalledCMMs(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

Iterates over the installed CMMs, invoking a callback for each one.

## Declaration

```swift
func ColorSyncIterateInstalledCMMs(_ callBack: ColorSyncCMMIterateCallback!, _ userInfo: UnsafeMutableRawPointer?)
```

## Parameters

- `callBack`: A pointer to a client-provided function.
- `userInfo`: A pointer to the user info that the framework passes to the callback. Optional.

## See Also

### Working with CMMs

- [ColorSyncCMM](colorsynccmm.md): A reference to a Color Management Module (CMM).
- [ColorSyncCMMCreate(\_:)](colorsynccmmcreate%28__%29.md): Creates a CMM object from a CMM bundle.
- [ColorSyncCMMCopyCMMIdentifier(\_:)](colorsynccmmcopycmmidentifier%28__%29.md): Copies the identifier of a CMM.
- [ColorSyncCMMCopyLocalizedName(\_:)](colorsynccmmcopylocalizedname%28__%29.md): Copies the localized name of a CMM.
- [ColorSyncCMMGetBundle(\_:)](colorsynccmmgetbundle%28__%29.md): Returns the bundle associated with a CMM.
- [ColorSyncCMMGetTypeID()](colorsynccmmgettypeid%28%29.md): Returns the `CFTypeID` for `ColorSyncCMM`s.

# ColorSyncIterateInstalledCMMs (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** macOS 10.4+

Iterates over the installed CMMs, invoking a callback for each one.

## Declaration

```objectivec
extern void ColorSyncIterateInstalledCMMs(ColorSyncCMMIterateCallback callBack, void *userInfo);
```

## Parameters

- `callBack`: A pointer to a client-provided function.
- `userInfo`: A pointer to the user info that the framework passes to the callback. Optional.

## See Also

### Working with CMMs

- [ColorSyncCMMRef](colorsynccmm.md): A reference to a Color Management Module (CMM).
- [ColorSyncCMMCreate](colorsynccmmcreate%28__%29.md): Creates a CMM object from a CMM bundle.
- [ColorSyncCMMCopyCMMIdentifier](colorsynccmmcopycmmidentifier%28__%29.md): Copies the identifier of a CMM.
- [ColorSyncCMMCopyLocalizedName](colorsynccmmcopylocalizedname%28__%29.md): Copies the localized name of a CMM.
- [ColorSyncCMMGetBundle](colorsynccmmgetbundle%28__%29.md): Returns the bundle associated with a CMM.
- [ColorSyncCMMGetTypeID](colorsynccmmgettypeid%28%29.md): Returns the `CFTypeID` for `ColorSyncCMM`s.
