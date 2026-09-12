> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxlocationactivitymetric](https://developer.apple.com/documentation/metrickit/mxlocationactivitymetric)

# MXLocationActivityMetric (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the use of location-tracking features of a device.

> Use [LocationActivityTimeMetric](locationactivitytimemetric.md) instead.

## Declaration

```swift
class MXLocationActivityMetric
```

## Topics

### Reading location services use

- [cumulativeBestAccuracyForNavigationTime](mxlocationactivitymetric/cumulativebestaccuracyfornavigationtime.md): Deprecated. The total time spent tracking the current location at the best accuracy for navigation.
- [cumulativeBestAccuracyTime](mxlocationactivitymetric/cumulativebestaccuracytime.md): Deprecated. The total time spent tracking the current location at the best accuracy.
- [cumulativeNearestTenMetersAccuracyTime](mxlocationactivitymetric/cumulativenearesttenmetersaccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 10 meters.
- [cumulativeHundredMetersAccuracyTime](mxlocationactivitymetric/cumulativehundredmetersaccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 100 meters.
- [cumulativeKilometerAccuracyTime](mxlocationactivitymetric/cumulativekilometeraccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 1 kilometer.
- [cumulativeThreeKilometersAccuracyTime](mxlocationactivitymetric/cumulativethreekilometersaccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 3 kilometers.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Battery and resource metrics

- [MXCellularConditionMetric](mxcellularconditionmetric.md): Deprecated. An object representing metrics about the condition of the cellular network.
- [MXCPUMetric](mxcpumetric.md): Deprecated. An object representing metrics about the use of the CPU.
- [MXDisplayMetric](mxdisplaymetric.md): Deprecated. An object representing metrics about the power used to display the app on the screen.
- [MXGPUMetric](mxgpumetric.md): Deprecated. An object representing metrics about the use of the GPU.
- [MXNetworkTransferMetric](mxnetworktransfermetric.md): Deprecated. An object representing metrics about network transfers.

# MXLocationActivityMetric (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the use of location-tracking features of a device.

> Use [LocationActivityTimeMetric](locationactivitytimemetric.md) instead.

## Declaration

```objectivec
@interface MXLocationActivityMetric : MXMetric
```

## Topics

### Reading location services use

- [cumulativeBestAccuracyForNavigationTime](mxlocationactivitymetric/cumulativebestaccuracyfornavigationtime.md): Deprecated. The total time spent tracking the current location at the best accuracy for navigation.
- [cumulativeBestAccuracyTime](mxlocationactivitymetric/cumulativebestaccuracytime.md): Deprecated. The total time spent tracking the current location at the best accuracy.
- [cumulativeNearestTenMetersAccuracyTime](mxlocationactivitymetric/cumulativenearesttenmetersaccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 10 meters.
- [cumulativeHundredMetersAccuracyTime](mxlocationactivitymetric/cumulativehundredmetersaccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 100 meters.
- [cumulativeKilometerAccuracyTime](mxlocationactivitymetric/cumulativekilometeraccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 1 kilometer.
- [cumulativeThreeKilometersAccuracyTime](mxlocationactivitymetric/cumulativethreekilometersaccuracytime.md): Deprecated. The total time spent tracking the current location to an accuracy of 3 kilometers.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

## See Also

### Battery and resource metrics

- [MXCellularConditionMetric](mxcellularconditionmetric.md): Deprecated. An object representing metrics about the condition of the cellular network.
- [MXCPUMetric](mxcpumetric.md): Deprecated. An object representing metrics about the use of the CPU.
- [MXDisplayMetric](mxdisplaymetric.md): Deprecated. An object representing metrics about the power used to display the app on the screen.
- [MXGPUMetric](mxgpumetric.md): Deprecated. An object representing metrics about the use of the GPU.
- [MXNetworkTransferMetric](mxnetworktransfermetric.md): Deprecated. An object representing metrics about network transfers.
