> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/shouldantialias](https://developer.apple.com/documentation/appkit/nsgraphicscontext/shouldantialias)

# shouldAntialias (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the graphics context uses antialiasing.

## Declaration

```swift
var shouldAntialias: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver uses antialiasing. This value is part of the graphics state and is restored by [restoreGraphicsState()](restoregraphicsstate%28%29-swift.method.md).

## See Also

### Configuring Rendering Options

- [compositingOperation](compositingoperation.md): The graphics context’s global compositing operation setting.
- [NSCompositingOperation](../nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.
- [imageInterpolation](imageinterpolation.md): A constant that specifies the graphics context’s interpolation, or image smoothing, behavior.
- [NSImageInterpolation](../nsimageinterpolation.md): Constants that specify the interpolation, or image smoothing, behavior used by the image interpolation property.
- [patternPhase](patternphase.md): The amount to offset the pattern color when filling the graphics context.

# shouldAntialias (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that indicates whether the graphics context uses antialiasing.

## Declaration

```objectivec
@property BOOL shouldAntialias;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the receiver uses antialiasing. This value is part of the graphics state and is restored by [restoreGraphicsState](restoregraphicsstate%28%29-swift.method.md).

## See Also

### Configuring Rendering Options

- [compositingOperation](compositingoperation.md): The graphics context’s global compositing operation setting.
- [NSCompositingOperation](../nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.
- [imageInterpolation](imageinterpolation.md): A constant that specifies the graphics context’s interpolation, or image smoothing, behavior.
- [NSImageInterpolation](../nsimageinterpolation.md): Constants that specify the interpolation, or image smoothing, behavior used by the image interpolation property.
- [patternPhase](patternphase.md): The amount to offset the pattern color when filling the graphics context.
