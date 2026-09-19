> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uigraphicsrenderercontext/format

# format (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The format used to create the associated graphics renderer.

## Declaration

```swift
var format: UIGraphicsRendererFormat { get }
```

<a id="Discussion"></a>

## Discussion

If you specified a format object when you initialized the current renderer ([UIGraphicsRenderer](../uigraphicsrenderer.md)) object, then this property provides access to that object. Otherwise, a default format object was created for you using the renderer initialization parameters, tuned to the current device.

## See Also

### Getting the drawing context

- [cgContext](cgcontext.md): The underlying Core Graphics context.

# format (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The format used to create the associated graphics renderer.

## Declaration

```objectivec
@property (nonatomic, readonly) UIGraphicsRendererFormat * format;
```

<a id="Discussion"></a>

## Discussion

If you specified a format object when you initialized the current renderer ([UIGraphicsRenderer](../uigraphicsrenderer.md)) object, then this property provides access to that object. Otherwise, a default format object was created for you using the renderer initialization parameters, tuned to the current device.

## See Also

### Getting the drawing context

- [CGContext](cgcontext.md): The underlying Core Graphics context.
