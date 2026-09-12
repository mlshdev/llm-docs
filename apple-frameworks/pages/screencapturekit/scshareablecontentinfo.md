> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scshareablecontentinfo](https://developer.apple.com/documentation/screencapturekit/scshareablecontentinfo)

# SCShareableContentInfo (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

An instance that provides information for the content in a given stream.

## Declaration

```swift
class SCShareableContentInfo
```

## Topics

### Shared content properties

- [contentRect](scshareablecontentinfo/contentrect.md): The size and location of content for the stream.
- [pointPixelScale](scshareablecontentinfo/pointpixelscale.md): The scaling from points to output pixel resolution for the stream.
- [style](scshareablecontentinfo/style.md): The current presentation style of the stream.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Shareable content

- [SCShareableContent](scshareablecontent.md): An instance that represents a set of displays, apps, and windows that your app can capture.
- [SCShareableContentStyle](scshareablecontentstyle.md): The style of content presented in a stream.
- [SCDisplay](scdisplay.md): An instance that represents a display device.
- [SCRunningApplication](scrunningapplication.md): An instance that represents an app running on a device.
- [SCWindow](scwindow.md): An instance that represents an onscreen window.

# SCShareableContentInfo (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Class  
**Availability:** Mac Catalyst 18.2+ · macOS 14.0+

An instance that provides information for the content in a given stream.

## Declaration

```objectivec
@interface SCShareableContentInfo : NSObject
```

## Topics

### Shared content properties

- [contentRect](scshareablecontentinfo/contentrect.md): The size and location of content for the stream.
- [pointPixelScale](scshareablecontentinfo/pointpixelscale.md): The scaling from points to output pixel resolution for the stream.
- [style](scshareablecontentinfo/style.md): The current presentation style of the stream.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Shareable content

- [SCShareableContent](scshareablecontent.md): An instance that represents a set of displays, apps, and windows that your app can capture.
- [SCShareableContentStyle](scshareablecontentstyle.md): The style of content presented in a stream.
- [SCDisplay](scdisplay.md): An instance that represents a display device.
- [SCRunningApplication](scrunningapplication.md): An instance that represents an app running on a device.
- [SCWindow](scwindow.md): An instance that represents an onscreen window.
