> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/colorvolumetransform-swift.struct/tonemapping/method-swift.enum/adaptivegaincurve](https://developer.apple.com/documentation/colorsync/colorsyncprofile/headroomadaptivegaincurve-swift.struct/colorvolumetransform-swift.struct/tonemapping/method-swift.enum/adaptivegaincurve)

# ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping.Method.AdaptiveGainCurve

**Framework:** ColorSync  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A set of headroom-adaptive gain curves and the chromaticities used to drive them.

## Declaration

```swift
struct AdaptiveGainCurve
```

<a id="overview"></a>

## Overview

Each [ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping.Method.AlternateCurve](alternatecurve.md) targets a different display headroom; the renderer selects the curve closest to the display’s actual headroom.

## Topics

### Initializers

- [init(chromaticities:alternateCurves:)](adaptivegaincurve/init%28chromaticities_alternatecurves_%29.md): Creates an adaptive gain curve.

### Instance Properties

- [alternateCurves](adaptivegaincurve/alternatecurves.md): The alternate curves, each targeting a different display headroom. Limited to four entries.
- [chromaticities](adaptivegaincurve/chromaticities.md): The color space chromaticities used to derive the curve’s driving signal. Defaults to [ColorSyncProfile.HeadroomAdaptiveGainCurve.ColorVolumeTransform.ToneMapping.Method.Chromaticities.bt709](chromaticities/bt709.md).
