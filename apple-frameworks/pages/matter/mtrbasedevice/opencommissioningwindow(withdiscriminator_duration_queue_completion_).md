> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrbasedevice/opencommissioningwindow(withdiscriminator:duration:queue:completion:)](https://developer.apple.com/documentation/matter/mtrbasedevice/opencommissioningwindow(withdiscriminator:duration:queue:completion:))

# openCommissioningWindow(withDiscriminator:duration:queue:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
func openCommissioningWindow(withDiscriminator discriminator: NSNumber, duration: NSNumber, queue: dispatch_queue_t, completion: @escaping @Sendable (MTRSetupPayload?, (any Error)?) -> Void)
```

```swift
func openCommissioningWindow(withDiscriminator discriminator: NSNumber, duration: NSNumber, queue: dispatch_queue_t) async throws -> MTRSetupPayload
```

# openCommissioningWindowWithDiscriminator:duration:queue:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
- (void) openCommissioningWindowWithDiscriminator:(NSNumber *) discriminator duration:(NSNumber *) duration queue:(dispatch_queue_t) queue completion:(MTRDeviceOpenCommissioningWindowHandler) completion;
```
