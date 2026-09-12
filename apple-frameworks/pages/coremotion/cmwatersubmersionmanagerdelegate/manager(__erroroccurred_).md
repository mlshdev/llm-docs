> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatersubmersionmanagerdelegate/manager(_:erroroccurred:)](https://developer.apple.com/documentation/coremotion/cmwatersubmersionmanagerdelegate/manager(_:erroroccurred:))

# manager(\_:errorOccurred:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

Tells the delegate when an error occurs.

## Declaration

```swift
optional func manager(_ manager: CMWaterSubmersionManager, errorOccurred error: any Error)
```

## Parameters

- `manager`: The manager for water submersion data.
- `error`: An error object that contains information about the error.

## Mentioned In

- [Accessing submersion data](../accessing-submersion-data.md)

<a id="Discussion"></a>

## Discussion

Implement this method to respond to errors.

```swift
// Respond to errors.
nonisolated func manager(_ manager: CMWaterSubmersionManager, errorOccurred error: Error) {
    logger.error("*** An error occurred: \(error.localizedDescription) ***")
}
```

## See Also

### Receiving updates

- [manager(\_:didUpdate:)](manager%28__didupdate_%29-6qux6.md): Tells the delegate when a water submersion event occurs.
- [manager(\_:didUpdate:)](manager%28__didupdate_%29-7nhjb.md): Provides the delegate with a new set of pressure and depth measurements.
- [manager(\_:didUpdate:)](manager%28__didupdate_%29-18wua.md): Provides the delegate with updated water temperature data.

# manager:errorOccurred: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Tells the delegate when an error occurs.

## Declaration

```objectivec
- (void) manager:(CMWaterSubmersionManager *) manager errorOccurred:(NSError *) error;
```

## Parameters

- `manager`: The manager for water submersion data.
- `error`: An error object that contains information about the error.

## Mentioned In

- [Accessing submersion data](../accessing-submersion-data.md)

<a id="Discussion"></a>

## Discussion

Implement this method to respond to errors.

```swift
// Respond to errors.
nonisolated func manager(_ manager: CMWaterSubmersionManager, errorOccurred error: Error) {
    logger.error("*** An error occurred: \(error.localizedDescription) ***")
}
```

## See Also

### Receiving updates

- [manager:didUpdateEvent:](manager%28__didupdate_%29-6qux6.md): Tells the delegate when a water submersion event occurs.
- [manager:didUpdateMeasurement:](manager%28__didupdate_%29-7nhjb.md): Provides the delegate with a new set of pressure and depth measurements.
- [manager:didUpdateTemperature:](manager%28__didupdate_%29-18wua.md): Provides the delegate with updated water temperature data.
