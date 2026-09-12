> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fximageorigin](https://developer.apple.com/documentation/professional_video_applications/fximageorigin)

# FxImageOrigin (Swift)

**Framework:** Professional Video Applications  
**Kind:** Type Alias  
**Availability:** FxPlug 3.1+ (deprecated in 4.0)

These constants define the orientation of an image’s coordinate system. Images in Motion have a bottom-left origin. Images in Final Cut have a top-left origin.

> Not supported in FxPlug 4. Use [FxImageTile](fximagetile.md).

## Declaration

```swift
typealias FxImageOrigin = Int
```

<a id="discussion"></a>

## Discussion

This method was introduced in FxImage class 0.0.

## Topics

### Constants

- [kFxImageOrigin_BOTTOM_LEFT](kfximageorigin_bottom_left.md): Right-handed “bottom-up” coordinate system where Y values increase upwardly.
- [kFxImageOrigin_TOP_LEFT](kfximageorigin_top_left.md): Left-handed “top-down” coordinate system where Y values increase downwardly.

## See Also

### Data Types

- [FxPathStyle](fxpathstyle.md): The style of the path, which is linear, bezier, or b-spline.
- [FxPixelTransformSupport](fxpixeltransformsupport.md): Deprecated. Constants that define the support for pixel transforms.

# FxImageOrigin (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Type Alias

These constants define the orientation of an image’s coordinate system. Images in Motion have a bottom-left origin. Images in Final Cut have a top-left origin.

> Not supported in FxPlug 4. Use [FxImageTile](fximagetile.md).

## Declaration

```objectivec
typedef NSUInteger FxImageOrigin;
```

<a id="discussion"></a>

## Discussion

This method was introduced in FxImage class 0.0.

## Topics

### Constants

- [kFxImageOrigin_BOTTOM_LEFT](kfximageorigin_bottom_left.md): Right-handed “bottom-up” coordinate system where Y values increase upwardly.
- [kFxImageOrigin_TOP_LEFT](kfximageorigin_top_left.md): Left-handed “top-down” coordinate system where Y values increase downwardly.

## See Also

### Data Types

- [FxPathStyle](fxpathstyle.md): The style of the path, which is linear, bezier, or b-spline.
- [FxPixelTransformSupport](fxpixeltransformsupport.md): Deprecated. Constants that define the support for pixel transforms.
