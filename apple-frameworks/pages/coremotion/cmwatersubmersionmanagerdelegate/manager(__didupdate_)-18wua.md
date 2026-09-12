> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatersubmersionmanagerdelegate/manager(_:didupdate:)-18wua](https://developer.apple.com/documentation/coremotion/cmwatersubmersionmanagerdelegate/manager(_:didupdate:)-18wua)

# manager(\_:didUpdate:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

Provides the delegate with updated water temperature data.

## Declaration

```swift
optional func manager(_ manager: CMWaterSubmersionManager, didUpdate measurement: CMWaterTemperature)
```

## Parameters

- `manager`: The manager for water submersion data.
- `measurement`: A data object that contains information about the water temperature and the measurement’s uncertainty.

<a id="Discussion"></a>

## Discussion

Implement this method to receive water temperature updates. The system sends temperature updates three times a second while submerged. When on the surface, the system provides updates at a slower rate, and may stop providing updates if the device isn’t moving.

```swift
nonisolated func manager(_ manager: CMWaterSubmersionManager, didUpdate measurement: CMWaterTemperature) {
    let temp = measurement.temperature
    let uncertainty = measurement.temperatureUncertainty
    let currentTemperature = "\(temp.value) +/- \(uncertainty.value) \(temp.unit)"

    logger.info(("*** \(currentTemperature) ***"))

    Task {
        await myAdd(temperature:measurement)
    }
}
```

## See Also

### Receiving updates

- [manager(\_:didUpdate:)](manager%28__didupdate_%29-6qux6.md): Tells the delegate when a water submersion event occurs.
- [manager(\_:didUpdate:)](manager%28__didupdate_%29-7nhjb.md): Provides the delegate with a new set of pressure and depth measurements.
- [manager(\_:errorOccurred:)](manager%28__erroroccurred_%29.md): Tells the delegate when an error occurs.

# manager:didUpdateTemperature: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Provides the delegate with updated water temperature data.

## Declaration

```objectivec
- (void) manager:(CMWaterSubmersionManager *) manager didUpdateTemperature:(CMWaterTemperature *) measurement;
```

## Parameters

- `manager`: The manager for water submersion data.
- `measurement`: A data object that contains information about the water temperature and the measurement’s uncertainty.

<a id="Discussion"></a>

## Discussion

Implement this method to receive water temperature updates. The system sends temperature updates three times a second while submerged. When on the surface, the system provides updates at a slower rate, and may stop providing updates if the device isn’t moving.

```swift
nonisolated func manager(_ manager: CMWaterSubmersionManager, didUpdate measurement: CMWaterTemperature) {
    let temp = measurement.temperature
    let uncertainty = measurement.temperatureUncertainty
    let currentTemperature = "\(temp.value) +/- \(uncertainty.value) \(temp.unit)"

    logger.info(("*** \(currentTemperature) ***"))

    Task {
        await myAdd(temperature:measurement)
    }
}
```

## See Also

### Receiving updates

- [manager:didUpdateEvent:](manager%28__didupdate_%29-6qux6.md): Tells the delegate when a water submersion event occurs.
- [manager:didUpdateMeasurement:](manager%28__didupdate_%29-7nhjb.md): Provides the delegate with a new set of pressure and depth measurements.
- [manager:errorOccurred:](manager%28__erroroccurred_%29.md): Tells the delegate when an error occurs.
