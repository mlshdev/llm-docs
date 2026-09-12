> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatersubmersionmanagerdelegate/manager(_:didupdate:)-7nhjb](https://developer.apple.com/documentation/coremotion/cmwatersubmersionmanagerdelegate/manager(_:didupdate:)-7nhjb)

# manager(\_:didUpdate:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

Provides the delegate with a new set of pressure and depth measurements.

## Declaration

```swift
optional func manager(_ manager: CMWaterSubmersionManager, didUpdate measurement: CMWaterSubmersionMeasurement)
```

## Parameters

- `manager`: The manager for water submersion data.
- `measurement`: A data object that contains information about the pressure and depth.

<a id="Discussion"></a>

## Discussion

Implement this method to receive updated surface pressure, water pressure, and depth data. The system sends measurement updates three times a second while submerged. When on the surface, the system provides updates at a slower rate, and may stop providing updates if the device isn’t moving.

```swift
nonisolated func manager(_ manager: CMWaterSubmersionManager, didUpdate measurement: CMWaterSubmersionMeasurement) {

    logger.info("*** Received a depth measurement ***")

    let currentDepth: String
    if let depth = measurement.depth {
        currentDepth = "\(depth.value) \(depth.unit)"
    } else {
        currentDepth = "None"
    }

    let currentSurfacePressure: String
    let surfacePressure = measurement.surfacePressure
    currentSurfacePressure = "\(surfacePressure.value) \(surfacePressure.unit)"

    let currentPressure: String
    if let pressure = measurement.pressure {
        currentPressure = "\(pressure.value) \(pressure.unit)"
    } else {
        currentPressure = "None"
    }

    logger.info("*** Depth: \(currentDepth) ***")
    logger.info("*** Surface Pressure: \(currentSurfacePressure) ***")
    logger.info("*** Pressure: \(currentPressure) ***")

    let submerged: Bool?
    switch measurement.submersionState {
    case .unknown:
        logger.info("*** Unknown Depth ***")
        submerged = nil
    case .notSubmerged:
        logger.info("*** Not Submerged ***")
        submerged = false
    case .submergedShallow:
        logger.info("*** Shallow Depth ***")
        submerged = true
    case .submergedDeep:
        logger.info("*** Deep Depth ***")
        submerged = true
    case .approachingMaxDepth:
        logger.info("*** Approaching Max Depth ***")
        submerged = true
    case .pastMaxDepth:
        logger.info("*** Past Max Depth ***")
        submerged = true
    case .sensorDepthError:
        logger.info("*** A depth error has occurred. ***")
        submerged = nil
    @unknown default:
        fatalError("*** An unknown measurement depth state: \(measurement.submersionState)")
    }

    Task {
        await myAdd(measurement: measurement)
        if let submerged {
            await mySet(submerged: submerged)
        }
    }
}
```

## See Also

### Receiving updates

- [manager(\_:didUpdate:)](manager%28__didupdate_%29-6qux6.md): Tells the delegate when a water submersion event occurs.
- [manager(\_:didUpdate:)](manager%28__didupdate_%29-18wua.md): Provides the delegate with updated water temperature data.
- [manager(\_:errorOccurred:)](manager%28__erroroccurred_%29.md): Tells the delegate when an error occurs.

# manager:didUpdateMeasurement: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Provides the delegate with a new set of pressure and depth measurements.

## Declaration

```objectivec
- (void) manager:(CMWaterSubmersionManager *) manager didUpdateMeasurement:(CMWaterSubmersionMeasurement *) measurement;
```

## Parameters

- `manager`: The manager for water submersion data.
- `measurement`: A data object that contains information about the pressure and depth.

<a id="Discussion"></a>

## Discussion

Implement this method to receive updated surface pressure, water pressure, and depth data. The system sends measurement updates three times a second while submerged. When on the surface, the system provides updates at a slower rate, and may stop providing updates if the device isn’t moving.

```swift
nonisolated func manager(_ manager: CMWaterSubmersionManager, didUpdate measurement: CMWaterSubmersionMeasurement) {

    logger.info("*** Received a depth measurement ***")

    let currentDepth: String
    if let depth = measurement.depth {
        currentDepth = "\(depth.value) \(depth.unit)"
    } else {
        currentDepth = "None"
    }

    let currentSurfacePressure: String
    let surfacePressure = measurement.surfacePressure
    currentSurfacePressure = "\(surfacePressure.value) \(surfacePressure.unit)"

    let currentPressure: String
    if let pressure = measurement.pressure {
        currentPressure = "\(pressure.value) \(pressure.unit)"
    } else {
        currentPressure = "None"
    }

    logger.info("*** Depth: \(currentDepth) ***")
    logger.info("*** Surface Pressure: \(currentSurfacePressure) ***")
    logger.info("*** Pressure: \(currentPressure) ***")

    let submerged: Bool?
    switch measurement.submersionState {
    case .unknown:
        logger.info("*** Unknown Depth ***")
        submerged = nil
    case .notSubmerged:
        logger.info("*** Not Submerged ***")
        submerged = false
    case .submergedShallow:
        logger.info("*** Shallow Depth ***")
        submerged = true
    case .submergedDeep:
        logger.info("*** Deep Depth ***")
        submerged = true
    case .approachingMaxDepth:
        logger.info("*** Approaching Max Depth ***")
        submerged = true
    case .pastMaxDepth:
        logger.info("*** Past Max Depth ***")
        submerged = true
    case .sensorDepthError:
        logger.info("*** A depth error has occurred. ***")
        submerged = nil
    @unknown default:
        fatalError("*** An unknown measurement depth state: \(measurement.submersionState)")
    }

    Task {
        await myAdd(measurement: measurement)
        if let submerged {
            await mySet(submerged: submerged)
        }
    }
}
```

## See Also

### Receiving updates

- [manager:didUpdateEvent:](manager%28__didupdate_%29-6qux6.md): Tells the delegate when a water submersion event occurs.
- [manager:didUpdateTemperature:](manager%28__didupdate_%29-18wua.md): Provides the delegate with updated water temperature data.
- [manager:errorOccurred:](manager%28__erroroccurred_%29.md): Tells the delegate when an error occurs.
