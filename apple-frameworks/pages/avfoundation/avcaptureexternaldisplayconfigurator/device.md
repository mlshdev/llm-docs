> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureexternaldisplayconfigurator/device](https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfigurator/device)

# device (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The device for which the coordinator configures the preview layer.

## Declaration

```swift
weak var device: AVCaptureDevice? { get }
```

<a id="discussion"></a>

## Discussion

The value of this property is the [AVCaptureDevice](../avcapturedevice.md) instance you provided when instantiating the configurator. [AVCaptureExternalDisplayConfigurator](../avcaptureexternaldisplayconfigurator.md) holds a weak reference to the device. If the device is released, this property returns `nil`.

## See Also

### Inspecting the configurator

- [activeExternalDisplayFrameRate](activeexternaldisplayframerate.md): The currently configured frame rate on the external display that’s displaying the preview layer.
- [isActive](isactive.md): This property tells you whether the configurator is actively configuring the external display.
- [previewLayer](previewlayer.md): The layer for which the configurator adjusts display properties to match the device’s state.

# device (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The device for which the coordinator configures the preview layer.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) AVCaptureDevice * device;
```

<a id="discussion"></a>

## Discussion

The value of this property is the [AVCaptureDevice](../avcapturedevice.md) instance you provided when instantiating the configurator. [AVCaptureExternalDisplayConfigurator](../avcaptureexternaldisplayconfigurator.md) holds a weak reference to the device. If the device is released, this property returns `nil`.

## See Also

### Inspecting the configurator

- [activeExternalDisplayFrameRate](activeexternaldisplayframerate.md): The currently configured frame rate on the external display that’s displaying the preview layer.
- [active](isactive.md): This property tells you whether the configurator is actively configuring the external display.
- [previewLayer](previewlayer.md): The layer for which the configurator adjusts display properties to match the device’s state.
