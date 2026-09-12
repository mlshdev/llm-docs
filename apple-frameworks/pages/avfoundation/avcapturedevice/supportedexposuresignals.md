> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/supportedexposuresignals](https://developer.apple.com/documentation/avfoundation/avcapturedevice/supportedexposuresignals)

# supportedExposureSignals (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

Indicates what values can be included in `enabledExposureSignals`. This property is key-value observable.

## Declaration

```swift
var supportedExposureSignals: Set<AVCaptureDeviceExposureSignal> { get }
```

## See Also

### Configuring exposure signals

- [activeExposureSignals](activeexposuresignals.md): Reports which characteristics the auto exposure system associates with the current scene. Auto exposure may adjust properties such as lens aperture size based on these factors. This property is key-value observable.
- [enabledExposureSignals](enabledexposuresignals.md): Can be assigned to control which characteristics AE should use in its decision making, must be a subset of supportedExposureSignals.
- [automaticallyEnablesExposureSignals](automaticallyenablesexposuresignals.md): When true (the default), capture sessions may automatically modify `enabledExposureSignals` based on changes to other device or session properties.
- [AVCaptureDeviceExposureSignal](../avcapturedeviceexposuresignal.md): Values that can be used to configure the auto exposure system via [enabledExposureSignals](enabledexposuresignals.md) and associated methods.

# supportedExposureSignals (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

Indicates what values can be included in `enabledExposureSignals`. This property is key-value observable.

## Declaration

```objectivec
@property (nonatomic, readonly, nonnull) NSSet<NSString *> * supportedExposureSignals;
```

## See Also

### Configuring exposure signals

- [activeExposureSignals](activeexposuresignals.md): Reports which characteristics the auto exposure system associates with the current scene. Auto exposure may adjust properties such as lens aperture size based on these factors. This property is key-value observable.
- [enabledExposureSignals](enabledexposuresignals.md): Can be assigned to control which characteristics AE should use in its decision making, must be a subset of supportedExposureSignals.
- [automaticallyEnablesExposureSignals](automaticallyenablesexposuresignals.md): When true (the default), capture sessions may automatically modify `enabledExposureSignals` based on changes to other device or session properties.
- [AVCaptureDeviceExposureSignal](../avcapturedeviceexposuresignal.md): Values that can be used to configure the auto exposure system via [enabledExposureSignals](enabledexposuresignals.md) and associated methods.
