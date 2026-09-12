> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofileestimategammawithdisplayid(_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofileestimategammawithdisplayid(_:_:))

# ColorSyncProfileEstimateGammaWithDisplayID(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

Estimates the gamma of the profile for the specified display.

## Declaration

```swift
func ColorSyncProfileEstimateGammaWithDisplayID(_ displayID: Int32, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Float
```

## Parameters

- `displayID`: The system-wide unique display ID (defined by IOKit).
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

A non-zero value on success, or `0.0` in case of error.

## See Also

### Reading display gamma and profiles

- [ColorSyncProfileCreateWithDisplayID(\_:)](colorsyncprofilecreatewithdisplayid%28__%29.md): Creates a profile for the specified display.
- [ColorSyncProfileGetDisplayTransferFormulaFromVCGT(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](colorsyncprofilegetdisplaytransferformulafromvcgt%28____________________%29.md): Converts the profile’s `vcgt` tag to formula components used by `CGSetDisplayTransferByFormula`.
- [ColorSyncProfileCreateDisplayTransferTablesFromVCGT(\_:\_:)](colorsyncprofilecreatedisplaytransfertablesfromvcgt%28____%29.md): Creates display transfer tables from the profile’s `vcgt` tag.

# ColorSyncProfileEstimateGammaWithDisplayID (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** macOS 10.4+

Estimates the gamma of the profile for the specified display.

## Declaration

```objectivec
extern float ColorSyncProfileEstimateGammaWithDisplayID(const int32_t displayID, CFErrorRef*error);
```

## Parameters

- `displayID`: The system-wide unique display ID (defined by IOKit).
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

A non-zero value on success, or `0.0` in case of error.

## See Also

### Reading display gamma and profiles

- [ColorSyncProfileCreateWithDisplayID](colorsyncprofilecreatewithdisplayid%28__%29.md): Creates a profile for the specified display.
- [ColorSyncProfileGetDisplayTransferFormulaFromVCGT](colorsyncprofilegetdisplaytransferformulafromvcgt%28____________________%29.md): Converts the profile’s `vcgt` tag to formula components used by `CGSetDisplayTransferByFormula`.
- [ColorSyncProfileCreateDisplayTransferTablesFromVCGT](colorsyncprofilecreatedisplaytransfertablesfromvcgt%28____%29.md): Creates display transfer tables from the profile’s `vcgt` tag.
