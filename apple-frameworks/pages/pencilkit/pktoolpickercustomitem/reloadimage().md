> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpickercustomitem/reloadimage()](https://developer.apple.com/documentation/pencilkit/pktoolpickercustomitem/reloadimage())

# reloadImage() (Swift)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Requests a new image for the custom tool item from the image provider.

## Declaration

```swift
func reloadImage()
```

<a id="Discussion"></a>

## Discussion

Calling this method requests a new image for the custom tool item from the [imageProvider](configuration-swift.struct/imageprovider.md) of the [configuration](configuration-v7e5.md).

The system automatically calls this method when PencilKit attributes like [color](color.md) or [width](width.md) change. You can call this method when you need to generate a new image for the custom tool item that’s different from the current image.

# reloadImage (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

Requests a new image for the custom tool item from the image provider.

## Declaration

```objectivec
- (void) reloadImage;
```

<a id="Discussion"></a>

## Discussion

Calling this method requests a new image for the custom tool item from the [imageProvider](configuration-swift.struct/imageprovider.md) of the [configuration](configuration-v7e5.md).

The system automatically calls this method when PencilKit attributes like [color](color.md) or [width](width.md) change. You can call this method when you need to generate a new image for the custom tool item that’s different from the current image.
