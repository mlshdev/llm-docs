> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontrollerserverprotocol/subscribe(withcontroller:nodeid:mininterval:maxinterval:params:shouldcache:completion:)](https://developer.apple.com/documentation/matter/mtrdevicecontrollerserverprotocol/subscribe(withcontroller:nodeid:mininterval:maxinterval:params:shouldcache:completion:))

# subscribe(withController:nodeId:minInterval:maxInterval:params:shouldCache:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
func subscribe(withController controller: Any?, nodeId: UInt64, minInterval: NSNumber, maxInterval: NSNumber, params: [String : Any]?, shouldCache: Bool, completion: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func subscribe(withController controller: Any?, nodeId: UInt64, minInterval: NSNumber, maxInterval: NSNumber, params: [String : Any]?, shouldCache: Bool) async throws
```

# subscribeWithController:nodeId:minInterval:maxInterval:params:shouldCache:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
- (void) subscribeWithController:(id) controller nodeId:(uint64_t) nodeId minInterval:(NSNumber *) minInterval maxInterval:(NSNumber *) maxInterval params:(NSDictionary<NSString *,id> *) params shouldCache:(BOOL) shouldCache completion:(MTRStatusCompletion) completion;
```
