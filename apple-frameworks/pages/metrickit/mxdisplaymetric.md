> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdisplaymetric](https://developer.apple.com/documentation/metrickit/mxdisplaymetric)

# MXDisplayMetric (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the power used to display the app on the screen.

> Use [MetricResult](metricresult.md), and read the [PixelLuminanceMetric](pixelluminancemetric.md) case instead.

## Declaration

```swift
class MXDisplayMetric
```

## Topics

### Reading average active pixel use

- [averagePixelLuminance](mxdisplaymetric/averagepixelluminance.md): Deprecated. The average amount of luminosity of the pixels on an OLED display.
- [MXUnitAveragePixelLuminance](mxunitaveragepixelluminance.md): Deprecated. A unit of measure of pixel luminosity on an OLED display.

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
- [MXGPUMetric](mxgpumetric.md): Deprecated. An object representing metrics about the use of the GPU.
- [MXLocationActivityMetric](mxlocationactivitymetric.md): Deprecated. An object representing metrics about the use of location-tracking features of a device.
- [MXNetworkTransferMetric](mxnetworktransfermetric.md): Deprecated. An object representing metrics about network transfers.

# MXDisplayMetric (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about the power used to display the app on the screen.

> Use [MetricResult](metricresult.md), and read the [PixelLuminanceMetric](pixelluminancemetric.md) case instead.

## Declaration

```objectivec
@interface MXDisplayMetric : MXMetric
```

## Topics

### Reading average active pixel use

- [averagePixelLuminance](mxdisplaymetric/averagepixelluminance.md): Deprecated. The average amount of luminosity of the pixels on an OLED display.
- [MXUnitAveragePixelLuminance](mxunitaveragepixelluminance.md): Deprecated. A unit of measure of pixel luminosity on an OLED display.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

## See Also

### Battery and resource metrics

- [MXCellularConditionMetric](mxcellularconditionmetric.md): Deprecated. An object representing metrics about the condition of the cellular network.
- [MXCPUMetric](mxcpumetric.md): Deprecated. An object representing metrics about the use of the CPU.
- [MXGPUMetric](mxgpumetric.md): Deprecated. An object representing metrics about the use of the GPU.
- [MXLocationActivityMetric](mxlocationactivitymetric.md): Deprecated. An object representing metrics about the use of location-tracking features of a device.
- [MXNetworkTransferMetric](mxnetworktransfermetric.md): Deprecated. An object representing metrics about network transfers.
