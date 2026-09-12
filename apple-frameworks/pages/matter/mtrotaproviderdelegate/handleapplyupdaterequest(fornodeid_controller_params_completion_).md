> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrotaproviderdelegate/handleapplyupdaterequest(fornodeid:controller:params:completion:)](https://developer.apple.com/documentation/matter/mtrotaproviderdelegate/handleapplyupdaterequest(fornodeid:controller:params:completion:))

# handleApplyUpdateRequest(forNodeID:controller:params:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
optional func handleApplyUpdateRequest(forNodeID nodeID: NSNumber, controller: MTRDeviceController, params: MTROTASoftwareUpdateProviderClusterApplyUpdateRequestParams, completion: @escaping @Sendable (MTROTASoftwareUpdateProviderClusterApplyUpdateResponseParams?, (any Error)?) -> Void)
```

```swift
optional func handleApplyUpdateRequest(forNodeID nodeID: NSNumber, controller: MTRDeviceController, params: MTROTASoftwareUpdateProviderClusterApplyUpdateRequestParams) async throws -> MTROTASoftwareUpdateProviderClusterApplyUpdateResponseParams
```

# handleApplyUpdateRequestForNodeID:controller:params:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) handleApplyUpdateRequestForNodeID:(NSNumber *) nodeID controller:(MTRDeviceController *) controller params:(MTROTASoftwareUpdateProviderClusterApplyUpdateRequestParams *) params completion:(void (^)(MTROTASoftwareUpdateProviderClusterApplyUpdateResponseParams *data, NSError *error)) completion;
```
