> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrclusterunittesting/testlistint8ureverserequest(with:expectedvalues:expectedvalueinterval:completion:)

# testListInt8UReverseRequest(with:expectedValues:expectedValueInterval:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func testListInt8UReverseRequest(with params: MTRUnitTestingClusterTestListInt8UReverseRequestParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?, completion: @escaping @Sendable (MTRUnitTestingClusterTestListInt8UReverseResponseParams?, (any Error)?) -> Void)
```

```swift
func testListInt8UReverseRequest(with params: MTRUnitTestingClusterTestListInt8UReverseRequestParams, expectedValues expectedDataValueDictionaries: [[String : Any]]?, expectedValueInterval expectedValueIntervalMs: NSNumber?) async throws -> MTRUnitTestingClusterTestListInt8UReverseResponseParams
```

# testListInt8UReverseRequestWithParams:expectedValues:expectedValueInterval:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) testListInt8UReverseRequestWithParams:(MTRUnitTestingClusterTestListInt8UReverseRequestParams *) params expectedValues:(NSArray<NSDictionary<NSString *,id> *> *) expectedDataValueDictionaries expectedValueInterval:(NSNumber *) expectedValueIntervalMs completion:(void (^)(MTRUnitTestingClusterTestListInt8UReverseResponseParams *data, NSError *error)) completion;
```
