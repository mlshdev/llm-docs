> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/scale](https://developer.apple.com/documentation/uikit/uiimage/scale)

# scale (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The scale factor of the image.

## Declaration

```swift
var scale: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

If you load an image from a file whose name includes the `@2x` modifier, the scale is set to `2.0`. You can also specify an explicit scale factor when initializing an image from a Core Graphics image. All other images are assumed to have a scale factor of `1.0`.

If you multiply the logical size of the image (stored in the [size](size.md) property) by the value in this property, you get the dimensions of the image in pixels.

## See Also

### Getting the image size and scale

- [size](size.md): The logical dimensions, in points, for the image.

# scale (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The scale factor of the image.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat scale;
```

<a id="Discussion"></a>

## Discussion

If you load an image from a file whose name includes the `@2x` modifier, the scale is set to `2.0`. You can also specify an explicit scale factor when initializing an image from a Core Graphics image. All other images are assumed to have a scale factor of `1.0`.

If you multiply the logical size of the image (stored in the [size](size.md) property) by the value in this property, you get the dimensions of the image in pixels.

## See Also

### Getting the image size and scale

- [size](size.md): The logical dimensions, in points, for the image.
