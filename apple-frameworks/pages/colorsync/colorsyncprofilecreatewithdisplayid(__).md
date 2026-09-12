> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecreatewithdisplayid(_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilecreatewithdisplayid(_:))

# ColorSyncProfileCreateWithDisplayID(\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

Creates a profile for the specified display.

## Declaration

```swift
func ColorSyncProfileCreateWithDisplayID(_ displayID: UInt32) -> Unmanaged<ColorSyncProfile>?
```

## Parameters

- `displayID`: The system-wide unique display ID (defined by IOKit); pass `0` for the main display.

<a id="return-value"></a>

## Return Value

A new profile, or `NULL` in case of failure.

## See Also

### Reading display gamma and profiles

- [ColorSyncProfileEstimateGammaWithDisplayID(\_:\_:)](colorsyncprofileestimategammawithdisplayid%28____%29.md): Estimates the gamma of the profile for the specified display.
- [ColorSyncProfileGetDisplayTransferFormulaFromVCGT(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](colorsyncprofilegetdisplaytransferformulafromvcgt%28____________________%29.md): Converts the profile’s `vcgt` tag to formula components used by `CGSetDisplayTransferByFormula`.
- [ColorSyncProfileCreateDisplayTransferTablesFromVCGT(\_:\_:)](colorsyncprofilecreatedisplaytransfertablesfromvcgt%28____%29.md): Creates display transfer tables from the profile’s `vcgt` tag.

# ColorSyncProfileCreateWithDisplayID (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** macOS 10.4+

Creates a profile for the specified display.

## Declaration

```objectivec
extern ColorSyncProfileRefColorSyncProfileCreateWithDisplayID(uint32_t displayID);
```

## Parameters

- `displayID`: The system-wide unique display ID (defined by IOKit); pass `0` for the main display.

<a id="return-value"></a>

## Return Value

A new profile, or `NULL` in case of failure.

## See Also

### Reading display gamma and profiles

- [ColorSyncProfileEstimateGammaWithDisplayID](colorsyncprofileestimategammawithdisplayid%28____%29.md): Estimates the gamma of the profile for the specified display.
- [ColorSyncProfileGetDisplayTransferFormulaFromVCGT](colorsyncprofilegetdisplaytransferformulafromvcgt%28____________________%29.md): Converts the profile’s `vcgt` tag to formula components used by `CGSetDisplayTransferByFormula`.
- [ColorSyncProfileCreateDisplayTransferTablesFromVCGT](colorsyncprofilecreatedisplaytransfertablesfromvcgt%28____%29.md): Creates display transfer tables from the profile’s `vcgt` tag.
