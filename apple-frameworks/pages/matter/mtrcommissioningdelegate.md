> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrcommissioningdelegate](https://developer.apple.com/documentation/matter/mtrcommissioningdelegate)

# MTRCommissioningDelegate (Swift)

**Framework:** Matter  
**Kind:** Protocol  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

## Declaration

```swift
protocol MTRCommissioningDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [commissioning(\_:completedDeviceAttestation:error:completion:)](mtrcommissioningdelegate/commissioning%28__completeddeviceattestation_error_completion_%29.md): Notification that device attestation has completed.
- [commissioning(\_:failedWithError:metrics:)](mtrcommissioningdelegate/commissioning%28__failedwitherror_metrics_%29.md): Notification that commissioning has failed.
- [commissioning(\_:needsThreadCredentialsWithScanResults:error:completion:)](mtrcommissioningdelegate/commissioning%28__needsthreadcredentialswithscanresults_error_completion_%29.md): Callback that gets called for a commissionee that supports Thread if Thread network commissioning is required and an operational dataset was not provided in MTRCommissioningParameters.
- [commissioning(\_:needsWiFiCredentialsWithScanResults:error:completion:)](mtrcommissioningdelegate/commissioning%28__needswificredentialswithscanresults_error_completion_%29.md): Callback that gets called for a commissionee that supports Wi-Fi if Wi-Fi network commissioning is required and Wi-Fi credentials were not provided in MTRCommissioningParameters.
- [commissioning(\_:read:)](mtrcommissioningdelegate/commissioning%28__read_%29.md): Callback that gets called after various information (product identity, optionally endpoint structure information, optionally other attributes that were requested) has been read from the commissionee.
- [commissioning(\_:succeededForNodeID:metrics:)](mtrcommissioningdelegate/commissioning%28__succeededfornodeid_metrics_%29.md): Notification that commissioning has succeeded.
- [commissioning(\_:succeededForNodeID:metrics:context:)](mtrcommissioningdelegate/commissioning%28__succeededfornodeid_metrics_context_%29.md): Notification that commissioning has succeeded.
- [commissioningProvisionedNetworkCredentials(\_:)](mtrcommissioningdelegate/commissioningprovisionednetworkcredentials%28__%29.md): Notification that network credentials have been successfully communicated to the commissionee and it’s going to try to join that network. Note that for commissionees that are already on-network this notification will not happen.
- [commissioningStartingNetworkScan(\_:)](mtrcommissioningdelegate/commissioningstartingnetworkscan%28__%29.md): Notification that a network scan is starting. This will only happen if a network scan is performed during commissioning.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRCommissioningDelegate (Objective-C)

**Framework:** Matter  
**Kind:** Protocol  
**Availability:** iOS 26.2+ · iPadOS 26.2+ · Mac Catalyst 26.2+ · macOS 26.2+ · tvOS 26.2+ · visionOS 26.2+ · watchOS 26.2+

## Declaration

```objectivec
@protocol MTRCommissioningDelegate <NSObject>
```

## Topics

### Instance Methods

- [commissioning:completedDeviceAttestation:error:completion:](mtrcommissioningdelegate/commissioning%28__completeddeviceattestation_error_completion_%29.md): Notification that device attestation has completed.
- [commissioning:failedWithError:metrics:](mtrcommissioningdelegate/commissioning%28__failedwitherror_metrics_%29.md): Notification that commissioning has failed.
- [commissioning:needsThreadCredentialsWithScanResults:error:completion:](mtrcommissioningdelegate/commissioning%28__needsthreadcredentialswithscanresults_error_completion_%29.md): Callback that gets called for a commissionee that supports Thread if Thread network commissioning is required and an operational dataset was not provided in MTRCommissioningParameters.
- [commissioning:needsWiFiCredentialsWithScanResults:error:completion:](mtrcommissioningdelegate/commissioning%28__needswificredentialswithscanresults_error_completion_%29.md): Callback that gets called for a commissionee that supports Wi-Fi if Wi-Fi network commissioning is required and Wi-Fi credentials were not provided in MTRCommissioningParameters.
- [commissioning:readCommissioneeInfo:](mtrcommissioningdelegate/commissioning%28__read_%29.md): Callback that gets called after various information (product identity, optionally endpoint structure information, optionally other attributes that were requested) has been read from the commissionee.
- [commissioning:succeededForNodeID:metrics:](mtrcommissioningdelegate/commissioning%28__succeededfornodeid_metrics_%29.md): Notification that commissioning has succeeded.
- [commissioning:succeededForNodeID:metrics:context:](mtrcommissioningdelegate/commissioning%28__succeededfornodeid_metrics_context_%29.md): Notification that commissioning has succeeded.
- [commissioningProvisionedNetworkCredentials:](mtrcommissioningdelegate/commissioningprovisionednetworkcredentials%28__%29.md): Notification that network credentials have been successfully communicated to the commissionee and it’s going to try to join that network. Note that for commissionees that are already on-network this notification will not happen.
- [commissioningStartingNetworkScan:](mtrcommissioningdelegate/commissioningstartingnetworkscan%28__%29.md): Notification that a network scan is starting. This will only happen if a network scan is performed during commissioning.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)
