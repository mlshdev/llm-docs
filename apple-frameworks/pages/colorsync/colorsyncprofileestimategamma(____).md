> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofileestimategamma(_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofileestimategamma(_:_:))

# ColorSyncProfileEstimateGamma(\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Estimates the gamma of a profile.

## Declaration

```swift
func ColorSyncProfileEstimateGamma(_ prof: ColorSyncProfile!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Float
```

## Parameters

- `prof`: The profile to perform estimation on.
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

A non-zero value on success, or `0.0` in case of error.

## See Also

### Inspecting color characteristics

- [ColorSyncProfileIsWideGamut(\_:)](colorsyncprofileiswidegamut%28__%29.md): Returns a Boolean value indicating whether the display profile describes a wide-gamut color space.
- [ColorSyncProfileIsPQBased(\_:)](colorsyncprofileispqbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 PQ transfer functions.
- [ColorSyncProfileIsHLGBased(\_:)](colorsyncprofileishlgbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 HLG transfer functions.
- [ColorSyncProfileIsMatrixBased(\_:)](colorsyncprofileismatrixbased%28__%29.md): Returns a Boolean value indicating whether the profile is matrix-based.
- [ColorSyncProfileVerify(\_:\_:\_:)](colorsyncprofileverify%28______%29.md): Verifies whether a profile can be used.

# ColorSyncProfileEstimateGamma (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · macOS 10.4+ · tvOS 26.1+ · visionOS 26.0+ · watchOS 26.0+

Estimates the gamma of a profile.

## Declaration

```objectivec
extern float ColorSyncProfileEstimateGamma(ColorSyncProfileRef prof, CFErrorRef*error);
```

## Parameters

- `prof`: The profile to perform estimation on.
- `error`: On failure, a pointer to an error describing the problem. Optional.

<a id="return-value"></a>

## Return Value

A non-zero value on success, or `0.0` in case of error.

## See Also

### Inspecting color characteristics

- [ColorSyncProfileIsWideGamut](colorsyncprofileiswidegamut%28__%29.md): Returns a Boolean value indicating whether the display profile describes a wide-gamut color space.
- [ColorSyncProfileIsPQBased](colorsyncprofileispqbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 PQ transfer functions.
- [ColorSyncProfileIsHLGBased](colorsyncprofileishlgbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 HLG transfer functions.
- [ColorSyncProfileIsMatrixBased](colorsyncprofileismatrixbased%28__%29.md): Returns a Boolean value indicating whether the profile is matrix-based.
- [ColorSyncProfileVerify](colorsyncprofileverify%28______%29.md): Verifies whether a profile can be used.
