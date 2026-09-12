> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbasedevice/invokecommand(withendpointid:clusterid:commandid:commandfields:timedinvoketimeout:clientqueue:completion:)](https://developer.apple.com/documentation/matter/mtrbasedevice/invokecommand(withendpointid:clusterid:commandid:commandfields:timedinvoketimeout:clientqueue:completion:))

# invokeCommand(withEndpointId:clusterId:commandId:commandFields:timedInvokeTimeout:clientQueue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use invokeCommandWithEndpointID:clusterID:commandID:commandFields:timedInvokeTimeout:queue:completion

## Declaration

```swift
func invokeCommand(withEndpointId endpointId: NSNumber, clusterId: NSNumber, commandId: NSNumber, commandFields: Any, timedInvokeTimeout timeoutMs: NSNumber?, clientQueue: dispatch_queue_t, completion: @escaping @Sendable ([[String : Any]]?, (any Error)?) -> Void)
```

```swift
func invokeCommand(withEndpointId endpointId: NSNumber, clusterId: NSNumber, commandId: NSNumber, commandFields: Any, timedInvokeTimeout timeoutMs: NSNumber?, clientQueue: dispatch_queue_t) async throws -> [[String : Any]]
```

# invokeCommandWithEndpointId:clusterId:commandId:commandFields:timedInvokeTimeout:clientQueue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use invokeCommandWithEndpointID:clusterID:commandID:commandFields:timedInvokeTimeout:queue:completion

## Declaration

```objectivec
- (void) invokeCommandWithEndpointId:(NSNumber *) endpointId clusterId:(NSNumber *) clusterId commandId:(NSNumber *) commandId commandFields:(id) commandFields timedInvokeTimeout:(NSNumber *) timeoutMs clientQueue:(dispatch_queue_t) clientQueue completion:(MTRDeviceResponseHandler) completion;
```
