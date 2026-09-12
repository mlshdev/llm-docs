> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerserverprotocol/downloadlog(withcontroller:nodeid:type:timeout:completion:)](https://developer.apple.com/documentation/matter/mtrdevicecontrollerserverprotocol/downloadlog(withcontroller:nodeid:type:timeout:completion:))

# downloadLog(withController:nodeId:type:timeout:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
optional func downloadLog(withController controller: Any?, nodeId: NSNumber, type: MTRDiagnosticLogType, timeout: TimeInterval, completion: @escaping @Sendable (String?, (any Error)?) -> Void)
```

```swift
optional func downloadLog(withController controller: Any?, nodeId: NSNumber, type: MTRDiagnosticLogType, timeout: TimeInterval) async throws -> String
```

# downloadLogWithController:nodeId:type:timeout:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) downloadLogWithController:(id) controller nodeId:(NSNumber *) nodeId type:(MTRDiagnosticLogType) type timeout:(NSTimeInterval) timeout completion:(void (^)(NSString *url, NSError *error)) completion;
```
