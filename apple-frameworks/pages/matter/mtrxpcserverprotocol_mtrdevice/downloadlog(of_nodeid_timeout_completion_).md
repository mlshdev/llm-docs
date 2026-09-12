> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrxpcserverprotocol_mtrdevice/downloadlog(of:nodeid:timeout:completion:)](https://developer.apple.com/documentation/matter/mtrxpcserverprotocol_mtrdevice/downloadlog(of:nodeid:timeout:completion:))

# downloadLog(of:nodeID:timeout:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```swift
func downloadLog(of type: MTRDiagnosticLogType, nodeID: NSNumber, timeout: TimeInterval, completion: @escaping @Sendable (URL?, (any Error)?) -> Void)
```

```swift
func downloadLog(of type: MTRDiagnosticLogType, nodeID: NSNumber, timeout: TimeInterval) async throws -> URL
```

# downloadLogOfType:nodeID:timeout:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```objectivec
- (void) downloadLogOfType:(MTRDiagnosticLogType) type nodeID:(NSNumber *) nodeID timeout:(NSTimeInterval) timeout completion:(void (^)(NSURL *url, NSError *error)) completion;
```
