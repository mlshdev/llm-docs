> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbasedevice/opencommissioningwindow(withsetuppasscode:discriminator:duration:queue:completion:)](https://developer.apple.com/documentation/matter/mtrbasedevice/opencommissioningwindow(withsetuppasscode:discriminator:duration:queue:completion:))

# openCommissioningWindow(withSetupPasscode:discriminator:duration:queue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · tvOS 16.2+ · visionOS 1.0+ · watchOS 9.2+

## Declaration

```swift
func openCommissioningWindow(withSetupPasscode setupPasscode: NSNumber, discriminator: NSNumber, duration: NSNumber, queue: dispatch_queue_t, completion: @escaping @Sendable (MTRSetupPayload?, (any Error)?) -> Void)
```

```swift
func openCommissioningWindow(withSetupPasscode setupPasscode: NSNumber, discriminator: NSNumber, duration: NSNumber, queue: dispatch_queue_t) async throws -> MTRSetupPayload
```

# openCommissioningWindowWithSetupPasscode:discriminator:duration:queue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · tvOS 16.2+ · visionOS 1.0+ · watchOS 9.2+

## Declaration

```objectivec
- (void) openCommissioningWindowWithSetupPasscode:(NSNumber *) setupPasscode discriminator:(NSNumber *) discriminator duration:(NSNumber *) duration queue:(dispatch_queue_t) queue completion:(MTRDeviceOpenCommissioningWindowHandler) completion;
```
