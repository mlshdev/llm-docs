> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicspdfrenderer/init(bounds:format:)](https://developer.apple.com/documentation/uikit/uigraphicspdfrenderer/init(bounds:format:))

# init(bounds:format:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a new graphics renderer with the specified bounds and format.

## Declaration

```swift
init(bounds: CGRect, format: UIGraphicsPDFRendererFormat)
```

## Parameters

- `bounds`: The bounds of the Core Graphics context available to the renderer, with values in points.
- `format`: A [UIGraphicsPDFRendererFormat](../uigraphicspdfrendererformat.md) object that encapsulates the format applied to the renderer’s context.

<a id="return-value"></a>

## Return Value

An initialized PDF graphics renderer.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a PDF renderer when you want to override the default format for the current device. Otherwise, use the [init(bounds:)](../uigraphicsrenderer/init%28bounds_%29.md) method present on the abstract superclass, [UIGraphicsRenderer](../uigraphicsrenderer.md).

# initWithBounds:format: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a new graphics renderer with the specified bounds and format.

## Declaration

```objectivec
- (instancetype) initWithBounds:(CGRect) bounds format:(UIGraphicsPDFRendererFormat *) format;
```

## Parameters

- `bounds`: The bounds of the Core Graphics context available to the renderer, with values in points.
- `format`: A [UIGraphicsPDFRendererFormat](../uigraphicspdfrendererformat.md) object that encapsulates the format applied to the renderer’s context.

<a id="return-value"></a>

## Return Value

An initialized PDF graphics renderer.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a PDF renderer when you want to override the default format for the current device. Otherwise, use the [initWithBounds:](../uigraphicsrenderer/init%28bounds_%29.md) method present on the abstract superclass, [UIGraphicsRenderer](../uigraphicsrenderer.md).
