> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureexternaldisplayconfigurator/init(device:previewlayer:configuration:)](https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfigurator/init(device:previewlayer:configuration:))

# init(device:previewLayer:configuration:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

An external display configurator instance that attempts to synchronize the preview layer configuration with the device capture configuration.

## Declaration

```swift
init(device: AVCaptureDevice, previewLayer: CALayer, configuration: AVCaptureExternalDisplayConfiguration)
```

## Parameters

- `device`: The device for which to monitor the configuration.
- `previewLayer`: The layer that is being used on an external display for displaying the camera preview.
- `configuration`: A configuration specifying which aspects of the camera’s active format to monitor and configure on the external display.

<a id="return-value"></a>

## Return Value

An [AVCaptureExternalDisplayConfigurator](../avcaptureexternaldisplayconfigurator.md) instance.

<a id="discussion"></a>

## Discussion

An [AVCaptureExternalDisplayConfigurator](../avcaptureexternaldisplayconfigurator.md) is only applicable to external displays. It determines which properties to configure on the external display based on your provided configuration (see [AVCaptureExternalDisplayConfiguration](../avcaptureexternaldisplayconfiguration.md)). The configurator observes changes to your camera’‘s configuration, and when changes are observed, it modifies the external display’s properties to match.

If multiple configurators are linked to the same external display ,the last one created becomes the active configurator for the external display (see [isActive](isactive.md)).

> **Important**

> An `NSInvalidArgumentException` is thrown if any of the [AVCaptureExternalDisplayConfiguration](../avcaptureexternaldisplayconfiguration.md) options are not supported.

# initWithDevice:previewLayer:configuration: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

An external display configurator instance that attempts to synchronize the preview layer configuration with the device capture configuration.

## Declaration

```objectivec
- (instancetype) initWithDevice:(AVCaptureDevice *) device previewLayer:(CALayer *) previewLayer configuration:(AVCaptureExternalDisplayConfiguration *) configuration;
```

## Parameters

- `device`: The device for which to monitor the configuration.
- `previewLayer`: The layer that is being used on an external display for displaying the camera preview.
- `configuration`: A configuration specifying which aspects of the camera’s active format to monitor and configure on the external display.

<a id="return-value"></a>

## Return Value

An [AVCaptureExternalDisplayConfigurator](../avcaptureexternaldisplayconfigurator.md) instance.

<a id="discussion"></a>

## Discussion

An [AVCaptureExternalDisplayConfigurator](../avcaptureexternaldisplayconfigurator.md) is only applicable to external displays. It determines which properties to configure on the external display based on your provided configuration (see [AVCaptureExternalDisplayConfiguration](../avcaptureexternaldisplayconfiguration.md)). The configurator observes changes to your camera’‘s configuration, and when changes are observed, it modifies the external display’s properties to match.

If multiple configurators are linked to the same external display ,the last one created becomes the active configurator for the external display (see [active](isactive.md)).

> **Important**

> An `NSInvalidArgumentException` is thrown if any of the [AVCaptureExternalDisplayConfiguration](../avcaptureexternaldisplayconfiguration.md) options are not supported.
