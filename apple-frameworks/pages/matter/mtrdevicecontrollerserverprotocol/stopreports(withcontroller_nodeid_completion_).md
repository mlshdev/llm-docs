> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerserverprotocol/stopreports(withcontroller:nodeid:completion:)](https://developer.apple.com/documentation/matter/mtrdevicecontrollerserverprotocol/stopreports(withcontroller:nodeid:completion:))

# stopReports(withController:nodeId:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
func stopReports(withController controller: Any?, nodeId: UInt64, completion: @escaping @Sendable () -> Void)
```

```swift
func stopReports(withController controller: Any?, nodeId: UInt64) async
```

# stopReportsWithController:nodeId:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
- (void) stopReportsWithController:(id) controller nodeId:(uint64_t) nodeId completion:(dispatch_block_t) completion;
```
