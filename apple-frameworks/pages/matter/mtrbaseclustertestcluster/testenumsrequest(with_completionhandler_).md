> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustertestcluster/testenumsrequest(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustertestcluster/testenumsrequest(with:completionhandler:))

# testEnumsRequest(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use testEnumsRequestWithParams:completion:

## Declaration

```swift
func testEnumsRequest(with params: MTRTestClusterClusterTestEnumsRequestParams, completionHandler: @escaping @Sendable (MTRTestClusterClusterTestEnumsResponseParams?, (any Error)?) -> Void)
```

```swift
func testEnumsRequest(with params: MTRTestClusterClusterTestEnumsRequestParams) async throws -> MTRTestClusterClusterTestEnumsResponseParams
```

# testEnumsRequestWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use testEnumsRequestWithParams:completion:

## Declaration

```objectivec
- (void) testEnumsRequestWithParams:(MTRTestClusterClusterTestEnumsRequestParams *) params completionHandler:(void (^)(MTRTestClusterClusterTestEnumsResponseParams *data, NSError *error)) completionHandler;
```
