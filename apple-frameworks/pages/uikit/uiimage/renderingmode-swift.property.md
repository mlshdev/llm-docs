> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/renderingmode-swift.property](https://developer.apple.com/documentation/uikit/uiimage/renderingmode-swift.property)

# renderingMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A setting that determines how the app renders an image.

## Declaration

```swift
var renderingMode: UIImage.RenderingMode { get }
```

<a id="Discussion"></a>

## Discussion

The default rendering mode is [UIImage.RenderingMode.automatic](renderingmode-swift.enum/automatic.md).

## See Also

### Getting rendering information

- [UIImage.RenderingMode](renderingmode-swift.enum.md): Constants that specify the possible rendering modes for an image.
- [imageRendererFormat](imagerendererformat.md): The preferred image renderer format for the image.

# renderingMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A setting that determines how the app renders an image.

## Declaration

```objectivec
@property (nonatomic, readonly) UIImageRenderingMode renderingMode;
```

<a id="Discussion"></a>

## Discussion

The default rendering mode is [UIImageRenderingModeAutomatic](renderingmode-swift.enum/automatic.md).

## See Also

### Getting rendering information

- [UIImageRenderingMode](renderingmode-swift.enum.md): Constants that specify the possible rendering modes for an image.
- [imageRendererFormat](imagerendererformat.md): The preferred image renderer format for the image.
