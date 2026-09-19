> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterunittesting/testlistint8ureverserequest(with:completion:)

# testListInt8UReverseRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func testListInt8UReverseRequest(with params: MTRUnitTestingClusterTestListInt8UReverseRequestParams, completion: @escaping @Sendable (MTRUnitTestingClusterTestListInt8UReverseResponseParams?, (any Error)?) -> Void)
```

```swift
func testListInt8UReverseRequest(with params: MTRUnitTestingClusterTestListInt8UReverseRequestParams) async throws -> MTRUnitTestingClusterTestListInt8UReverseResponseParams
```

# testListInt8UReverseRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) testListInt8UReverseRequestWithParams:(MTRUnitTestingClusterTestListInt8UReverseRequestParams *) params completion:(void (^)(MTRUnitTestingClusterTestListInt8UReverseResponseParams *data, NSError *error)) completion;
```
