> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxcpumetric](https://developer.apple.com/documentation/metrickit/mxcpumetric)

# MXCPUMetric (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the use of the CPU.

> Use [MetricResult](metricresult.md), and read the [CPUTimeMetric](cputimemetric.md) or [CPUInstructionsCountMetric](cpuinstructionscountmetric.md) cases instead.

## Declaration

```swift
class MXCPUMetric
```

## Topics

### Reading CPU use

- [cumulativeCPUTime](mxcpumetric/cumulativecputime.md): Deprecated. The total amount of CPU the app used.
- [cumulativeCPUInstructions](mxcpumetric/cumulativecpuinstructions.md): Deprecated. The total number of CPU instructions the app executed during the reporting period.

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
- [MXDisplayMetric](mxdisplaymetric.md): Deprecated. An object representing metrics about the power used to display the app on the screen.
- [MXGPUMetric](mxgpumetric.md): Deprecated. An object representing metrics about the use of the GPU.
- [MXLocationActivityMetric](mxlocationactivitymetric.md): Deprecated. An object representing metrics about the use of location-tracking features of a device.
- [MXNetworkTransferMetric](mxnetworktransfermetric.md): Deprecated. An object representing metrics about network transfers.

# MXCPUMetric (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the use of the CPU.

> Use [MetricResult](metricresult.md), and read the [CPUTimeMetric](cputimemetric.md) or [CPUInstructionsCountMetric](cpuinstructionscountmetric.md) cases instead.

## Declaration

```objectivec
@interface MXCPUMetric : MXMetric
```

## Topics

### Reading CPU use

- [cumulativeCPUTime](mxcpumetric/cumulativecputime.md): Deprecated. The total amount of CPU the app used.
- [cumulativeCPUInstructions](mxcpumetric/cumulativecpuinstructions.md): Deprecated. The total number of CPU instructions the app executed during the reporting period.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

## See Also

### Battery and resource metrics

- [MXCellularConditionMetric](mxcellularconditionmetric.md): Deprecated. An object representing metrics about the condition of the cellular network.
- [MXDisplayMetric](mxdisplaymetric.md): Deprecated. An object representing metrics about the power used to display the app on the screen.
- [MXGPUMetric](mxgpumetric.md): Deprecated. An object representing metrics about the use of the GPU.
- [MXLocationActivityMetric](mxlocationactivitymetric.md): Deprecated. An object representing metrics about the use of location-tracking features of a device.
- [MXNetworkTransferMetric](mxnetworktransfermetric.md): Deprecated. An object representing metrics about network transfers.
