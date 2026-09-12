> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avcaptureview/videogravity](https://developer.apple.com/documentation/avkit/avcaptureview/videogravity)

# videoGravity (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A string value that defines how the capture view displays video within its bounds.

## Declaration

```swift
var videoGravity: AVLayerVideoGravity { get set }
```

<a id="Discussion"></a>

## Discussion

See [AVLayerVideoGravity](../../avfoundation/avlayervideogravity.md) for supported values. The default value is [resizeAspect](../../avfoundation/avlayervideogravity/resizeaspect.md).

## See Also

### Customizing the View

- [controlsStyle](controlsstyle.md): The style of the capture controls presented by the view.
- [AVCaptureViewControlsStyle](../avcaptureviewcontrolsstyle.md): Constants that describe the capture view’s supported controls styles.

# videoGravity (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** macOS 10.10+

A string value that defines how the capture view displays video within its bounds.

## Declaration

```objectivec
@property (copy) AVLayerVideoGravity videoGravity;
```

<a id="Discussion"></a>

## Discussion

See [AVLayerVideoGravity](../../avfoundation/avlayervideogravity.md) for supported values. The default value is [AVLayerVideoGravityResizeAspect](../../avfoundation/avlayervideogravity/resizeaspect.md).

## See Also

### Customizing the View

- [controlsStyle](controlsstyle.md): The style of the capture controls presented by the view.
- [AVCaptureViewControlsStyle](../avcaptureviewcontrolsstyle.md): Constants that describe the capture view’s supported controls styles.
