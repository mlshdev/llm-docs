> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsimagerenderer/init(bounds:format:)](https://developer.apple.com/documentation/uikit/uigraphicsimagerenderer/init(bounds:format:))

# init(bounds:format:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates an image renderer with the specified bounds and format.

## Declaration

```swift
init(bounds: CGRect, format: UIGraphicsImageRendererFormat)
```

## Parameters

- `bounds`: The bounds of the image context the image renderer creates and subsequently draws upon. Specify values in points in the Core Graphics coordinate space.
- `format`: A [UIGraphicsImageRendererFormat](../uigraphicsimagerendererformat.md) object that encapsulates the format used to create the renderer context.

<a id="return-value"></a>

## Return Value

An initialized image renderer.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an image renderer when you want to override the default format for the current device.

## See Also

### Initializing an image renderer

- [init(size:)](init%28size_%29.md): Creates an image renderer for drawing images of the specified size.
- [init(size:format:)](init%28size_format_%29.md): Creates an image renderer with the specified size and format.

# initWithBounds:format: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Creates an image renderer with the specified bounds and format.

## Declaration

```objectivec
- (instancetype) initWithBounds:(CGRect) bounds format:(UIGraphicsImageRendererFormat *) format;
```

## Parameters

- `bounds`: The bounds of the image context the image renderer creates and subsequently draws upon. Specify values in points in the Core Graphics coordinate space.
- `format`: A [UIGraphicsImageRendererFormat](../uigraphicsimagerendererformat.md) object that encapsulates the format used to create the renderer context.

<a id="return-value"></a>

## Return Value

An initialized image renderer.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an image renderer when you want to override the default format for the current device.

## See Also

### Initializing an image renderer

- [initWithSize:](init%28size_%29.md): Creates an image renderer for drawing images of the specified size.
- [initWithSize:format:](init%28size_format_%29.md): Creates an image renderer with the specified size and format.
