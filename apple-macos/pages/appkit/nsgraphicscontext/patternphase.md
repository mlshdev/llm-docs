> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/patternphase](https://developer.apple.com/documentation/appkit/nsgraphicscontext/patternphase)

# patternPhase (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The amount to offset the pattern color when filling the graphics context.

## Declaration

```swift
var patternPhase: NSPoint { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property when you need to line up the pattern color with another pattern, such as the pattern in a superview. The pattern phase is a translation (width, height) applied before a pattern is drawn in the current context and is part of the saved graphics state of the context. The default pattern phase is (0,0). Setting the pattern phase has the effect of temporarily changing the pattern matrix of any pattern you decide to draw. For example, setting the pattern phase to (2,3) has the effect of moving the start of pattern cell tiling to the point (2,3) in default user space.

## See Also

### Configuring Rendering Options

- [compositingOperation](compositingoperation.md): The graphics context’s global compositing operation setting.
- [NSCompositingOperation](../nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.
- [imageInterpolation](imageinterpolation.md): A constant that specifies the graphics context’s interpolation, or image smoothing, behavior.
- [NSImageInterpolation](../nsimageinterpolation.md): Constants that specify the interpolation, or image smoothing, behavior used by the image interpolation property.
- [shouldAntialias](shouldantialias.md): A Boolean value that indicates whether the graphics context uses antialiasing.

# patternPhase (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The amount to offset the pattern color when filling the graphics context.

## Declaration

```objectivec
@property NSPoint patternPhase;
```

<a id="Discussion"></a>

## Discussion

Use this property when you need to line up the pattern color with another pattern, such as the pattern in a superview. The pattern phase is a translation (width, height) applied before a pattern is drawn in the current context and is part of the saved graphics state of the context. The default pattern phase is (0,0). Setting the pattern phase has the effect of temporarily changing the pattern matrix of any pattern you decide to draw. For example, setting the pattern phase to (2,3) has the effect of moving the start of pattern cell tiling to the point (2,3) in default user space.

## See Also

### Configuring Rendering Options

- [compositingOperation](compositingoperation.md): The graphics context’s global compositing operation setting.
- [NSCompositingOperation](../nscompositingoperation.md): Constants that describe compositing operators in terms of source and destination images, each having an opaque and transparent region.
- [imageInterpolation](imageinterpolation.md): A constant that specifies the graphics context’s interpolation, or image smoothing, behavior.
- [NSImageInterpolation](../nsimageinterpolation.md): Constants that specify the interpolation, or image smoothing, behavior used by the image interpolation property.
- [shouldAntialias](shouldantialias.md): A Boolean value that indicates whether the graphics context uses antialiasing.
