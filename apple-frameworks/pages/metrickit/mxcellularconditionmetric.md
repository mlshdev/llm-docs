> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxcellularconditionmetric](https://developer.apple.com/documentation/metrickit/mxcellularconditionmetric)

# MXCellularConditionMetric (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the condition of the cellular network.

> Use [MetricResult](metricresult.md), and read the [CellularConditionTimeMetric](cellularconditiontimemetric.md) case instead.

## Declaration

```swift
class MXCellularConditionMetric
```

## Topics

### Viewing cellular connectivity metrics

- [histogrammedCellularConditionTime](mxcellularconditionmetric/histogrammedcellularconditiontime.md): Deprecated. An object representing the distribution of the different levels of connectivity to the cellular network.
- [MXUnitSignalBars](mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.

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

- [MXCPUMetric](mxcpumetric.md): Deprecated. An object representing metrics about the use of the CPU.
- [MXDisplayMetric](mxdisplaymetric.md): Deprecated. An object representing metrics about the power used to display the app on the screen.
- [MXGPUMetric](mxgpumetric.md): Deprecated. An object representing metrics about the use of the GPU.
- [MXLocationActivityMetric](mxlocationactivitymetric.md): Deprecated. An object representing metrics about the use of location-tracking features of a device.
- [MXNetworkTransferMetric](mxnetworktransfermetric.md): Deprecated. An object representing metrics about network transfers.

# MXCellularConditionMetric (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the condition of the cellular network.

> Use [MetricResult](metricresult.md), and read the [CellularConditionTimeMetric](cellularconditiontimemetric.md) case instead.

## Declaration

```objectivec
@interface MXCellularConditionMetric : MXMetric
```

## Topics

### Viewing cellular connectivity metrics

- [histogrammedCellularConditionTime](mxcellularconditionmetric/histogrammedcellularconditiontime.md): Deprecated. An object representing the distribution of the different levels of connectivity to the cellular network.
- [MXUnitSignalBars](mxunitsignalbars.md): Deprecated. A unit of measure for the number of bars of cellular network connectivity.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

## See Also

### Battery and resource metrics

- [MXCPUMetric](mxcpumetric.md): Deprecated. An object representing metrics about the use of the CPU.
- [MXDisplayMetric](mxdisplaymetric.md): Deprecated. An object representing metrics about the power used to display the app on the screen.
- [MXGPUMetric](mxgpumetric.md): Deprecated. An object representing metrics about the use of the GPU.
- [MXLocationActivityMetric](mxlocationactivitymetric.md): Deprecated. An object representing metrics about the use of location-tracking features of a device.
- [MXNetworkTransferMetric](mxnetworktransfermetric.md): Deprecated. An object representing metrics about network transfers.
