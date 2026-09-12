> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterunittesting/testliststructargumentrequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterunittesting/testliststructargumentrequest(with:completion:))

# testListStructArgumentRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func testListStructArgumentRequest(with params: MTRUnitTestingClusterTestListStructArgumentRequestParams, completion: @escaping @Sendable (MTRUnitTestingClusterBooleanResponseParams?, (any Error)?) -> Void)
```

```swift
func testListStructArgumentRequest(with params: MTRUnitTestingClusterTestListStructArgumentRequestParams) async throws -> MTRUnitTestingClusterBooleanResponseParams
```

# testListStructArgumentRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) testListStructArgumentRequestWithParams:(MTRUnitTestingClusterTestListStructArgumentRequestParams *) params completion:(void (^)(MTRUnitTestingClusterBooleanResponseParams *data, NSError *error)) completion;
```
