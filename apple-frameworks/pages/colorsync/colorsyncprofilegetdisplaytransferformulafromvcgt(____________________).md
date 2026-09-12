> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilegetdisplaytransferformulafromvcgt(_:_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilegetdisplaytransferformulafromvcgt(_:_:_:_:_:_:_:_:_:_:))

# ColorSyncProfileGetDisplayTransferFormulaFromVCGT(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.13+

Converts the profile’s `vcgt` tag to formula components used by `CGSetDisplayTransferByFormula`.

## Declaration

```swift
func ColorSyncProfileGetDisplayTransferFormulaFromVCGT(_ profile: ColorSyncProfile!, _ redMin: UnsafeMutablePointer<Float>!, _ redMax: UnsafeMutablePointer<Float>!, _ redGamma: UnsafeMutablePointer<Float>!, _ greenMin: UnsafeMutablePointer<Float>!, _ greenMax: UnsafeMutablePointer<Float>!, _ greenGamma: UnsafeMutablePointer<Float>!, _ blueMin: UnsafeMutablePointer<Float>!, _ blueMax: UnsafeMutablePointer<Float>!, _ blueGamma: UnsafeMutablePointer<Float>!) -> Bool
```

<a id="discussion"></a>

## Discussion

The function performs this conversion only if a `vcgt` tag exists in the profile and the conversion is possible.

## See Also

### Reading display gamma and profiles

- [ColorSyncProfileCreateWithDisplayID(\_:)](colorsyncprofilecreatewithdisplayid%28__%29.md): Creates a profile for the specified display.
- [ColorSyncProfileEstimateGammaWithDisplayID(\_:\_:)](colorsyncprofileestimategammawithdisplayid%28____%29.md): Estimates the gamma of the profile for the specified display.
- [ColorSyncProfileCreateDisplayTransferTablesFromVCGT(\_:\_:)](colorsyncprofilecreatedisplaytransfertablesfromvcgt%28____%29.md): Creates display transfer tables from the profile’s `vcgt` tag.

# ColorSyncProfileGetDisplayTransferFormulaFromVCGT (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** macOS 10.4+

Converts the profile’s `vcgt` tag to formula components used by `CGSetDisplayTransferByFormula`.

## Declaration

```objectivec
extern bool ColorSyncProfileGetDisplayTransferFormulaFromVCGT(ColorSyncProfileRef profile, float *redMin, float *redMax, float *redGamma, float *greenMin, float *greenMax, float *greenGamma, float *blueMin, float *blueMax, float *blueGamma);
```

<a id="discussion"></a>

## Discussion

The function performs this conversion only if a `vcgt` tag exists in the profile and the conversion is possible.

## See Also

### Reading display gamma and profiles

- [ColorSyncProfileCreateWithDisplayID](colorsyncprofilecreatewithdisplayid%28__%29.md): Creates a profile for the specified display.
- [ColorSyncProfileEstimateGammaWithDisplayID](colorsyncprofileestimategammawithdisplayid%28____%29.md): Estimates the gamma of the profile for the specified display.
- [ColorSyncProfileCreateDisplayTransferTablesFromVCGT](colorsyncprofilecreatedisplaytransfertablesfromvcgt%28____%29.md): Creates display transfer tables from the profile’s `vcgt` tag.
