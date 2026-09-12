> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrxpcserverprotocol_mtrdevice/devicecontroller(_:nodeid:downloadlogof:timeout:completion:)](https://developer.apple.com/documentation/matter/mtrxpcserverprotocol_mtrdevice/devicecontroller(_:nodeid:downloadlogof:timeout:completion:))

# deviceController(\_:nodeID:downloadLogOf:timeout:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```swift
optional func deviceController(_ controller: UUID, nodeID: NSNumber, downloadLogOf type: MTRDiagnosticLogType, timeout: TimeInterval, completion: @escaping @Sendable (URL?, (any Error)?) -> Void)
```

```swift
optional func deviceController(_ controller: UUID, nodeID: NSNumber, downloadLogOf type: MTRDiagnosticLogType, timeout: TimeInterval) async throws -> URL
```

# deviceController:nodeID:downloadLogOfType:timeout:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```objectivec
- (void) deviceController:(NSUUID *) controller nodeID:(NSNumber *) nodeID downloadLogOfType:(MTRDiagnosticLogType) type timeout:(NSTimeInterval) timeout completion:(void (^)(NSURL *url, NSError *error)) completion;
```
