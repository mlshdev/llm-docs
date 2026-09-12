> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/enabledexposuresignals](https://developer.apple.com/documentation/avfoundation/avcapturedevice/enabledexposuresignals)

# enabledExposureSignals (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

Can be assigned to control which characteristics AE should use in its decision making, must be a subset of supportedExposureSignals.

## Declaration

```swift
var enabledExposureSignals: Set<AVCaptureDeviceExposureSignal> { get set }
```

<a id="discussion"></a>

## Discussion

When `automaticallyEnablesExposureSignals` is true, the system may automatically change the enabled signals based on other enabled device properties. When `automaticallyEnablesExposureSignals` is false, you may assign a custom set of exposure signals to this property. This property is key-value observable.

> **Throws**

> `NSInvalidArgumentException` if assigned while `automaticallyEnablesExposureSignals` is true

> **Throws**

> `NSGenericException` if assigned without first obtaining exclusive access to the receiver using [lockForConfiguration()](lockforconfiguration%28%29.md).

## See Also

### Configuring exposure signals

- [activeExposureSignals](activeexposuresignals.md): Reports which characteristics the auto exposure system associates with the current scene. Auto exposure may adjust properties such as lens aperture size based on these factors. This property is key-value observable.
- [supportedExposureSignals](supportedexposuresignals.md): Indicates what values can be included in `enabledExposureSignals`. This property is key-value observable.
- [automaticallyEnablesExposureSignals](automaticallyenablesexposuresignals.md): When true (the default), capture sessions may automatically modify `enabledExposureSignals` based on changes to other device or session properties.
- [AVCaptureDeviceExposureSignal](../avcapturedeviceexposuresignal.md): Values that can be used to configure the auto exposure system via [enabledExposureSignals](enabledexposuresignals.md) and associated methods.

# enabledExposureSignals (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+

Can be assigned to control which characteristics AE should use in its decision making, must be a subset of supportedExposureSignals.

## Declaration

```objectivec
@property (nonatomic, nonnull) NSSet<NSString *> * enabledExposureSignals;
```

<a id="discussion"></a>

## Discussion

When `automaticallyEnablesExposureSignals` is true, the system may automatically change the enabled signals based on other enabled device properties. When `automaticallyEnablesExposureSignals` is false, you may assign a custom set of exposure signals to this property. This property is key-value observable.

> **Throws**

> `NSInvalidArgumentException` if assigned while `automaticallyEnablesExposureSignals` is true

> **Throws**

> `NSGenericException` if assigned without first obtaining exclusive access to the receiver using [lockForConfiguration:](lockforconfiguration%28%29.md).

## See Also

### Configuring exposure signals

- [activeExposureSignals](activeexposuresignals.md): Reports which characteristics the auto exposure system associates with the current scene. Auto exposure may adjust properties such as lens aperture size based on these factors. This property is key-value observable.
- [supportedExposureSignals](supportedexposuresignals.md): Indicates what values can be included in `enabledExposureSignals`. This property is key-value observable.
- [automaticallyEnablesExposureSignals](automaticallyenablesexposuresignals.md): When true (the default), capture sessions may automatically modify `enabledExposureSignals` based on changes to other device or session properties.
- [AVCaptureDeviceExposureSignal](../avcapturedeviceexposuresignal.md): Values that can be used to configure the auto exposure system via [enabledExposureSignals](enabledexposuresignals.md) and associated methods.
