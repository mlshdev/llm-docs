> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsimagerenderercontext/currentimage](https://developer.apple.com/documentation/uikit/uigraphicsimagerenderercontext/currentimage)

# currentImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The current state of the drawing context, expressed as an object that manages image data in your app.

## Declaration

```swift
var currentImage: UIImage { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to access the current Core Graphics context as a [UIImage](../uiimage.md) object while providing drawing instructions for one of the drawing methods in [UIGraphicsImageRenderer](../uigraphicsimagerenderer.md).

# currentImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The current state of the drawing context, expressed as an object that manages image data in your app.

## Declaration

```objectivec
@property (nonatomic, readonly) UIImage * currentImage;
```

<a id="Discussion"></a>

## Discussion

Use this property to access the current Core Graphics context as a [UIImage](../uiimage.md) object while providing drawing instructions for one of the drawing methods in [UIGraphicsImageRenderer](../uigraphicsimagerenderer.md).
