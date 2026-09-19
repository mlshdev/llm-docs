> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrclustergeneralcommissioning/setregulatoryconfigwith(_:expectedvalues:expectedvalueinterval:completion:)

# setRegulatoryConfigWith(\_:expectedValues:expectedValueInterval:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func setRegulatoryConfigWith(_ params: MTRGeneralCommissioningClusterSetRegulatoryConfigParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?, completion: @escaping @Sendable (MTRGeneralCommissioningClusterSetRegulatoryConfigResponseParams?, (any Error)?) -> Void)
```

```swift
func setRegulatoryConfigWith(_ params: MTRGeneralCommissioningClusterSetRegulatoryConfigParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?) async throws -> MTRGeneralCommissioningClusterSetRegulatoryConfigResponseParams
```

# setRegulatoryConfigWithParams:expectedValues:expectedValueInterval:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) setRegulatoryConfigWithParams:(MTRGeneralCommissioningClusterSetRegulatoryConfigParams *) params expectedValues:(NSArray<NSDictionary<NSString *,id> *> *) expectedDataValueDictionaries expectedValueInterval:(NSNumber *) expectedValueIntervalMs completion:(void (^)(MTRGeneralCommissioningClusterSetRegulatoryConfigResponseParams *data, NSError *error)) completion;
```
