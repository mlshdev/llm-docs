> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterelectricalmeasurement/getprofilecommand(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterelectricalmeasurement/getprofilecommand(with:completion:))

# getProfileCommand(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ (deprecated in 18.2) · iPadOS 16.4+ (deprecated in 18.2) · Mac Catalyst 16.4+ (deprecated in 18.2) · macOS 13.3+ (deprecated in 15.2) · tvOS 16.4+ (deprecated in 18.2) · visionOS 1.0+ (deprecated in 2.2) · watchOS 9.4+ (deprecated in 11.2)

> This command is deprecated

## Declaration

```swift
func getProfileCommand(with params: MTRElectricalMeasurementClusterGetMeasurementProfileCommandParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func profileCommand(with params: MTRElectricalMeasurementClusterGetMeasurementProfileCommandParams) async throws
```

# getMeasurementProfileCommandWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ (deprecated in 18.2) · iPadOS 16.4+ (deprecated in 18.2) · Mac Catalyst 16.4+ (deprecated in 18.2) · macOS 13.3+ (deprecated in 15.2) · tvOS 16.4+ (deprecated in 18.2) · visionOS 1.0+ (deprecated in 2.2) · watchOS 9.4+ (deprecated in 11.2)

> This command is deprecated

## Declaration

```objectivec
- (void) getMeasurementProfileCommandWithParams:(MTRElectricalMeasurementClusterGetMeasurementProfileCommandParams *) params completion:(MTRStatusCompletion) completion;
```
