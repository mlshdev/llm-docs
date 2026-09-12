> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsynccomponentcoefficients](https://developer.apple.com/documentation/colorsync/kcolorsynccomponentcoefficients)

# kColorSyncComponentCoefficients (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Sub-dictionary of custom linear-combination coefficients for free-style component mixing.

## Declaration

```swift
var kColorSyncComponentCoefficients: Unmanaged<CFString>
```

<a id="discussion"></a>

## Discussion

Each present key contributes its value as a weight in: `signal = R*red + G*green + B*blue + MAX*maxRGB + MIN*minRGB + C*component`. Only present when `kColorSyncComponentMix == 3`.

## See Also

### Weighting component-mix coefficients

- [kColorSyncCoefficientBlue](kcolorsynccoefficientblue.md): Weight for the blue channel in the free-style component mixing sum.
- [kColorSyncCoefficientComponent](kcolorsynccoefficientcomponent.md): Weight for the ‘component’ term in the free-style component mixing sum.
- [kColorSyncCoefficientGreen](kcolorsynccoefficientgreen.md): Weight for the green channel in the free-style component mixing sum.
- [kColorSyncCoefficientMaxRGB](kcolorsynccoefficientmaxrgb.md): Weight for the MAX(R,G,B) term in the free-style component mixing sum.
- [kColorSyncCoefficientMinRGB](kcolorsynccoefficientminrgb.md): Weight for the MIN(R,G,B) term in the free-style component mixing sum.
- [kColorSyncCoefficientRed](kcolorsynccoefficientred.md): Weight for the red channel in the free-style component mixing sum.

# kColorSyncComponentCoefficients (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Sub-dictionary of custom linear-combination coefficients for free-style component mixing.

## Declaration

```objectivec
extern CFStringRef kColorSyncComponentCoefficients;
```

<a id="discussion"></a>

## Discussion

Each present key contributes its value as a weight in: `signal = R*red + G*green + B*blue + MAX*maxRGB + MIN*minRGB + C*component`. Only present when `kColorSyncComponentMix == 3`.

## See Also

### Weighting component-mix coefficients

- [kColorSyncCoefficientBlue](kcolorsynccoefficientblue.md): Weight for the blue channel in the free-style component mixing sum.
- [kColorSyncCoefficientComponent](kcolorsynccoefficientcomponent.md): Weight for the ‘component’ term in the free-style component mixing sum.
- [kColorSyncCoefficientGreen](kcolorsynccoefficientgreen.md): Weight for the green channel in the free-style component mixing sum.
- [kColorSyncCoefficientMaxRGB](kcolorsynccoefficientmaxrgb.md): Weight for the MAX(R,G,B) term in the free-style component mixing sum.
- [kColorSyncCoefficientMinRGB](kcolorsynccoefficientminrgb.md): Weight for the MIN(R,G,B) term in the free-style component mixing sum.
- [kColorSyncCoefficientRed](kcolorsynccoefficientred.md): Weight for the red channel in the free-style component mixing sum.
