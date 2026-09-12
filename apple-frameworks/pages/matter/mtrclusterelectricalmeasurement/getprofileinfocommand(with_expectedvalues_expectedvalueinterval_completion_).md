> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrclusterelectricalmeasurement/getprofileinfocommand(with:expectedvalues:expectedvalueinterval:completion:)](https://developer.apple.com/documentation/matter/mtrclusterelectricalmeasurement/getprofileinfocommand(with:expectedvalues:expectedvalueinterval:completion:))

# getProfileInfoCommand(with:expectedValues:expectedValueInterval:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ (deprecated in 18.2) · iPadOS 16.4+ (deprecated in 18.2) · Mac Catalyst 16.4+ (deprecated in 18.2) · macOS 13.3+ (deprecated in 15.2) · tvOS 16.4+ (deprecated in 18.2) · visionOS 1.0+ (deprecated in 2.2) · watchOS 9.4+ (deprecated in 11.2)

> This command is deprecated

## Declaration

```swift
func getProfileInfoCommand(with params: MTRElectricalMeasurementClusterGetProfileInfoCommandParams?, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func profileInfoCommand(with params: MTRElectricalMeasurementClusterGetProfileInfoCommandParams?, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?) async throws
```

# getProfileInfoCommandWithParams:expectedValues:expectedValueInterval:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ (deprecated in 18.2) · iPadOS 16.4+ (deprecated in 18.2) · Mac Catalyst 16.4+ (deprecated in 18.2) · macOS 13.3+ (deprecated in 15.2) · tvOS 16.4+ (deprecated in 18.2) · visionOS 1.0+ (deprecated in 2.2) · watchOS 9.4+ (deprecated in 11.2)

> This command is deprecated

## Declaration

```objectivec
- (void) getProfileInfoCommandWithParams:(MTRElectricalMeasurementClusterGetProfileInfoCommandParams *) params expectedValues:(NSArray<NSDictionary<NSString *,id> *> *) expectedDataValueDictionaries expectedValueInterval:(NSNumber *) expectedValueIntervalMs completion:(MTRStatusCompletion) completion;
```
