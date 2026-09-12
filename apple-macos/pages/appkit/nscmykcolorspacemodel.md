> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscmykcolorspacemodel](https://developer.apple.com/documentation/appkit/nscmykcolorspacemodel)

# NSCMYKColorSpaceModel

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.0+ (deprecated in 10.14)

The CYMK (cyan, yellow, magenta, black) color-space model.

> Use [NSColorSpaceModelCMYK](nscolorspace/model/cmyk.md) instead.

## Declaration

```objectivec
static const NSColorSpaceModel NSCMYKColorSpaceModel;
```

<a id="Discussion"></a>

## Discussion

Can refer to both device-dependent and generic color space variants.

## See Also

### Deprecated Constants

- [NSUnknownColorSpaceModel](nsunknowncolorspacemodel.md): Deprecated. An unknown color-space model.
- [NSGrayColorSpaceModel](nsgraycolorspacemodel.md): Deprecated. The grayscale color-space model.
- [NSRGBColorSpaceModel](nsrgbcolorspacemodel.md): Deprecated. The RGB (red green blue) color-space model.
- [NSLABColorSpaceModel](nslabcolorspacemodel.md): Deprecated. The L\*a\*b\* device-independent color-space model, which represents colors relative to a reference white point.
- [NSDeviceNColorSpaceModel](nsdevicencolorspacemodel.md): Deprecated. DeviceN is a color-space model from Adobe Systems, Inc. used in PostScript and PDF color specification.
- [NSIndexedColorSpaceModel](nsindexedcolorspacemodel.md): Deprecated. An indexed color space, which identifies specified discrete colors in a color list by index number. An indexed color value (a color specification in indexed color space) consists of an index value that refers to a color in a color list.
- [NSPatternColorSpaceModel](nspatterncolorspacemodel.md): Deprecated. Identifies a pattern color space, which is simply an image that is repeated over and over again in a tiled pattern.
