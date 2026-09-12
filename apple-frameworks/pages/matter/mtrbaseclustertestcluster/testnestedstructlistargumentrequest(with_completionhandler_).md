> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustertestcluster/testnestedstructlistargumentrequest(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustertestcluster/testnestedstructlistargumentrequest(with:completionhandler:))

# testNestedStructListArgumentRequest(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use testNestedStructListArgumentRequestWithParams:completion:

## Declaration

```swift
func testNestedStructListArgumentRequest(with params: MTRTestClusterClusterTestNestedStructListArgumentRequestParams, completionHandler: @escaping @Sendable (MTRTestClusterClusterBooleanResponseParams?, (any Error)?) -> Void)
```

```swift
func testNestedStructListArgumentRequest(with params: MTRTestClusterClusterTestNestedStructListArgumentRequestParams) async throws -> MTRTestClusterClusterBooleanResponseParams
```

# testNestedStructListArgumentRequestWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use testNestedStructListArgumentRequestWithParams:completion:

## Declaration

```objectivec
- (void) testNestedStructListArgumentRequestWithParams:(MTRTestClusterClusterTestNestedStructListArgumentRequestParams *) params completionHandler:(void (^)(MTRTestClusterClusterBooleanResponseParams *data, NSError *error)) completionHandler;
```
