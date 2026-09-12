> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/screencapturekit/scshareablecontentstyle](https://developer.apple.com/documentation/screencapturekit/scshareablecontentstyle)

# SCShareableContentStyle (Swift)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

The style of content presented in a stream.

## Declaration

```swift
enum SCShareableContentStyle
```

## Topics

### Content styles

- [SCShareableContentStyle.application](scshareablecontentstyle/application.md): The stream is currently presenting one or more applications.
- [SCShareableContentStyle.display](scshareablecontentstyle/display.md): The stream is currently presenting a complete display.
- [SCShareableContentStyle.none](scshareablecontentstyle/none.md): The stream isn’t currently presenting any content.
- [SCShareableContentStyle.window](scshareablecontentstyle/window.md): The stream is currently presenting one or more windows.

### Initializers

- [init(rawValue:)](scshareablecontentstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Shareable content

- [SCShareableContent](scshareablecontent.md): An instance that represents a set of displays, apps, and windows that your app can capture.
- [SCShareableContentInfo](scshareablecontentinfo.md): An instance that provides information for the content in a given stream.
- [SCDisplay](scdisplay.md): An instance that represents a display device.
- [SCRunningApplication](scrunningapplication.md): An instance that represents an app running on a device.
- [SCWindow](scwindow.md): An instance that represents an onscreen window.

# SCShareableContentStyle (Objective-C)

**Framework:** ScreenCaptureKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 18.2+ · macOS 12.3+ · tvOS 27.0+ · visionOS 27.0+

The style of content presented in a stream.

## Declaration

```objectivec
enum SCShareableContentStyle : NSInteger;
```

## Topics

### Content styles

- [SCShareableContentStyleApplication](scshareablecontentstyle/application.md): The stream is currently presenting one or more applications.
- [SCShareableContentStyleDisplay](scshareablecontentstyle/display.md): The stream is currently presenting a complete display.
- [SCShareableContentStyleNone](scshareablecontentstyle/none.md): The stream isn’t currently presenting any content.
- [SCShareableContentStyleWindow](scshareablecontentstyle/window.md): The stream is currently presenting one or more windows.

## See Also

### Shareable content

- [SCShareableContent](scshareablecontent.md): An instance that represents a set of displays, apps, and windows that your app can capture.
- [SCShareableContentInfo](scshareablecontentinfo.md): An instance that provides information for the content in a given stream.
- [SCDisplay](scdisplay.md): An instance that represents a display device.
- [SCRunningApplication](scrunningapplication.md): An instance that represents an app running on a device.
- [SCWindow](scwindow.md): An instance that represents an onscreen window.
