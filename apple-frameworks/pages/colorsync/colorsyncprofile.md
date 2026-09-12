> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofile](https://developer.apple.com/documentation/colorsync/colorsyncprofile)

# ColorSyncProfile (Swift)

**Framework:** ColorSync  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A reference to an immutable International Color Consortium (ICC) color profile.

## Declaration

```swift
class ColorSyncProfile
```

## Mentioned In

- [Authoring Headroom Adaptive Gain Curve metadata](authoring-headroom-adaptive-gain-curve-metadata.md)

## Topics

### Structures

- [ColorSyncProfile.HeadroomAdaptiveGainCurve](colorsyncprofile/headroomadaptivegaincurve-swift.struct.md): Headroom Adaptive Gain Curve metadata that describes how to tone map a profile’s HDR content to the dynamic range available on the display.
- [ColorSyncProfile.HeadroomAdaptiveGainCurveOptions](colorsyncprofile/headroomadaptivegaincurveoptions.md): Options that configure how a Headroom Adaptive Gain Curve is read from or embedded in a profile.

### Instance Properties

- [headroomAdaptiveGainCurve](colorsyncprofile/headroomadaptivegaincurve-swift.property.md): The Headroom Adaptive Gain Curve embedded in this profile, or `nil` if it carries no HAGC tag.
- [headroomAdaptiveGainCurveMetadata](colorsyncprofile/headroomadaptivegaincurvemetadata.md): The raw Headroom Adaptive Gain Curve data embedded in this profile, or `nil` if it carries no HAGC tag.

### Instance Methods

- [adding(headroomAdaptiveGainCurve:)](colorsyncprofile/adding%28headroomadaptivegaincurve_%29.md): Returns a copy of this profile with raw Headroom Adaptive Gain Curve data embedded as an HAGC tag.
- [adding(headroomAdaptiveGainCurveMetadata:options:)](colorsyncprofile/adding%28headroomadaptivegaincurvemetadata_options_%29.md): Returns a copy of this profile with raw Headroom Adaptive Gain Curve data embedded as an HAGC tag.

## Relationships

### Inherited By

- [ColorSyncMutableProfile](colorsyncmutableprofile.md)

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Profiling objects

- [ColorSyncMutableProfile](colorsyncmutableprofile.md): A reference to a mutable ICC color profile.

# ColorSyncProfileRef (Objective-C)

**Framework:** ColorSync  
**Kind:** Type Alias  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A reference to an immutable International Color Consortium (ICC) color profile.

## Declaration

```objectivec
typedef const struct ColorSyncProfile * ColorSyncProfileRef;
```

## Mentioned In

- [Authoring Headroom Adaptive Gain Curve metadata](authoring-headroom-adaptive-gain-curve-metadata.md)

## See Also

### Profiling objects

- [ColorSyncMutableProfileRef](colorsyncmutableprofile.md): A reference to a mutable ICC color profile.
