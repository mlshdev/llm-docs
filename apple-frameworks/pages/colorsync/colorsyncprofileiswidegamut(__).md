> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofileiswidegamut(_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofileiswidegamut(_:))

# ColorSyncProfileIsWideGamut(\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value indicating whether the display profile describes a wide-gamut color space.

## Declaration

```swift
func ColorSyncProfileIsWideGamut(_: ColorSyncProfile!) -> Bool
```

## See Also

### Inspecting color characteristics

- [ColorSyncProfileIsPQBased(\_:)](colorsyncprofileispqbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 PQ transfer functions.
- [ColorSyncProfileIsHLGBased(\_:)](colorsyncprofileishlgbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 HLG transfer functions.
- [ColorSyncProfileIsMatrixBased(\_:)](colorsyncprofileismatrixbased%28__%29.md): Returns a Boolean value indicating whether the profile is matrix-based.
- [ColorSyncProfileEstimateGamma(\_:\_:)](colorsyncprofileestimategamma%28____%29.md): Estimates the gamma of a profile.
- [ColorSyncProfileVerify(\_:\_:\_:)](colorsyncprofileverify%28______%29.md): Verifies whether a profile can be used.

# ColorSyncProfileIsWideGamut (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value indicating whether the display profile describes a wide-gamut color space.

## Declaration

```objectivec
extern bool ColorSyncProfileIsWideGamut(ColorSyncProfileRef );
```

## See Also

### Inspecting color characteristics

- [ColorSyncProfileIsPQBased](colorsyncprofileispqbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 PQ transfer functions.
- [ColorSyncProfileIsHLGBased](colorsyncprofileishlgbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 HLG transfer functions.
- [ColorSyncProfileIsMatrixBased](colorsyncprofileismatrixbased%28__%29.md): Returns a Boolean value indicating whether the profile is matrix-based.
- [ColorSyncProfileEstimateGamma](colorsyncprofileestimategamma%28____%29.md): Estimates the gamma of a profile.
- [ColorSyncProfileVerify](colorsyncprofileverify%28______%29.md): Verifies whether a profile can be used.
