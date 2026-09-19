> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrdevicecontroller/setupcommissioningsession(with:newnodeid:)

# setupCommissioningSession(with:newNodeID:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · tvOS 16.2+ · visionOS 1.0+ · watchOS 9.2+

## Declaration

```swift
func setupCommissioningSession(with payload: MTRSetupPayload, newNodeID: NSNumber) throws
```

## Mentioned In

- [Onboarding a Matter device](../onboarding-a-matter-device.md)

# setupCommissioningSessionWithPayload:newNodeID:error: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.2+ · iPadOS 16.2+ · Mac Catalyst 16.2+ · macOS 13.1+ · tvOS 16.2+ · visionOS 1.0+ · watchOS 9.2+

## Declaration

```objectivec
- (BOOL) setupCommissioningSessionWithPayload:(MTRSetupPayload *) payload newNodeID:(NSNumber *) newNodeID error:(NSError **) error;
```

## Mentioned In

- [Onboarding a Matter device](../onboarding-a-matter-device.md)
