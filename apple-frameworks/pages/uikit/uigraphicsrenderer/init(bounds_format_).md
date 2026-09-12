> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsrenderer/init(bounds:format:)](https://developer.apple.com/documentation/uikit/uigraphicsrenderer/init(bounds:format:))

# init(bounds:format:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a new graphics renderer with the given bounds and format.

## Declaration

```swift
init(bounds: CGRect, format: UIGraphicsRendererFormat)
```

## Parameters

- `bounds`: The bounds of the Core Graphics context available to the renderer, with values measured in points.
- `format`: The format applied to the renderer’s context. This object is an instance of the subclass of [UIGraphicsRendererFormat](../uigraphicsrendererformat.md) appropriate for the concrete subclass of `UIGraphicsRenderer` you are using.

<a id="return-value"></a>

## Return Value

An initialized graphics renderer.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a graphics renderer when you want to override the default format for the current device.

The format instance is copied at initialization time, so you can immediately reuse the same instance to create additional renderers.

## See Also

### Initializing a graphics renderer

- [init(bounds:)](init%28bounds_%29.md): Creates a new graphics renderer with the specified bounds and a default format.

# initWithBounds:format: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a new graphics renderer with the given bounds and format.

## Declaration

```objectivec
- (instancetype) initWithBounds:(CGRect) bounds format:(UIGraphicsRendererFormat *) format;
```

## Parameters

- `bounds`: The bounds of the Core Graphics context available to the renderer, with values measured in points.
- `format`: The format applied to the renderer’s context. This object is an instance of the subclass of [UIGraphicsRendererFormat](../uigraphicsrendererformat.md) appropriate for the concrete subclass of `UIGraphicsRenderer` you are using.

<a id="return-value"></a>

## Return Value

An initialized graphics renderer.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a graphics renderer when you want to override the default format for the current device.

The format instance is copied at initialization time, so you can immediately reuse the same instance to create additional renderers.

## See Also

### Initializing a graphics renderer

- [initWithBounds:](init%28bounds_%29.md): Creates a new graphics renderer with the specified bounds and a default format.
