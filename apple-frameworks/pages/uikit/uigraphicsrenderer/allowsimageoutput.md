> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsrenderer/allowsimageoutput](https://developer.apple.com/documentation/uikit/uigraphicsrenderer/allowsimageoutput)

# allowsImageOutput (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value specifying whether the renderer can create output images.

## Declaration

```swift
var allowsImageOutput: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), this renderer can be used to generate [CGImage](../../coregraphics/cgimage.md) objects.

## See Also

### Configuring the renderer

- [format](format.md): The format used to create the graphics renderer.

# allowsImageOutput (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value specifying whether the renderer can create output images.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL allowsImageOutput;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), this renderer can be used to generate [CGImageRef](../../coregraphics/cgimage.md) objects.

## See Also

### Configuring the renderer

- [format](format.md): The format used to create the graphics renderer.
