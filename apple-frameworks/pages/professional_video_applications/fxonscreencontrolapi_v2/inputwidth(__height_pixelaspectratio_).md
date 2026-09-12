> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxonscreencontrolapi_v2/inputwidth(_:height:pixelaspectratio:)](https://developer.apple.com/documentation/professional_video_applications/fxonscreencontrolapi_v2/inputwidth(_:height:pixelaspectratio:))

# inputWidth(\_:height:pixelAspectRatio:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 3.1+

Returns the width, height, and pixel aspect ratio of the input to the filter or transition for which the on-screen control is applied.

## Declaration

```swift
func inputWidth(_ inputWidth: UnsafeMutablePointer<Int>!, height inputHeight: UnsafeMutablePointer<Int>!, pixelAspectRatio: UnsafeMutablePointer<Double>!)
```

## Parameters

- `inputWidth`: A pointer to the input width of the object.
- `inputHeight`: A pointer to the input height of the object.
- `pixelAspectRatio`: A pointer to the input pixel aspect ratio of the object.

## See Also

### Input and Output Item Geometry

- [objectWidth(\_:height:pixelAspectRatio:)](objectwidth%28__height_pixelaspectratio_%29.md): Returns the width, height, and pixel aspect ratio of the object for which the on-screen control is applied.
- [inputBounds()](inputbounds%28%29.md): Returns the bounds of the input to the filter or transition.

# inputWidth:height:pixelAspectRatio: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Returns the width, height, and pixel aspect ratio of the input to the filter or transition for which the on-screen control is applied.

## Declaration

```objectivec
- (void) inputWidth:(NSUInteger *) inputWidth height:(NSUInteger *) inputHeight pixelAspectRatio:(double *) pixelAspectRatio;
```

## Parameters

- `inputWidth`: A pointer to the input width of the object.
- `inputHeight`: A pointer to the input height of the object.
- `pixelAspectRatio`: A pointer to the input pixel aspect ratio of the object.

## See Also

### Input and Output Item Geometry

- [objectWidth:height:pixelAspectRatio:](objectwidth%28__height_pixelaspectratio_%29.md): Returns the width, height, and pixel aspect ratio of the object for which the on-screen control is applied.
- [inputBounds](inputbounds%28%29.md): Returns the bounds of the input to the filter or transition.
