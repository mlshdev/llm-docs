> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterunittesting/testenumsrequest(with:completion:)](https://developer.apple.com/documentation/matter/mtrbaseclusterunittesting/testenumsrequest(with:completion:))

# testEnumsRequest(with:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
func testEnumsRequest(with params: MTRUnitTestingClusterTestEnumsRequestParams, completion: @escaping @Sendable (MTRUnitTestingClusterTestEnumsResponseParams?, (any Error)?) -> Void)
```

```swift
func testEnumsRequest(with params: MTRUnitTestingClusterTestEnumsRequestParams) async throws -> MTRUnitTestingClusterTestEnumsResponseParams
```

# testEnumsRequestWithParams:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) testEnumsRequestWithParams:(MTRUnitTestingClusterTestEnumsRequestParams *) params completion:(void (^)(MTRUnitTestingClusterTestEnumsResponseParams *data, NSError *error)) completion;
```
