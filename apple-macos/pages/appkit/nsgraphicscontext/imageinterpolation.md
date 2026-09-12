> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/imageinterpolation](https://developer.apple.com/documentation/appkit/nsgraphicscontext/imageinterpolation)

# imageInterpolation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A constant that specifies the graphics context’s interpolation, or image smoothing, behavior.

## Declaration

```swift
var imageInterpolation: NSImageInterpolation { get set }
```

<a id="Discussion"></a>

## Discussion

Note that this value is not part of the graphics state, so it cannot be reset using [restoreGraphicsState()](restoregraphicsstate%28%29-swift.method.md).

## See Also

### Configuring Rendering Options

- [compositingOperation](compositingoperation.md): The graphics context’s global compositing operation setting.
- [NSCompositingOperation](../nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.
- [NSImageInterpolation](../nsimageinterpolation.md): Constants that specify the interpolation, or image smoothing, behavior used by the image interpolation property.
- [shouldAntialias](shouldantialias.md): A Boolean value that indicates whether the graphics context uses antialiasing.
- [patternPhase](patternphase.md): The amount to offset the pattern color when filling the graphics context.

# imageInterpolation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A constant that specifies the graphics context’s interpolation, or image smoothing, behavior.

## Declaration

```objectivec
@property NSImageInterpolation imageInterpolation;
```

<a id="Discussion"></a>

## Discussion

Note that this value is not part of the graphics state, so it cannot be reset using [restoreGraphicsState](restoregraphicsstate%28%29-swift.method.md).

## See Also

### Configuring Rendering Options

- [compositingOperation](compositingoperation.md): The graphics context’s global compositing operation setting.
- [NSCompositingOperation](../nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.
- [NSImageInterpolation](../nsimageinterpolation.md): Constants that specify the interpolation, or image smoothing, behavior used by the image interpolation property.
- [shouldAntialias](shouldantialias.md): A Boolean value that indicates whether the graphics context uses antialiasing.
- [patternPhase](patternphase.md): The amount to offset the pattern color when filling the graphics context.
