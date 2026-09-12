> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbaseclusterwifinetworkdiagnostics/init(device:endpoint:queue:)](https://developer.apple.com/documentation/matter/mtrbaseclusterwifinetworkdiagnostics/init(device:endpoint:queue:))

# init(device:endpoint:queue:) (Swift)

**Framework:** Matter  
**Kind:** Initializer  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use initWithDevice:endpointID:queue:

## Declaration

```swift
init?(device: MTRBaseDevice, endpoint: UInt16, queue: dispatch_queue_t)
```

# initWithDevice:endpoint:queue: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please use initWithDevice:endpointID:queue:

## Declaration

```objectivec
- (instancetype) initWithDevice:(MTRBaseDevice *) device endpoint:(uint16_t) endpoint queue:(dispatch_queue_t) queue;
```
