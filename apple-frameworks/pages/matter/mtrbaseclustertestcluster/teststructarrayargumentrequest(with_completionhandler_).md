> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustertestcluster/teststructarrayargumentrequest(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustertestcluster/teststructarrayargumentrequest(with:completionhandler:))

# testStructArrayArgumentRequest(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use testStructArrayArgumentRequestWithParams:completion:

## Declaration

```swift
func testStructArrayArgumentRequest(with params: MTRTestClusterClusterTestStructArrayArgumentRequestParams, completionHandler: @escaping @Sendable (MTRTestClusterClusterTestStructArrayArgumentResponseParams?, (any Error)?) -> Void)
```

```swift
func testStructArrayArgumentRequest(with params: MTRTestClusterClusterTestStructArrayArgumentRequestParams) async throws -> MTRTestClusterClusterTestStructArrayArgumentResponseParams
```

# testStructArrayArgumentRequestWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use testStructArrayArgumentRequestWithParams:completion:

## Declaration

```objectivec
- (void) testStructArrayArgumentRequestWithParams:(MTRTestClusterClusterTestStructArrayArgumentRequestParams *) params completionHandler:(void (^)(MTRTestClusterClusterTestStructArrayArgumentResponseParams *data, NSError *error)) completionHandler;
```
