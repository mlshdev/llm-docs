> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsrenderer/init(bounds:)](https://developer.apple.com/documentation/uikit/uigraphicsrenderer/init(bounds:))

# init(bounds:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a new graphics renderer with the specified bounds and a default format.

## Declaration

```swift
convenience init(bounds: CGRect)
```

## Parameters

- `bounds`: The bounds of the Core Graphics context available to the renderer, with values measured in points.

<a id="return-value"></a>

## Return Value

An initialized graphics renderer.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a graphics renderer that operates on Core Graphics contexts with the specified bounds. This initializer uses the [default()](../uigraphicsrendererformat/default%28%29.md) static method on [UIGraphicsRendererFormat](../uigraphicsrendererformat.md) to create the renderer’s format, thereby selecting parameters that are the most appropriate for the current device.

## See Also

### Initializing a graphics renderer

- [init(bounds:format:)](init%28bounds_format_%29.md): Creates a new graphics renderer with the given bounds and format.

# initWithBounds: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates a new graphics renderer with the specified bounds and a default format.

## Declaration

```objectivec
- (instancetype) initWithBounds:(CGRect) bounds;
```

## Parameters

- `bounds`: The bounds of the Core Graphics context available to the renderer, with values measured in points.

<a id="return-value"></a>

## Return Value

An initialized graphics renderer.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a graphics renderer that operates on Core Graphics contexts with the specified bounds. This initializer uses the [defaultFormat](../uigraphicsrendererformat/default%28%29.md) static method on [UIGraphicsRendererFormat](../uigraphicsrendererformat.md) to create the renderer’s format, thereby selecting parameters that are the most appropriate for the current device.

## See Also

### Initializing a graphics renderer

- [initWithBounds:format:](init%28bounds_format_%29.md): Creates a new graphics renderer with the given bounds and format.
