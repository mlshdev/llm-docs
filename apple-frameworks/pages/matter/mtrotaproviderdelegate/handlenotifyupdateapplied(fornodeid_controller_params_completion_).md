> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrotaproviderdelegate/handlenotifyupdateapplied(fornodeid:controller:params:completion:)

# handleNotifyUpdateApplied(forNodeID:controller:params:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
optional func handleNotifyUpdateApplied(forNodeID nodeID: NSNumber, controller: MTRDeviceController, params: MTROTASoftwareUpdateProviderClusterNotifyUpdateAppliedParams, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
optional func handleNotifyUpdateApplied(forNodeID nodeID: NSNumber, controller: MTRDeviceController, params: MTROTASoftwareUpdateProviderClusterNotifyUpdateAppliedParams) async throws
```

# handleNotifyUpdateAppliedForNodeID:controller:params:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) handleNotifyUpdateAppliedForNodeID:(NSNumber *) nodeID controller:(MTRDeviceController *) controller params:(MTROTASoftwareUpdateProviderClusterNotifyUpdateAppliedParams *) params completion:(MTRStatusCompletion) completion;
```
