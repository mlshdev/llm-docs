> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilecontainsheadroomadaptivegaincurve(_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilecontainsheadroomadaptivegaincurve(_:))

# ColorSyncProfileContainsHeadroomAdaptiveGainCurve(\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns whether a profile contains a Headroom Adaptive Gain Curve tag.

## Declaration

```swift
func ColorSyncProfileContainsHeadroomAdaptiveGainCurve(_ profile: ColorSyncProfile) -> Bool
```

## Parameters

- `profile`: The profile to test.

<a id="return-value"></a>

## Return Value

`true` if the profile contains an HAGC tag; otherwise, `false`.

# ColorSyncProfileContainsHeadroomAdaptiveGainCurve (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns whether a profile contains a Headroom Adaptive Gain Curve tag.

## Declaration

```objectivec
extern bool ColorSyncProfileContainsHeadroomAdaptiveGainCurve(ColorSyncProfileRef profile);
```

## Parameters

- `profile`: The profile to test.

<a id="return-value"></a>

## Return Value

`true` if the profile contains an HAGC tag; otherwise, `false`.
