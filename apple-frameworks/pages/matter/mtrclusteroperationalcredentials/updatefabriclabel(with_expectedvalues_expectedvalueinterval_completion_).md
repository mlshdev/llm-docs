> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrclusteroperationalcredentials/updatefabriclabel(with:expectedvalues:expectedvalueinterval:completion:)

# updateFabricLabel(with:expectedValues:expectedValueInterval:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func updateFabricLabel(with params: MTROperationalCredentialsClusterUpdateFabricLabelParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?, completion: @escaping @Sendable (MTROperationalCredentialsClusterNOCResponseParams?, (any Error)?) -> Void)
```

```swift
func updateFabricLabel(with params: MTROperationalCredentialsClusterUpdateFabricLabelParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?) async throws -> MTROperationalCredentialsClusterNOCResponseParams
```

# updateFabricLabelWithParams:expectedValues:expectedValueInterval:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) updateFabricLabelWithParams:(MTROperationalCredentialsClusterUpdateFabricLabelParams *) params expectedValues:(NSArray<NSDictionary<NSString *,id> *> *) expectedDataValueDictionaries expectedValueInterval:(NSNumber *) expectedValueIntervalMs completion:(void (^)(MTROperationalCredentialsClusterNOCResponseParams *data, NSError *error)) completion;
```
