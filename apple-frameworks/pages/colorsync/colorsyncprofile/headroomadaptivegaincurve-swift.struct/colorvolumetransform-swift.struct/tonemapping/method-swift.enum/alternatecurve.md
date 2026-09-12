> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/colorvolumetransform-swift.struct/tonemapping/method-swift.enum/alternatecurve](https://developer.apple.com/documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/colorvolumetransform-swift.struct/tonemapping/method-swift.enum/alternatecurve)

# ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping.Method.AlternateCurve

**Framework:** ColorSync  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An alternate gain curve that targets a specific display headroom level.

## Declaration

```swift
struct AlternateCurve
```

## Topics

### Structures

- [ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping.Method.AlternateCurve.ControlPoints](alternatecurve/controlpoints-swift.struct.md): The spline control points that define a gain curve.

### Initializers

- [init(headroomStops:componentMix:controlPoints:)](alternatecurve/init%28headroomstops_componentmix_controlpoints_%29.md): Creates an alternate gain curve.

### Instance Properties

- [componentMix](alternatecurve/componentmix-swift.property.md): How the framework derives the scalar driving signal from each RGB pixel.
- [controlPoints](alternatecurve/controlpoints-swift.property.md): Spline control points defining a gain curve.
- [headroomStops](alternatecurve/headroomstops.md): Alternate headroom in stops above reference white.

### Enumerations

- [ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping.Method.AlternateCurve.ComponentMix](alternatecurve/componentmix-swift.enum.md): How the framework derives the scalar driving signal for a gain curve from an RGB pixel.
