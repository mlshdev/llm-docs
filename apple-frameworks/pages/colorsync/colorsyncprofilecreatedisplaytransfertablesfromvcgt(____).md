> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecreatedisplaytransfertablesfromvcgt(_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilecreatedisplaytransfertablesfromvcgt(_:_:))

# ColorSyncProfileCreateDisplayTransferTablesFromVCGT(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

Creates display transfer tables from the profile’s `vcgt` tag.

## Declaration

```swift
func ColorSyncProfileCreateDisplayTransferTablesFromVCGT(_ profile: ColorSyncProfile!, _ nSamplesPerChannel: UnsafeMutablePointer<Int>!) -> Unmanaged<CFData>?
```

<a id="discussion"></a>

## Discussion

Creates three tables of floats (a red table, a green table, and a blue table), each of size `nSamplesPerChannel`, packed into contiguous memory contained in the returned `CFDataRef`, from the `vcgt` tag of the profile (if a `vcgt` tag exists in the profile). `CGSetDisplayTransferByTable` uses these tables.

## See Also

### Reading display gamma and profiles

- [ColorSyncProfileCreateWithDisplayID(\_:)](colorsyncprofilecreatewithdisplayid%28__%29.md): Creates a profile for the specified display.
- [ColorSyncProfileEstimateGammaWithDisplayID(\_:\_:)](colorsyncprofileestimategammawithdisplayid%28____%29.md): Estimates the gamma of the profile for the specified display.
- [ColorSyncProfileGetDisplayTransferFormulaFromVCGT(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](colorsyncprofilegetdisplaytransferformulafromvcgt%28____________________%29.md): Converts the profile’s `vcgt` tag to formula components used by `CGSetDisplayTransferByFormula`.

# ColorSyncProfileCreateDisplayTransferTablesFromVCGT (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** macOS 10.4+

Creates display transfer tables from the profile’s `vcgt` tag.

## Declaration

```objectivec
extern CFDataRefColorSyncProfileCreateDisplayTransferTablesFromVCGT(ColorSyncProfileRef profile, size_t *nSamplesPerChannel);
```

<a id="discussion"></a>

## Discussion

Creates three tables of floats (a red table, a green table, and a blue table), each of size `nSamplesPerChannel`, packed into contiguous memory contained in the returned `CFDataRef`, from the `vcgt` tag of the profile (if a `vcgt` tag exists in the profile). `CGSetDisplayTransferByTable` uses these tables.

## See Also

### Reading display gamma and profiles

- [ColorSyncProfileCreateWithDisplayID](colorsyncprofilecreatewithdisplayid%28__%29.md): Creates a profile for the specified display.
- [ColorSyncProfileEstimateGammaWithDisplayID](colorsyncprofileestimategammawithdisplayid%28____%29.md): Estimates the gamma of the profile for the specified display.
- [ColorSyncProfileGetDisplayTransferFormulaFromVCGT](colorsyncprofilegetdisplaytransferformulafromvcgt%28____________________%29.md): Converts the profile’s `vcgt` tag to formula components used by `CGSetDisplayTransferByFormula`.
