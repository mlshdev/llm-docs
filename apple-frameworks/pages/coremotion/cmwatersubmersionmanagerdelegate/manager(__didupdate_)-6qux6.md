> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatersubmersionmanagerdelegate/manager(_:didupdate:)-6qux6](https://developer.apple.com/documentation/coremotion/cmwatersubmersionmanagerdelegate/manager(_:didupdate:)-6qux6)

# manager(\_:didUpdate:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

Tells the delegate when a water submersion event occurs.

## Declaration

```swift
optional func manager(_ manager: CMWaterSubmersionManager, didUpdate event: CMWaterSubmersionEvent)
```

## Parameters

- `manager`: The manager for water submersion data.
- `event`: An event indicating that the submersion state has changed.

<a id="Discussion"></a>

## Discussion

Implement this method to respond to changes in the device’s submersion state.

```swift
nonisolated func manager(_ manager: CMWaterSubmersionManager, didUpdate event: CMWaterSubmersionEvent) {

    let submerged: Bool?
    switch event.state {
    case .unknown:
        logger.info("*** Received an unknown event ***")
        submerged = nil

    case .notSubmerged:
        logger.info("*** Not Submerged Event ***")
        submerged = false

    case .submerged:
        logger.info("*** Submerged Event ***")
        submerged = true

    @unknown default:
        fatalError("*** unknown event received: \(event.state) ***")
    }

    Task {
        await myAdd(event: event)
        if let submerged {
            await mySet(submerged: submerged)
        }
    }
}
```

## See Also

### Receiving updates

- [manager(\_:didUpdate:)](manager%28__didupdate_%29-7nhjb.md): Provides the delegate with a new set of pressure and depth measurements.
- [manager(\_:didUpdate:)](manager%28__didupdate_%29-18wua.md): Provides the delegate with updated water temperature data.
- [manager(\_:errorOccurred:)](manager%28__erroroccurred_%29.md): Tells the delegate when an error occurs.

# manager:didUpdateEvent: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Tells the delegate when a water submersion event occurs.

## Declaration

```objectivec
- (void) manager:(CMWaterSubmersionManager *) manager didUpdateEvent:(CMWaterSubmersionEvent *) event;
```

## Parameters

- `manager`: The manager for water submersion data.
- `event`: An event indicating that the submersion state has changed.

<a id="Discussion"></a>

## Discussion

Implement this method to respond to changes in the device’s submersion state.

```swift
nonisolated func manager(_ manager: CMWaterSubmersionManager, didUpdate event: CMWaterSubmersionEvent) {

    let submerged: Bool?
    switch event.state {
    case .unknown:
        logger.info("*** Received an unknown event ***")
        submerged = nil

    case .notSubmerged:
        logger.info("*** Not Submerged Event ***")
        submerged = false

    case .submerged:
        logger.info("*** Submerged Event ***")
        submerged = true

    @unknown default:
        fatalError("*** unknown event received: \(event.state) ***")
    }

    Task {
        await myAdd(event: event)
        if let submerged {
            await mySet(submerged: submerged)
        }
    }
}
```

## See Also

### Receiving updates

- [manager:didUpdateMeasurement:](manager%28__didupdate_%29-7nhjb.md): Provides the delegate with a new set of pressure and depth measurements.
- [manager:didUpdateTemperature:](manager%28__didupdate_%29-18wua.md): Provides the delegate with updated water temperature data.
- [manager:errorOccurred:](manager%28__erroroccurred_%29.md): Tells the delegate when an error occurs.
