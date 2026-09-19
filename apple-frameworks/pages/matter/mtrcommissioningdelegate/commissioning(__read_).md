> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrcommissioningdelegate/commissioning(_:read:)

# commissioning(\_:read:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Callback that gets called after various information (product identity, optionally endpoint structure information, optionally other attributes that were requested) has been read from the commissionee.

## Declaration

```swift
optional func commissioning(_ commissioning: MTRCommissioningOperation, read info: MTRCommissioneeInfo)
```

# commissioning:readCommissioneeInfo: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Callback that gets called after various information (product identity, optionally endpoint structure information, optionally other attributes that were requested) has been read from the commissionee.

## Declaration

```objectivec
- (void) commissioning:(MTRCommissioningOperation *) commissioning readCommissioneeInfo:(MTRCommissioneeInfo *) info;
```
