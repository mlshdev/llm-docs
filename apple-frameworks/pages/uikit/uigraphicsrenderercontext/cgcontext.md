> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsrenderercontext/cgcontext](https://developer.apple.com/documentation/uikit/uigraphicsrenderercontext/cgcontext)

# cgContext (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The underlying Core Graphics context.

## Declaration

```swift
var cgContext: CGContext { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to gain access to the underlying Core Graphics context when you need more drawing functionality than is offered by UIKit and `UIGraphicsRendererContext`.

For an example of how and when to use the Core Graphics context in an image renderer, see [Using Core Graphics rendering functions](../uigraphicsimagerenderer.md#Using-Core-Graphics-rendering-functions) in [UIGraphicsImageRenderer](../uigraphicsimagerenderer.md).

## See Also

### Getting the drawing context

- [format](format.md): The format used to create the associated graphics renderer.

# CGContext (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The underlying Core Graphics context.

## Declaration

```objectivec
@property (nonatomic, readonly) CGContextRef CGContext;
```

<a id="Discussion"></a>

## Discussion

Use this property to gain access to the underlying Core Graphics context when you need more drawing functionality than is offered by UIKit and `UIGraphicsRendererContext`.

For an example of how and when to use the Core Graphics context in an image renderer, see [Using Core Graphics rendering functions](../uigraphicsimagerenderer.md#Using-Core-Graphics-rendering-functions) in [UIGraphicsImageRenderer](../uigraphicsimagerenderer.md).

## See Also

### Getting the drawing context

- [format](format.md): The format used to create the associated graphics renderer.
