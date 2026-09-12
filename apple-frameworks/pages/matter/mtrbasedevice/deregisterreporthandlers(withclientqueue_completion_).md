> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbasedevice/deregisterreporthandlers(withclientqueue:completion:)](https://developer.apple.com/documentation/matter/mtrbasedevice/deregisterreporthandlers(withclientqueue:completion:))

# deregisterReportHandlers(withClientQueue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Pease use deregisterReportHandlersWithQueue:completion:

## Declaration

```swift
func deregisterReportHandlers(withClientQueue queue: dispatch_queue_t, completion: @escaping @Sendable () -> Void)
```

```swift
func deregisterReportHandlers(withClientQueue queue: dispatch_queue_t) async
```

# deregisterReportHandlersWithClientQueue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Pease use deregisterReportHandlersWithQueue:completion:

## Declaration

```objectivec
- (void) deregisterReportHandlersWithClientQueue:(dispatch_queue_t) queue completion:(dispatch_block_t) completion;
```
