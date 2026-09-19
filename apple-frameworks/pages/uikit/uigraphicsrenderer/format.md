> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uigraphicsrenderer/format

# format (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The format used to create the graphics renderer.

## Declaration

```swift
var format: UIGraphicsRendererFormat { get }
```

<a id="Discussion"></a>

## Discussion

The property returns a copy of the [UIGraphicsRendererFormat](../uigraphicsrendererformat.md) instance used to create the graphics renderer.

## See Also

### Configuring the renderer

- [allowsImageOutput](allowsimageoutput.md): A Boolean value specifying whether the renderer can create output images.

# format (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The format used to create the graphics renderer.

## Declaration

```objectivec
@property (nonatomic, readonly) UIGraphicsRendererFormat * format;
```

<a id="Discussion"></a>

## Discussion

The property returns a copy of the [UIGraphicsRendererFormat](../uigraphicsrendererformat.md) instance used to create the graphics renderer.

## See Also

### Configuring the renderer

- [allowsImageOutput](allowsimageoutput.md): A Boolean value specifying whether the renderer can create output images.
