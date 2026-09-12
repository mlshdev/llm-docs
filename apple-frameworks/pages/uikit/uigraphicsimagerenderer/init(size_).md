> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsimagerenderer/init(size:)](https://developer.apple.com/documentation/uikit/uigraphicsimagerenderer/init(size:))

# init(size:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates an image renderer for drawing images of the specified size.

## Declaration

```swift
convenience init(size: CGSize)
```

## Parameters

- `size`: The size of images output from the renderer, specified in points.

<a id="return-value"></a>

## Return Value

An initialized image renderer.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an image renderer that will draw images of a given size. This renderer uses the [default()](../uigraphicsrendererformat/default%28%29.md) static method on [UIGraphicsImageRendererContext](../uigraphicsimagerenderercontext.md) to create its context, thereby selecting parameters that are the most appropriate for the current device.

## See Also

### Initializing an image renderer

- [init(bounds:format:)](init%28bounds_format_%29.md): Creates an image renderer with the specified bounds and format.
- [init(size:format:)](init%28size_format_%29.md): Creates an image renderer with the specified size and format.

# initWithSize: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates an image renderer for drawing images of the specified size.

## Declaration

```objectivec
- (instancetype) initWithSize:(CGSize) size;
```

## Parameters

- `size`: The size of images output from the renderer, specified in points.

<a id="return-value"></a>

## Return Value

An initialized image renderer.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an image renderer that will draw images of a given size. This renderer uses the [defaultFormat](../uigraphicsrendererformat/default%28%29.md) static method on [UIGraphicsImageRendererContext](../uigraphicsimagerenderercontext.md) to create its context, thereby selecting parameters that are the most appropriate for the current device.

## See Also

### Initializing an image renderer

- [initWithBounds:format:](init%28bounds_format_%29.md): Creates an image renderer with the specified bounds and format.
- [initWithSize:format:](init%28size_format_%29.md): Creates an image renderer with the specified size and format.
