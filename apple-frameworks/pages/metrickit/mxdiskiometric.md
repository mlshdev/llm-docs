> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiskiometric](https://developer.apple.com/documentation/metrickit/mxdiskiometric)

# MXDiskIOMetric (Swift)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about disk usage.

> Use [MetricResult](metricresult.md), and read the [LogicalDiskWritesMetric](logicaldiskwritesmetric.md) case instead.

## Declaration

```swift
class MXDiskIOMetric
```

## Topics

### Reading disk use

- [cumulativeLogicalWrites](mxdiskiometric/cumulativelogicalwrites.md): Deprecated. The total amount of data written to disk or other long term storage.

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

### Disk metrics

- [MXDiskSpaceUsageMetric](mxdiskspaceusagemetric.md): Deprecated. An object representing metrics about your app’s disk space usage.

# MXDiskIOMetric (Objective-C)

**Framework:** MetricKit  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

An object representing metrics about disk usage.

> Use [MetricResult](metricresult.md), and read the [LogicalDiskWritesMetric](logicaldiskwritesmetric.md) case instead.

## Declaration

```objectivec
@interface MXDiskIOMetric : MXMetric
```

## Topics

### Reading disk use

- [cumulativeLogicalWrites](mxdiskiometric/cumulativelogicalwrites.md): Deprecated. The total amount of data written to disk or other long term storage.

## Relationships

### Inherits From

- [MXMetric](mxmetric.md)

## See Also

### Disk metrics

- [MXDiskSpaceUsageMetric](mxdiskspaceusagemetric.md): Deprecated. An object representing metrics about your app’s disk space usage.
