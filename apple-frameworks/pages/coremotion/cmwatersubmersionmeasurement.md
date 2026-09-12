> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatersubmersionmeasurement](https://developer.apple.com/documentation/coremotion/cmwatersubmersionmeasurement)

# CMWaterSubmersionMeasurement (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

An update that contains data about the pressure and depth.

## Declaration

```swift
class CMWaterSubmersionMeasurement
```

## Topics

### Accessing the data

- [date](cmwatersubmersionmeasurement/date.md): The time and date when the system recorded the measurements.
- [depth](cmwatersubmersionmeasurement/depth.md): The depth under water.
- [pressure](cmwatersubmersionmeasurement/pressure.md): The water pressure.
- [surfacePressure](cmwatersubmersionmeasurement/surfacepressure.md): The surface air pressure.
- [submersionState](cmwatersubmersionmeasurement/submersionstate.md): The depth state.
- [CMWaterSubmersionMeasurement.DepthState](cmwatersubmersionmeasurement/depthstate.md): A state based on the device’s depth under water.

### Initializers

- [init(coder:)](cmwatersubmersionmeasurement/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Water submersion

- [Accessing submersion data](accessing-submersion-data.md): Use a water-submersion manager to receive water pressure, temperature, and depth data on Apple Watch Ultra.
- [CMWaterSubmersionManager](cmwatersubmersionmanager.md): An object for managing the collection of pressure and temperature data during submersion.
- [CMWaterSubmersionManagerDelegate](cmwatersubmersionmanagerdelegate.md): A delegate that receives updates about ambient pressure, water pressure, water temperature, and submersion events.
- [CMWaterSubmersionEvent](cmwatersubmersionevent.md): An event indicating that the device’s submersion state has changed.
- [CMWaterTemperature](cmwatertemperature.md): An update that contains data about the water temperature.

# CMWaterSubmersionMeasurement (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An update that contains data about the pressure and depth.

## Declaration

```objectivec
@interface CMWaterSubmersionMeasurement : NSObject
```

## Topics

### Accessing the data

- [date](cmwatersubmersionmeasurement/date.md): The time and date when the system recorded the measurements.
- [depth](cmwatersubmersionmeasurement/depth.md): The depth under water.
- [pressure](cmwatersubmersionmeasurement/pressure.md): The water pressure.
- [surfacePressure](cmwatersubmersionmeasurement/surfacepressure.md): The surface air pressure.
- [submersionState](cmwatersubmersionmeasurement/submersionstate.md): The depth state.
- [CMWaterSubmersionDepthState](cmwatersubmersionmeasurement/depthstate.md): A state based on the device’s depth under water.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Water submersion

- [Accessing submersion data](accessing-submersion-data.md): Use a water-submersion manager to receive water pressure, temperature, and depth data on Apple Watch Ultra.
- [CMWaterSubmersionManager](cmwatersubmersionmanager.md): An object for managing the collection of pressure and temperature data during submersion.
- [CMWaterSubmersionManagerDelegate](cmwatersubmersionmanagerdelegate.md): A delegate that receives updates about ambient pressure, water pressure, water temperature, and submersion events.
- [CMWaterSubmersionEvent](cmwatersubmersionevent.md): An event indicating that the device’s submersion state has changed.
- [CMWaterTemperature](cmwatertemperature.md): An update that contains data about the water temperature.
