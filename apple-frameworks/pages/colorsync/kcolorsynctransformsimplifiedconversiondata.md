> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsynctransformsimplifiedconversiondata](https://developer.apple.com/documentation/colorsync/kcolorsynctransformsimplifiedconversiondata)

# kColorSyncTransformSimplifiedConversionData (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A key for the simplified code fragment, collapsing the full conversion into one multi-dimensional table.

## Declaration

```swift
var kColorSyncTransformSimplifiedConversionData: Unmanaged<CFString>!
```

## See Also

### Reading conversion data sets

- [kColorSyncTransformFullConversionData](kcolorsynctransformfullconversiondata.md): A key for the full-conversion code fragment, containing all non-`NULL` components from the profile sequence.
- [kColorSyncTransformParametricConversionData](kcolorsynctransformparametricconversiondata.md): A key for the parametric code fragment, consisting only of parametric curves, matrices, and BPC components.
- [kColorSyncConversionBPC](kcolorsyncconversionbpc.md): A key for a black point compensation component, represented as a `CFArray` of `Float32` `CFNumber`s.
- [kColorSyncFixedPointRange](kcolorsyncfixedpointrange.md): A key for the fixed-point range of the conversion data.

# kColorSyncTransformSimplifiedConversionData (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A key for the simplified code fragment, collapsing the full conversion into one multi-dimensional table.

## Declaration

```objectivec
extern CFStringRef kColorSyncTransformSimplifiedConversionData;
```

## See Also

### Reading conversion data sets

- [kColorSyncTransformFullConversionData](kcolorsynctransformfullconversiondata.md): A key for the full-conversion code fragment, containing all non-`NULL` components from the profile sequence.
- [kColorSyncTransformParametricConversionData](kcolorsynctransformparametricconversiondata.md): A key for the parametric code fragment, consisting only of parametric curves, matrices, and BPC components.
- [kColorSyncConversionBPC](kcolorsyncconversionbpc.md): A key for a black point compensation component, represented as a `CFArray` of `Float32` `CFNumber`s.
- [kColorSyncFixedPointRange](kcolorsyncfixedpointrange.md): A key for the fixed-point range of the conversion data.
