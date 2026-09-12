> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxrectsareequal(_:_:)](https://developer.apple.com/documentation/professional_video_applications/fxrectsareequal(_:_:))

# FxRectsAreEqual(\_:\_:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Function  
**Availability:** FxPlug 4.2.2+

Compares two rectangle structures and determines if they are equal.

## Declaration

```swift
func FxRectsAreEqual(_ thisRect: FxRect, _ thatRect: FxRect) -> Bool
```

## Parameters

- `thisRect`: An [FxRect](fxrect.md).
- `thatRect`: An [FxRect](fxrect.md).

<a id="return-value"></a>

## Return Value

A Boolean indicating if the two rectangles are equal.

## See Also

### Determining input and output bounds

- [sourceTileRect(\_:sourceImageIndex:sourceImages:destinationTileRect:destinationImage:pluginState:at:)](fxtileableeffect/sourcetilerect%28__sourceimageindex_sourceimages_destinationtilerect_destinationimage_pluginstate_at_%29.md): Calculate the input rectangle needed for the given image input and the output tile to be rendered.
- [destinationImageRect(\_:sourceImages:destinationImage:pluginState:at:)](fxtileableeffect/destinationimagerect%28__sourceimages_destinationimage_pluginstate_at_%29.md): Calculates the bounds of the output image determined by the various inputs and plug-in state at the given render time.

# FxRectsAreEqual (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Function

Compares two rectangle structures and determines if they are equal.

## Declaration

```objectivec
bool FxRectsAreEqual(FxRect thisRect, FxRect thatRect);
```

## Parameters

- `thisRect`: An [FxRect](fxrect.md).
- `thatRect`: An [FxRect](fxrect.md).

<a id="return-value"></a>

## Return Value

A Boolean indicating if the two rectangles are equal.

## See Also

### Determining input and output bounds

- [sourceTileRect:sourceImageIndex:sourceImages:destinationTileRect:destinationImage:pluginState:atTime:error:](fxtileableeffect/sourcetilerect%28__sourceimageindex_sourceimages_destinationtilerect_destinationimage_pluginstate_at_%29.md): Calculate the input rectangle needed for the given image input and the output tile to be rendered.
- [destinationImageRect:sourceImages:destinationImage:pluginState:atTime:error:](fxtileableeffect/destinationimagerect%28__sourceimages_destinationimage_pluginstate_at_%29.md): Calculates the bounds of the output image determined by the various inputs and plug-in state at the given render time.
