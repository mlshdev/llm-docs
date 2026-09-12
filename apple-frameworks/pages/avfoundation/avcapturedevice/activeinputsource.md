> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/activeinputsource](https://developer.apple.com/documentation/avfoundation/avcapturedevice/activeinputsource)

# activeInputSource (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The currently active input source of the device.

## Declaration

```swift
var activeInputSource: AVCaptureDevice.InputSource? { get set }
```

<a id="Discussion"></a>

## Discussion

You must call [lockForConfiguration()](lockforconfiguration%28%29.md) before attempting to set a format. Setting a format that isn’t present in the [inputSources](inputsources.md) array results in an exception.

This property is key-value observable.

## See Also

### Configuring input sources

- [inputSources](inputsources.md): An array of input sources that the device supports.
- [AVCaptureDevice.InputSource](inputsource.md): A distinct input source on a capture device.

# activeInputSource (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The currently active input source of the device.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) AVCaptureDeviceInputSource * activeInputSource;
```

<a id="Discussion"></a>

## Discussion

You must call [lockForConfiguration:](lockforconfiguration%28%29.md) before attempting to set a format. Setting a format that isn’t present in the [inputSources](inputsources.md) array results in an exception.

This property is key-value observable.

## See Also

### Configuring input sources

- [inputSources](inputsources.md): An array of input sources that the device supports.
- [AVCaptureDeviceInputSource](inputsource.md): A distinct input source on a capture device.
