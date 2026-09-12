> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterlaundrydryercontrols/init(device:endpointid:queue:)](https://developer.apple.com/documentation/matter/mtrbaseclusterlaundrydryercontrols/init(device:endpointid:queue:))

# init(device:endpointID:queue:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

## Declaration

```swift
init?(device: MTRBaseDevice, endpointID: NSNumber, queue: dispatch_queue_t)
```

# initWithDevice:endpointID:queue: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

For all instance methods (reads, writes, commands) that take a completion, the completion will be called on the provided queue.

## Declaration

```objectivec
- (instancetype) initWithDevice:(MTRBaseDevice *) device endpointID:(NSNumber *) endpointID queue:(dispatch_queue_t) queue;
```
