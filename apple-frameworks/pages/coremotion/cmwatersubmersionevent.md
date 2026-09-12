> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatersubmersionevent](https://developer.apple.com/documentation/coremotion/cmwatersubmersionevent)

# CMWaterSubmersionEvent (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

An event indicating that the device’s submersion state has changed.

## Declaration

```swift
class CMWaterSubmersionEvent
```

## Topics

### Accessing event data

- [date](cmwatersubmersionevent/date.md): The time and date of the event.
- [state](cmwatersubmersionevent/state-swift.property.md): The new submersion state.
- [CMWaterSubmersionEvent.State](cmwatersubmersionevent/state-swift.enum.md): The device’s submersion state.

### Initializers

- [init(coder:)](cmwatersubmersionevent/init%28coder_%29.md)

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
- [CMWaterSubmersionMeasurement](cmwatersubmersionmeasurement.md): An update that contains data about the pressure and depth.
- [CMWaterTemperature](cmwatertemperature.md): An update that contains data about the water temperature.

# CMWaterSubmersionEvent (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An event indicating that the device’s submersion state has changed.

## Declaration

```objectivec
@interface CMWaterSubmersionEvent : NSObject
```

## Topics

### Accessing event data

- [date](cmwatersubmersionevent/date.md): The time and date of the event.
- [state](cmwatersubmersionevent/state-swift.property.md): The new submersion state.
- [CMWaterSubmersionState](cmwatersubmersionevent/state-swift.enum.md): The device’s submersion state.

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
- [CMWaterSubmersionMeasurement](cmwatersubmersionmeasurement.md): An update that contains data about the pressure and depth.
- [CMWaterTemperature](cmwatertemperature.md): An update that contains data about the water temperature.
