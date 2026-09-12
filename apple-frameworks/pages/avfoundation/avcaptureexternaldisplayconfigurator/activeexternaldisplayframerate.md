> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureexternaldisplayconfigurator/activeexternaldisplayframerate](https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfigurator/activeexternaldisplayframerate)

# activeExternalDisplayFrameRate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The currently configured frame rate on the external display that’s displaying the preview layer.

## Declaration

```swift
var activeExternalDisplayFrameRate: Double { get }
```

<a id="discussion"></a>

## Discussion

Observe this property to determine if the configured frame rate matches the max frame rate ([activeVideoMinFrameDuration](../avcapturedevice/activevideominframeduration.md)) of the device. When the [isActive](isactive.md) property becomes `false`, this property changes to 0.

## See Also

### Inspecting the configurator

- [device](device.md): The device for which the coordinator configures the preview layer.
- [isActive](isactive.md): This property tells you whether the configurator is actively configuring the external display.
- [previewLayer](previewlayer.md): The layer for which the configurator adjusts display properties to match the device’s state.

# activeExternalDisplayFrameRate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

The currently configured frame rate on the external display that’s displaying the preview layer.

## Declaration

```objectivec
@property (nonatomic, readonly) double activeExternalDisplayFrameRate;
```

<a id="discussion"></a>

## Discussion

Observe this property to determine if the configured frame rate matches the max frame rate ([activeVideoMinFrameDuration](../avcapturedevice/activevideominframeduration.md)) of the device. When the [active](isactive.md) property becomes `false`, this property changes to 0.

## See Also

### Inspecting the configurator

- [device](device.md): The device for which the coordinator configures the preview layer.
- [active](isactive.md): This property tells you whether the configurator is actively configuring the external display.
- [previewLayer](previewlayer.md): The layer for which the configurator adjusts display properties to match the device’s state.
