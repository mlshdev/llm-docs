> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/size](https://developer.apple.com/documentation/uikit/uiimage/size)

# size (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The logical dimensions, in points, for the image.

## Declaration

```swift
var size: CGSize { get }
```

<a id="Discussion"></a>

## Discussion

This value reflects the logical size of the image and takes the image’s current orientation into account. Multiply the size values by the value in the [scale](scale.md) property to get the pixel dimensions of the image.

## See Also

### Getting the image size and scale

- [scale](scale.md): The scale factor of the image.

# size (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The logical dimensions, in points, for the image.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize size;
```

<a id="Discussion"></a>

## Discussion

This value reflects the logical size of the image and takes the image’s current orientation into account. Multiply the size values by the value in the [scale](scale.md) property to get the pixel dimensions of the image.

## See Also

### Getting the image size and scale

- [scale](scale.md): The scale factor of the image.
