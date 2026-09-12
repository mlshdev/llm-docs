> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrotaproviderdelegate/handleapplyupdaterequest(fornodeid:controller:params:completionhandler:)](https://developer.apple.com/documentation/matter/mtrotaproviderdelegate/handleapplyupdaterequest(fornodeid:controller:params:completionhandler:))

# handleApplyUpdateRequest(forNodeID:controller:params:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

## Declaration

```swift
optional func handleApplyUpdateRequest(forNodeID nodeID: NSNumber, controller: MTRDeviceController, params: MTROtaSoftwareUpdateProviderClusterApplyUpdateRequestParams, completionHandler: @escaping @Sendable (MTROtaSoftwareUpdateProviderClusterApplyUpdateResponseParams?, (any Error)?) -> Void)
```

```swift
optional func handleApplyUpdateRequest(forNodeID nodeID: NSNumber, controller: MTRDeviceController, params: MTROtaSoftwareUpdateProviderClusterApplyUpdateRequestParams) async throws -> MTROtaSoftwareUpdateProviderClusterApplyUpdateResponseParams
```

# handleApplyUpdateRequestForNodeID:controller:params:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

## Declaration

```objectivec
- (void) handleApplyUpdateRequestForNodeID:(NSNumber *) nodeID controller:(MTRDeviceController *) controller params:(MTROtaSoftwareUpdateProviderClusterApplyUpdateRequestParams *) params completionHandler:(void (^)(MTROtaSoftwareUpdateProviderClusterApplyUpdateResponseParams *data, NSError *error)) completionHandler;
```
