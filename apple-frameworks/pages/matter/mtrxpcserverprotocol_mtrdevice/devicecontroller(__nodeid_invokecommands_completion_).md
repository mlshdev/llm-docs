> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrxpcserverprotocol_mtrdevice/devicecontroller(_:nodeid:invokecommands:completion:)](https://developer.apple.com/documentation/matter/mtrxpcserverprotocol_mtrdevice/devicecontroller(_:nodeid:invokecommands:completion:))

# deviceController(\_:nodeID:invokeCommands:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
optional func deviceController(_ controller: UUID, nodeID: NSNumber, invokeCommands commands: [[MTRCommandWithRequiredResponse]], completion: @escaping @Sendable ([[String : Any]]?, (any Error)?) -> Void)
```

```swift
optional func deviceController(_ controller: UUID, nodeID: NSNumber, invokeCommands commands: [[MTRCommandWithRequiredResponse]]) async throws -> [[String : Any]]
```

# deviceController:nodeID:invokeCommands:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) deviceController:(NSUUID *) controller nodeID:(NSNumber *) nodeID invokeCommands:(NSArray<NSArray<MTRCommandWithRequiredResponse *> *> *) commands completion:(MTRDeviceResponseHandler) completion;
```
