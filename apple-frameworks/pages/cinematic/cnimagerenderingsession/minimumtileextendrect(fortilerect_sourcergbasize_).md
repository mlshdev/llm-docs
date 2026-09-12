> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnimagerenderingsession/minimumtileextendrect(fortilerect:sourcergbasize:)](https://developer.apple.com/documentation/cinematic/cnimagerenderingsession/minimumtileextendrect(fortilerect:sourcergbasize:))

# minimumTileExtendRect(forTileRect:sourceRGBASize:) (Swift)

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Returns the minimum source rect that must be sampled to render tileRect without edge artifacts.

## Declaration

```swift
class func minimumTileExtendRect(forTileRect tileRect: CGRect, sourceRGBASize: CGSize) -> CGRect
```

## Parameters

- `tileRect`: The destination tile rect in full-image pixel coordinates.
- `sourceRGBASize`: The dimensions of the full (un-tiled) source image.

<a id="return-value"></a>

## Return Value

A rect (in full-image pixel coordinates) covering the minimum required source region, clamped to the image bounds.

<a id="discussion"></a>

## Discussion

When applying a bokeh blur near a tile boundary, the renderer needs pixels from outside the destination tile. This method computes how far that border region extends. Pass the returned rect’s origin as tileExtendOffset and allocate sourceTileRGBA with the returned rect’s size.

# minimumTileExtendRectForTileRect:sourceRGBASize: (Objective-C)

**Framework:** Cinematic  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Returns the minimum source rect that must be sampled to render tileRect without edge artifacts.

## Declaration

```objectivec
+ (CGRect) minimumTileExtendRectForTileRect:(CGRect) tileRect sourceRGBASize:(CGSize) sourceRGBASize;
```

## Parameters

- `tileRect`: The destination tile rect in full-image pixel coordinates.
- `sourceRGBASize`: The dimensions of the full (un-tiled) source image.

<a id="return-value"></a>

## Return Value

A rect (in full-image pixel coordinates) covering the minimum required source region, clamped to the image bounds.

<a id="discussion"></a>

## Discussion

When applying a bokeh blur near a tile boundary, the renderer needs pixels from outside the destination tile. This method computes how far that border region extends. Pass the returned rect’s origin as tileExtendOffset and allocate sourceTileRGBA with the returned rect’s size.
