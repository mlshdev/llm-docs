> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofileverify(_:_:_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofileverify(_:_:_:))

# ColorSyncProfileVerify(\_:\_:\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Verifies whether a profile can be used.

## Declaration

```swift
func ColorSyncProfileVerify(_ prof: ColorSyncProfile!, _ errors: UnsafeMutablePointer<Unmanaged<CFError>?>?, _ warnings: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Bool
```

## Parameters

- `prof`: The profile to verify.
- `errors`: Returns error strings in case problems are found that would prevent use of the profile.
- `warnings`: Returns warning strings indicating problems due to lack of conformance with the ICC specification, but not preventing use of the profile.

<a id="return-value"></a>

## Return Value

`true` if the profile can be used; otherwise, `false`.

## See Also

### Inspecting color characteristics

- [ColorSyncProfileIsWideGamut(\_:)](colorsyncprofileiswidegamut%28__%29.md): Returns a Boolean value indicating whether the display profile describes a wide-gamut color space.
- [ColorSyncProfileIsPQBased(\_:)](colorsyncprofileispqbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 PQ transfer functions.
- [ColorSyncProfileIsHLGBased(\_:)](colorsyncprofileishlgbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 HLG transfer functions.
- [ColorSyncProfileIsMatrixBased(\_:)](colorsyncprofileismatrixbased%28__%29.md): Returns a Boolean value indicating whether the profile is matrix-based.
- [ColorSyncProfileEstimateGamma(\_:\_:)](colorsyncprofileestimategamma%28____%29.md): Estimates the gamma of a profile.

# ColorSyncProfileVerify (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Verifies whether a profile can be used.

## Declaration

```objectivec
extern bool ColorSyncProfileVerify(ColorSyncProfileRef prof, CFErrorRef*errors, CFErrorRef*warnings);
```

## Parameters

- `prof`: The profile to verify.
- `errors`: Returns error strings in case problems are found that would prevent use of the profile.
- `warnings`: Returns warning strings indicating problems due to lack of conformance with the ICC specification, but not preventing use of the profile.

<a id="return-value"></a>

## Return Value

`true` if the profile can be used; otherwise, `false`.

## See Also

### Inspecting color characteristics

- [ColorSyncProfileIsWideGamut](colorsyncprofileiswidegamut%28__%29.md): Returns a Boolean value indicating whether the display profile describes a wide-gamut color space.
- [ColorSyncProfileIsPQBased](colorsyncprofileispqbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 PQ transfer functions.
- [ColorSyncProfileIsHLGBased](colorsyncprofileishlgbased%28__%29.md): Returns a Boolean value indicating whether the profile uses ITU BT.2100 HLG transfer functions.
- [ColorSyncProfileIsMatrixBased](colorsyncprofileismatrixbased%28__%29.md): Returns a Boolean value indicating whether the profile is matrix-based.
- [ColorSyncProfileEstimateGamma](colorsyncprofileestimategamma%28____%29.md): Estimates the gamma of a profile.
