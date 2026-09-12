> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclustertestcluster/testemittestfabricscopedeventrequest(with:completionhandler:)](https://developer.apple.com/documentation/matter/mtrbaseclustertestcluster/testemittestfabricscopedeventrequest(with:completionhandler:))

# testEmitTestFabricScopedEventRequest(with:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use testEmitTestFabricScopedEventRequestWithParams:completion:

## Declaration

```swift
func testEmitTestFabricScopedEventRequest(with params: MTRTestClusterClusterTestEmitTestFabricScopedEventRequestParams, completionHandler: @escaping @Sendable (MTRTestClusterClusterTestEmitTestFabricScopedEventResponseParams?, (any Error)?) -> Void)
```

```swift
func testEmitTestFabricScopedEventRequest(with params: MTRTestClusterClusterTestEmitTestFabricScopedEventRequestParams) async throws -> MTRTestClusterClusterTestEmitTestFabricScopedEventResponseParams
```

# testEmitTestFabricScopedEventRequestWithParams:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use testEmitTestFabricScopedEventRequestWithParams:completion:

## Declaration

```objectivec
- (void) testEmitTestFabricScopedEventRequestWithParams:(MTRTestClusterClusterTestEmitTestFabricScopedEventRequestParams *) params completionHandler:(void (^)(MTRTestClusterClusterTestEmitTestFabricScopedEventResponseParams *data, NSError *error)) completionHandler;
```
