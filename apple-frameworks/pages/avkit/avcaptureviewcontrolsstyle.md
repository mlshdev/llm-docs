> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avcaptureviewcontrolsstyle

# AVCaptureViewControlsStyle (Swift)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

Constants that describe the capture view’s supported controls styles.

## Declaration

```swift
enum AVCaptureViewControlsStyle
```

## Topics

### Creating a controls style

- [init(rawValue:)](avcaptureviewcontrolsstyle/init%28rawvalue_%29.md)

### Controls styles

- [AVCaptureViewControlsStyle.inline](avcaptureviewcontrolsstyle/inline.md): The view’s inline controls style.
- [AVCaptureViewControlsStyle.floating](avcaptureviewcontrolsstyle/floating.md): The view’s floating controls style, which matches the user interface of QuickTime Player.
- [AVCaptureViewControlsStyle.inlineDeviceSelection](avcaptureviewcontrolsstyle/inlinedeviceselection.md): The view’s inline device selection style.
- [default](avcaptureviewcontrolsstyle/default.md): The view’s default controls style.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing the view

- [controlsStyle](avcaptureview/controlsstyle.md): The style of the capture controls presented by the view.
- [videoGravity](avcaptureview/videogravity.md): A string value that defines how the capture view displays video within its bounds.

# AVCaptureViewControlsStyle (Objective-C)

**Framework:** AVKit  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

Constants that describe the capture view’s supported controls styles.

## Declaration

```objectivec
enum AVCaptureViewControlsStyle : NSInteger;
```

## Topics

### Controls styles

- [AVCaptureViewControlsStyleInline](avcaptureviewcontrolsstyle/inline.md): The view’s inline controls style.
- [AVCaptureViewControlsStyleFloating](avcaptureviewcontrolsstyle/floating.md): The view’s floating controls style, which matches the user interface of QuickTime Player.
- [AVCaptureViewControlsStyleInlineDeviceSelection](avcaptureviewcontrolsstyle/inlinedeviceselection.md): The view’s inline device selection style.
- [AVCaptureViewControlsStyleDefault](avcaptureviewcontrolsstyle/default.md): The view’s default controls style.

## See Also

### Customizing the view

- [controlsStyle](avcaptureview/controlsstyle.md): The style of the capture controls presented by the view.
- [videoGravity](avcaptureview/videogravity.md): A string value that defines how the capture view displays video within its bounds.
