> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetimagegenerator/images/element/actualtime](https://developer.apple.com/documentation/avfoundation/avassetimagegenerator/images/element/actualtime)

# actualTime

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The actual time in the video timeline at which the image generator creates the image.

## Declaration

```swift
var actualTime: CMTime { get throws }
```

<a id="Discussion"></a>

## Discussion

This value may differ from the [requestedTime](requestedtime.md) depending on the configuration of the image generator’s [requestedTimeToleranceBefore](../../requestedtimetolerancebefore.md) and [requestedTimeToleranceAfter](../../requestedtimetoleranceafter.md) properties.

## See Also

### Accessing image data

- [image](image.md): An image for a requested time.
- [requestedTime](requestedtime.md): A time in the video timeline at which you request an image.
