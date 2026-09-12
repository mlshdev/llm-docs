> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkdevice/local()](https://developer.apple.com/documentation/healthkit/hkdevice/local())

# local() (Swift)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

returns a device object that represents the current device.

## Declaration

```swift
class func local() -> HKDevice
```

<a id="return-value"></a>

## Return Value

A device object representing the hardware (iPhone, iPod Touch, or Apple Watch) that is running the app.

## See Also

### Creating Device Objects

- [init(name:manufacturer:model:hardwareVersion:firmwareVersion:softwareVersion:localIdentifier:udiDeviceIdentifier:)](init%28name_manufacturer_model_hardwareversion_firmwareversion_softwareversion_localidentifier_udideviceidentifier_%29-3663q.md): Initializes a new device object.

# localDevice (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

returns a device object that represents the current device.

## Declaration

```objectivec
+ (HKDevice *) localDevice;
```

<a id="return-value"></a>

## Return Value

A device object representing the hardware (iPhone, iPod Touch, or Apple Watch) that is running the app.

## See Also

### Creating Device Objects

- [initWithName:manufacturer:model:hardwareVersion:firmwareVersion:softwareVersion:localIdentifier:UDIDeviceIdentifier:](init%28name_manufacturer_model_hardwareversion_firmwareversion_softwareversion_localidentifier_udideviceidentifier_%29-3663q.md): Initializes a new device object.
