> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrxpcserverprotocol_mtrdevicecontroller/devicecontroller(_:getnodeswithstoreddatawithreply:)](https://developer.apple.com/documentation/matter/mtrxpcserverprotocol_mtrdevicecontroller/devicecontroller(_:getnodeswithstoreddatawithreply:))

# deviceController(\_:getNodesWithStoredDataWithReply:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```swift
optional func deviceController(_ controller: UUID, getNodesWithStoredDataWithReply reply: @escaping @Sendable ([NSNumber]) -> Void)
```

```swift
optional func deviceControllerGetNodesWithStoredData(_ controller: UUID) async -> [NSNumber]
```

# deviceController:getNodesWithStoredDataWithReply: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

## Declaration

```objectivec
- (void) deviceController:(NSUUID *) controller getNodesWithStoredDataWithReply:(void (^)(NSArray<NSNumber *> *)) reply;
```
