> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsimagerenderer/init(size:format:)](https://developer.apple.com/documentation/uikit/uigraphicsimagerenderer/init(size:format:))

# init(size:format:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates an image renderer with the specified size and format.

## Declaration

```swift
init(size: CGSize, format: UIGraphicsImageRendererFormat)
```

## Parameters

- `size`: The size of images output from the renderer, specified in points.
- `format`: A [UIGraphicsImageRendererFormat](../uigraphicsimagerendererformat.md) object that encapsulates the format used to create the renderer context.

<a id="return-value"></a>

## Return Value

An initialized renderer.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an image renderer when you want to override the default format for the current device. Provide the size of the images you want to create, and an instance of [UIGraphicsImageRendererFormat](../uigraphicsimagerendererformat.md) with the required configuration.

## See Also

### Initializing an image renderer

- [init(bounds:format:)](init%28bounds_format_%29.md): Creates an image renderer with the specified bounds and format.
- [init(size:)](init%28size_%29.md): Creates an image renderer for drawing images of the specified size.

# initWithSize:format: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates an image renderer with the specified size and format.

## Declaration

```objectivec
- (instancetype) initWithSize:(CGSize) size format:(UIGraphicsImageRendererFormat *) format;
```

## Parameters

- `size`: The size of images output from the renderer, specified in points.
- `format`: A [UIGraphicsImageRendererFormat](../uigraphicsimagerendererformat.md) object that encapsulates the format used to create the renderer context.

<a id="return-value"></a>

## Return Value

An initialized renderer.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an image renderer when you want to override the default format for the current device. Provide the size of the images you want to create, and an instance of [UIGraphicsImageRendererFormat](../uigraphicsimagerendererformat.md) with the required configuration.

## See Also

### Initializing an image renderer

- [initWithBounds:format:](init%28bounds_format_%29.md): Creates an image renderer with the specified bounds and format.
- [initWithSize:](init%28size_%29.md): Creates an image renderer for drawing images of the specified size.
