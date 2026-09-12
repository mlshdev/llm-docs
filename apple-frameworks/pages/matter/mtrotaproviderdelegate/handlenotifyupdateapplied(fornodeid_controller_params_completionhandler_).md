> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrotaproviderdelegate/handlenotifyupdateapplied(fornodeid:controller:params:completionhandler:)](https://developer.apple.com/documentation/matter/mtrotaproviderdelegate/handlenotifyupdateapplied(fornodeid:controller:params:completionhandler:))

# handleNotifyUpdateApplied(forNodeID:controller:params:completionHandler:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

## Declaration

```swift
optional func handleNotifyUpdateApplied(forNodeID nodeID: NSNumber, controller: MTRDeviceController, params: MTROtaSoftwareUpdateProviderClusterNotifyUpdateAppliedParams, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
optional func handleNotifyUpdateApplied(forNodeID nodeID: NSNumber, controller: MTRDeviceController, params: MTROtaSoftwareUpdateProviderClusterNotifyUpdateAppliedParams) async throws
```

# handleNotifyUpdateAppliedForNodeID:controller:params:completionHandler: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

## Declaration

```objectivec
- (void) handleNotifyUpdateAppliedForNodeID:(NSNumber *) nodeID controller:(MTRDeviceController *) controller params:(MTROtaSoftwareUpdateProviderClusterNotifyUpdateAppliedParams *) params completionHandler:(StatusCompletion) completionHandler;
```
