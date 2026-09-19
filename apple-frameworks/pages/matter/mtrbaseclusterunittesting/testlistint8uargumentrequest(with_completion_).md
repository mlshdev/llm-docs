> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrbaseclusterunittesting/testlistint8uargumentrequest(with:completion:)

# testListInt8UArgumentRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func testListInt8UArgumentRequest(with params: MTRUnitTestingClusterTestListInt8UArgumentRequestParams, completion: @escaping @Sendable (MTRUnitTestingClusterBooleanResponseParams?, (any Error)?) -> Void)
```

```swift
func testListInt8UArgumentRequest(with params: MTRUnitTestingClusterTestListInt8UArgumentRequestParams) async throws -> MTRUnitTestingClusterBooleanResponseParams
```

# testListInt8UArgumentRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) testListInt8UArgumentRequestWithParams:(MTRUnitTestingClusterTestListInt8UArgumentRequestParams *) params completion:(void (^)(MTRUnitTestingClusterBooleanResponseParams *data, NSError *error)) completion;
```
