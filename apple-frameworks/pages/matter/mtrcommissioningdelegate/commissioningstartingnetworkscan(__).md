> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommissioningdelegate/commissioningstartingnetworkscan(_:)](https://developer.apple.com/documentation/matter/mtrcommissioningdelegate/commissioningstartingnetworkscan(_:))

# commissioningStartingNetworkScan(\_:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Notification that a network scan is starting.  This will only happen if a network scan is performed during commissioning.

## Declaration

```swift
optional func commissioningStartingNetworkScan(_ commissioning: MTRCommissioningOperation)
```

# commissioningStartingNetworkScan: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

Notification that a network scan is starting.  This will only happen if a network scan is performed during commissioning.

## Declaration

```objectivec
- (void) commissioningStartingNetworkScan:(MTRCommissioningOperation *) commissioning;
```
