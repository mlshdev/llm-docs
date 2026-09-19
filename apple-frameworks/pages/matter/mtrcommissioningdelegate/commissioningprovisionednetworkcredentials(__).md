> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrcommissioningdelegate/commissioningprovisionednetworkcredentials(_:)

# commissioningProvisionedNetworkCredentials(\_:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Notification that network credentials have been successfully communicated to the commissionee and it’s going to try to join that network.  Note that for commissionees that are already on-network this notification will not happen.

## Declaration

```swift
optional func commissioningProvisionedNetworkCredentials(_ commissioning: MTRCommissioningOperation)
```

# commissioningProvisionedNetworkCredentials: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Notification that network credentials have been successfully communicated to the commissionee and it’s going to try to join that network.  Note that for commissionees that are already on-network this notification will not happen.

## Declaration

```objectivec
- (void) commissioningProvisionedNetworkCredentials:(MTRCommissioningOperation *) commissioning;
```
