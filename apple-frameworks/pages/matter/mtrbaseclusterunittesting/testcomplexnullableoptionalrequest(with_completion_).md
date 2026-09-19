> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterunittesting/testcomplexnullableoptionalrequest(with:completion:)

# testComplexNullableOptionalRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func testComplexNullableOptionalRequest(with params: MTRUnitTestingClusterTestComplexNullableOptionalRequestParams, completion: @escaping @Sendable (MTRUnitTestingClusterTestComplexNullableOptionalResponseParams?, (any Error)?) -> Void)
```

```swift
func testComplexNullableOptionalRequest(with params: MTRUnitTestingClusterTestComplexNullableOptionalRequestParams) async throws -> MTRUnitTestingClusterTestComplexNullableOptionalResponseParams
```

# testComplexNullableOptionalRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) testComplexNullableOptionalRequestWithParams:(MTRUnitTestingClusterTestComplexNullableOptionalRequestParams *) params completion:(void (^)(MTRUnitTestingClusterTestComplexNullableOptionalResponseParams *data, NSError *error)) completion;
```
