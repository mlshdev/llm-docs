> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofileismatrixbased(_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofileismatrixbased(_:))

# ColorSyncProfileIsMatrixBased(\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value indicating whether the profile is matrix-based.

## Declaration

```swift
func ColorSyncProfileIsMatrixBased(_: ColorSyncProfile!) -> Bool
```

## See Also

### Inspecting color characteristics

- [ColorSyncProfileIsWideGamut(\_:)](colorsyncprofileiswidegamut%28__%29.md): Returns a Boolean value indicating whether the display profile describes a wide-gamut color space.
- [ColorSyncProfileIsPQBased(\_:)](colorsyncprofileispqbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 PQ transfer functions.
- [ColorSyncProfileIsHLGBased(\_:)](colorsyncprofileishlgbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 HLG transfer functions.
- [ColorSyncProfileEstimateGamma(\_:\_:)](colorsyncprofileestimategamma%28____%29.md): Estimates the gamma of a profile.
- [ColorSyncProfileVerify(\_:\_:\_:)](colorsyncprofileverify%28______%29.md): Verifies whether a profile can be used.

# ColorSyncProfileIsMatrixBased (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns a Boolean value indicating whether the profile is matrix-based.

## Declaration

```objectivec
extern bool ColorSyncProfileIsMatrixBased(ColorSyncProfileRef );
```

## See Also

### Inspecting color characteristics

- [ColorSyncProfileIsWideGamut](colorsyncprofileiswidegamut%28__%29.md): Returns a Boolean value indicating whether the display profile describes a wide-gamut color space.
- [ColorSyncProfileIsPQBased](colorsyncprofileispqbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 PQ transfer functions.
- [ColorSyncProfileIsHLGBased](colorsyncprofileishlgbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 HLG transfer functions.
- [ColorSyncProfileEstimateGamma](colorsyncprofileestimategamma%28____%29.md): Estimates the gamma of a profile.
- [ColorSyncProfileVerify](colorsyncprofileverify%28______%29.md): Verifies whether a profile can be used.
