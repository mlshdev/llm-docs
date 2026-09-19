> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrclusteroperationalcredentials/attestationrequest(with:expectedvalues:expectedvalueinterval:completion:)

# attestationRequest(with:expectedValues:expectedValueInterval:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func attestationRequest(with params: MTROperationalCredentialsClusterAttestationRequestParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?, completion: @escaping @Sendable (MTROperationalCredentialsClusterAttestationResponseParams?, (any Error)?) -> Void)
```

```swift
func attestationRequest(with params: MTROperationalCredentialsClusterAttestationRequestParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?) async throws -> MTROperationalCredentialsClusterAttestationResponseParams
```

# attestationRequestWithParams:expectedValues:expectedValueInterval:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) attestationRequestWithParams:(MTROperationalCredentialsClusterAttestationRequestParams *) params expectedValues:(NSArray<NSDictionary<NSString *,id> *> *) expectedDataValueDictionaries expectedValueInterval:(NSNumber *) expectedValueIntervalMs completion:(void (^)(MTROperationalCredentialsClusterAttestationResponseParams *data, NSError *error)) completion;
```
