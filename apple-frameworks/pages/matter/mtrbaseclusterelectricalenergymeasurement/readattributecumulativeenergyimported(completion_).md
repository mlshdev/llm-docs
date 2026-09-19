> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterelectricalenergymeasurement/readattributecumulativeenergyimported(completion:)

# readAttributeCumulativeEnergyImported(completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func readAttributeCumulativeEnergyImported(completion: @escaping @Sendable (MTRElectricalEnergyMeasurementClusterEnergyMeasurementStruct?, (any Error)?) -> Void)
```

```swift
func readAttributeCumulativeEnergyImported() async throws -> MTRElectricalEnergyMeasurementClusterEnergyMeasurementStruct
```

# readAttributeCumulativeEnergyImportedWithCompletion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) readAttributeCumulativeEnergyImportedWithCompletion:(void (^)(MTRElectricalEnergyMeasurementClusterEnergyMeasurementStruct *value, NSError *error)) completion;
```
