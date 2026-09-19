> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/inputsources

# inputSources (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An array of input sources that the device supports.

## Declaration

```swift
var inputSources: [AVCaptureDevice.InputSource] { get }
```

<a id="Discussion"></a>

## Discussion

Some devices can capture data from one of multiple data sources (different input jacks on the same audio device, for example). For devices with multiple possible data sources, you can use this property to enumerate the possible choices.

This value is key-value observable.

## See Also

### Configuring input sources

- [activeInputSource](activeinputsource.md): The currently active input source of the device.
- [AVCaptureDevice.InputSource](inputsource.md): A distinct input source on a capture device.

# inputSources (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An array of input sources that the device supports.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVCaptureDeviceInputSource *> * inputSources;
```

<a id="Discussion"></a>

## Discussion

Some devices can capture data from one of multiple data sources (different input jacks on the same audio device, for example). For devices with multiple possible data sources, you can use this property to enumerate the possible choices.

This value is key-value observable.

## See Also

### Configuring input sources

- [activeInputSource](activeinputsource.md): The currently active input source of the device.
- [AVCaptureDeviceInputSource](inputsource.md): A distinct input source on a capture device.
