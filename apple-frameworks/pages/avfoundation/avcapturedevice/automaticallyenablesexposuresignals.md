> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/automaticallyenablesexposuresignals](https://developer.apple.com/documentation/avfoundation/avcapturedevice/automaticallyenablesexposuresignals)

# automaticallyEnablesExposureSignals (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

When true (the default), capture sessions may automatically modify `enabledExposureSignals` based on changes to other device or session properties.

## Declaration

```swift
var automaticallyEnablesExposureSignals: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The `enabledExposureSignals` property can only be assigned when `automaticallyEnablesExposureSignals` is false, otherwise assignments to `enabledExposureSignals` will throw an exception.

> **Throws**

> `NSGenericException` if assigned without first obtaining exclusive access to the receiver using [lockForConfiguration()](lockforconfiguration%28%29.md).

## See Also

### Configuring exposure signals

- [activeExposureSignals](activeexposuresignals.md): Reports which characteristics the auto exposure system associates with the current scene. Auto exposure may adjust properties such as lens aperture size based on these factors. This property is key-value observable.
- [enabledExposureSignals](enabledexposuresignals.md): Can be assigned to control which characteristics AE should use in its decision making, must be a subset of supportedExposureSignals.
- [supportedExposureSignals](supportedexposuresignals.md): Indicates what values can be included in `enabledExposureSignals`. This property is key-value observable.
- [AVCaptureDeviceExposureSignal](../avcapturedeviceexposuresignal.md): Values that can be used to configure the auto exposure system via [enabledExposureSignals](enabledexposuresignals.md) and associated methods.

# automaticallyEnablesExposureSignals (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

When true (the default), capture sessions may automatically modify `enabledExposureSignals` based on changes to other device or session properties.

## Declaration

```objectivec
@property (nonatomic) BOOL automaticallyEnablesExposureSignals;
```

<a id="discussion"></a>

## Discussion

The `enabledExposureSignals` property can only be assigned when `automaticallyEnablesExposureSignals` is false, otherwise assignments to `enabledExposureSignals` will throw an exception.

> **Throws**

> `NSGenericException` if assigned without first obtaining exclusive access to the receiver using [lockForConfiguration:](lockforconfiguration%28%29.md).

## See Also

### Configuring exposure signals

- [activeExposureSignals](activeexposuresignals.md): Reports which characteristics the auto exposure system associates with the current scene. Auto exposure may adjust properties such as lens aperture size based on these factors. This property is key-value observable.
- [enabledExposureSignals](enabledexposuresignals.md): Can be assigned to control which characteristics AE should use in its decision making, must be a subset of supportedExposureSignals.
- [supportedExposureSignals](supportedexposuresignals.md): Indicates what values can be included in `enabledExposureSignals`. This property is key-value observable.
- [AVCaptureDeviceExposureSignal](../avcapturedeviceexposuresignal.md): Values that can be used to configure the auto exposure system via [enabledExposureSignals](enabledexposuresignals.md) and associated methods.
