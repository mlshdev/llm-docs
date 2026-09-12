> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsgraphicscontext/colorrenderingintent](https://developer.apple.com/documentation/appkit/nsgraphicscontext/colorrenderingintent)

# colorRenderingIntent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The color rendering intent in the graphics context’s graphics state.

## Declaration

```swift
var colorRenderingIntent: NSColorRenderingIntent { get set }
```

<a id="Discussion"></a>

## Discussion

A value that specifies the rendering intent currently used by the graphics context. For possible values, see [NSColorRenderingIntent](../nscolorrenderingintent.md). The rendering intent specifies how Cocoa should handle colors that are not located within the gamut of the destination color space of a graphics context. If you do not explicitly set the rendering intent, and sampled images are being drawn, [NSGraphicsContext](../nsgraphicscontext.md) uses perceptual rendering intent. Otherwise, [NSGraphicsContext](../nsgraphicscontext.md) uses relative colorimetric rendering intent.

## See Also

### Managing Color Rendering

- [NSColorRenderingIntent](../nscolorrenderingintent.md): Constants that specify how Cocoa should handle colors that are not located within the destination color space of a graphics context.

# colorRenderingIntent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The color rendering intent in the graphics context’s graphics state.

## Declaration

```objectivec
@property NSColorRenderingIntent colorRenderingIntent;
```

<a id="Discussion"></a>

## Discussion

A value that specifies the rendering intent currently used by the graphics context. For possible values, see [NSColorRenderingIntent](../nscolorrenderingintent.md). The rendering intent specifies how Cocoa should handle colors that are not located within the gamut of the destination color space of a graphics context. If you do not explicitly set the rendering intent, and sampled images are being drawn, [NSGraphicsContext](../nsgraphicscontext.md) uses perceptual rendering intent. Otherwise, [NSGraphicsContext](../nsgraphicscontext.md) uses relative colorimetric rendering intent.

## See Also

### Managing Color Rendering

- [NSColorRenderingIntent](../nscolorrenderingintent.md): Constants that specify how Cocoa should handle colors that are not located within the destination color space of a graphics context.
