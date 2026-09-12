> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterelectricalenergymeasurement/readattributecumulativeenergyreset(completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterelectricalenergymeasurement/readattributecumulativeenergyreset(completion:))

# readAttributeCumulativeEnergyReset(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func readAttributeCumulativeEnergyReset(completion: @escaping @Sendable (MTRElectricalEnergyMeasurementClusterCumulativeEnergyResetStruct?, (any Error)?) -> Void)
```

```swift
func readAttributeCumulativeEnergyReset() async throws -> MTRElectricalEnergyMeasurementClusterCumulativeEnergyResetStruct
```

# readAttributeCumulativeEnergyResetWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) readAttributeCumulativeEnergyResetWithCompletion:(void (^)(MTRElectricalEnergyMeasurementClusterCumulativeEnergyResetStruct *value, NSError *error)) completion;
```
