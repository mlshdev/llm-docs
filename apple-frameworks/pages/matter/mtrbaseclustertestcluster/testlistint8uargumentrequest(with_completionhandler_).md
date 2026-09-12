> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustertestcluster/testlistint8uargumentrequest(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustertestcluster/testlistint8uargumentrequest(with:completionhandler:))

# testListInt8UArgumentRequest(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use testListInt8UArgumentRequestWithParams:completion:

## Declaration

```swift
func testListInt8UArgumentRequest(with params: MTRTestClusterClusterTestListInt8UArgumentRequestParams, completionHandler: @escaping @Sendable (MTRTestClusterClusterBooleanResponseParams?, (any Error)?) -> Void)
```

```swift
func testListInt8UArgumentRequest(with params: MTRTestClusterClusterTestListInt8UArgumentRequestParams) async throws -> MTRTestClusterClusterBooleanResponseParams
```

# testListInt8UArgumentRequestWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use testListInt8UArgumentRequestWithParams:completion:

## Declaration

```objectivec
- (void) testListInt8UArgumentRequestWithParams:(MTRTestClusterClusterTestListInt8UArgumentRequestParams *) params completionHandler:(void (^)(MTRTestClusterClusterBooleanResponseParams *data, NSError *error)) completionHandler;
```
