> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrxpcserverprotocol_mtrdevice/devicecontroller(_:nodeid:opencommissioningwindowwithsetuppasscode:discriminator:duration:completion:)

# deviceController(\_:nodeID:openCommissioningWindowWithSetupPasscode:discriminator:duration:completion:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```swift
func deviceController(_ controller: UUID, nodeID: NSNumber, openCommissioningWindowWithSetupPasscode setupPasscode: NSNumber, discriminator: NSNumber, duration: NSNumber, completion: @escaping @Sendable (MTRSetupPayload?, (any Error)?) -> Void)
```

```swift
func deviceController(_ controller: UUID, nodeID: NSNumber, openCommissioningWindowWithSetupPasscode setupPasscode: NSNumber, discriminator: NSNumber, duration: NSNumber) async throws -> MTRSetupPayload
```

# deviceController:nodeID:openCommissioningWindowWithSetupPasscode:discriminator:duration:completion: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```objectivec
- (void) deviceController:(NSUUID *) controller nodeID:(NSNumber *) nodeID openCommissioningWindowWithSetupPasscode:(NSNumber *) setupPasscode discriminator:(NSNumber *) discriminator duration:(NSNumber *) duration completion:(MTRDeviceOpenCommissioningWindowHandler) completion;
```
