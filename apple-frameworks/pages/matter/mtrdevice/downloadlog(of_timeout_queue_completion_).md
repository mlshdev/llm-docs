> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevice/downloadlog(of:timeout:queue:completion:)](https://developer.apple.com/documentation/matter/mtrdevice/downloadlog(of:timeout:queue:completion:))

# downloadLog(of:timeout:queue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```swift
func downloadLog(of type: MTRDiagnosticLogType, timeout: TimeInterval, queue: dispatch_queue_t, completion: @escaping @Sendable (URL?, (any Error)?) -> Void)
```

```swift
func downloadLog(of type: MTRDiagnosticLogType, timeout: TimeInterval, queue: dispatch_queue_t) async throws -> URL
```

# downloadLogOfType:timeout:queue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.6+ · iPadOS 17.6+ · Mac Catalyst 17.6+ · macOS 14.6+ · tvOS 17.6+ · visionOS 1.0+ · watchOS 10.6+

## Declaration

```objectivec
- (void) downloadLogOfType:(MTRDiagnosticLogType) type timeout:(NSTimeInterval) timeout queue:(dispatch_queue_t) queue completion:(void (^)(NSURL *url, NSError *error)) completion;
```
