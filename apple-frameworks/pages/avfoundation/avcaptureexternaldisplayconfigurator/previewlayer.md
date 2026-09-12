> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureexternaldisplayconfigurator/previewlayer](https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfigurator/previewlayer)

# previewLayer (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The layer for which the configurator adjusts display properties to match the device’s state.

## Declaration

```swift
weak var previewLayer: CALayer? { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is the `CALayer` instance that you provided when instantiating the configurator. You may specify either an [AVCaptureVideoPreviewLayer](../avcapturevideopreviewlayer.md) or another `CALayer` instance that displays a camera’s video preview. [AVCaptureExternalDisplayConfigurator](../avcaptureexternaldisplayconfigurator.md)holds a weak reference to the layer. If the layer is released, this property returns `nil`.

## See Also

### Inspecting the configurator

- [activeExternalDisplayFrameRate](activeexternaldisplayframerate.md): The currently configured frame rate on the external display that’s displaying the preview layer.
- [device](device.md): The device for which the coordinator configures the preview layer.
- [isActive](isactive.md): This property tells you whether the configurator is actively configuring the external display.

# previewLayer (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The layer for which the configurator adjusts display properties to match the device’s state.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) CALayer * previewLayer;
```

<a id="discussion"></a>

## Discussion

The value of this property is the `CALayer` instance that you provided when instantiating the configurator. You may specify either an [AVCaptureVideoPreviewLayer](../avcapturevideopreviewlayer.md) or another `CALayer` instance that displays a camera’s video preview. [AVCaptureExternalDisplayConfigurator](../avcaptureexternaldisplayconfigurator.md)holds a weak reference to the layer. If the layer is released, this property returns `nil`.

## See Also

### Inspecting the configurator

- [activeExternalDisplayFrameRate](activeexternaldisplayframerate.md): The currently configured frame rate on the external display that’s displaying the preview layer.
- [device](device.md): The device for which the coordinator configures the preview layer.
- [active](isactive.md): This property tells you whether the configurator is actively configuring the external display.
