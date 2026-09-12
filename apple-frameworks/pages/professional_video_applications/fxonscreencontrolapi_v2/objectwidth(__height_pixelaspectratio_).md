> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxonscreencontrolapi_v2/objectwidth(_:height:pixelaspectratio:)](https://developer.apple.com/documentation/professional_video_applications/fxonscreencontrolapi_v2/objectwidth(_:height:pixelaspectratio:))

# objectWidth(\_:height:pixelAspectRatio:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 3.1+

Returns the width, height, and pixel aspect ratio of the object for which the on-screen control is applied.

## Declaration

```swift
func objectWidth(_ outputWidth: UnsafeMutablePointer<Int>!, height outputHeight: UnsafeMutablePointer<Int>!, pixelAspectRatio: UnsafeMutablePointer<Double>!)
```

## Parameters

- `outputWidth`: A pointer to the width of the object.
- `outputHeight`: A pointer to the height of the object.
- `pixelAspectRatio`: A pointer to the pixel aspect ratio of the object.

## See Also

### Input and Output Item Geometry

- [inputWidth(\_:height:pixelAspectRatio:)](inputwidth%28__height_pixelaspectratio_%29.md): Returns the width, height, and pixel aspect ratio of the input to the filter or transition for which the on-screen control is applied.
- [inputBounds()](inputbounds%28%29.md): Returns the bounds of the input to the filter or transition.

# objectWidth:height:pixelAspectRatio: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the width, height, and pixel aspect ratio of the object for which the on-screen control is applied.

## Declaration

```objectivec
- (void) objectWidth:(NSUInteger *) outputWidth height:(NSUInteger *) outputHeight pixelAspectRatio:(double *) pixelAspectRatio;
```

## Parameters

- `outputWidth`: A pointer to the width of the object.
- `outputHeight`: A pointer to the height of the object.
- `pixelAspectRatio`: A pointer to the pixel aspect ratio of the object.

## See Also

### Input and Output Item Geometry

- [inputWidth:height:pixelAspectRatio:](inputwidth%28__height_pixelaspectratio_%29.md): Returns the width, height, and pixel aspect ratio of the input to the filter or transition for which the on-screen control is applied.
- [inputBounds](inputbounds%28%29.md): Returns the bounds of the input to the filter or transition.
