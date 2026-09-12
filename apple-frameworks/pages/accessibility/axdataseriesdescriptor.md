> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axdataseriesdescriptor](https://developer.apple.com/documentation/accessibility/axdataseriesdescriptor)

# AXDataSeriesDescriptor (Swift)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents a series of data points.

## Declaration

```swift
class AXDataSeriesDescriptor
```

## Topics

### Creating a data series

- [init(name:isContinuous:dataPoints:)](axdataseriesdescriptor/init%28name_iscontinuous_datapoints_%29.md): Creates a data series with the specified name, a Boolean value that indicates whether the series is continuous, and data points.
- [init(attributedName:isContinuous:dataPoints:)](axdataseriesdescriptor/init%28attributedname_iscontinuous_datapoints_%29.md): Creates a data series with the specified attributed name, a Boolean value that indicates whether the series is continuous, and data points.

### Naming the series

- [name](axdataseriesdescriptor/name.md): The name of the data series.
- [attributedName](axdataseriesdescriptor/attributedname.md): An attributed version of the data series name.

### Configuring the data points

- [isContinuous](axdataseriesdescriptor/iscontinuous.md): A Boolean value that determines whether the data series is continuous.
- [dataPoints](axdataseriesdescriptor/datapoints.md): The data points that the series contains.
- [AXDataPoint](axdatapoint.md): An object that represents a single data point in a chart.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Data representation

- [AXDataPoint](axdatapoint.md): An object that represents a single data point in a chart.

# AXDataSeriesDescriptor (Objective-C)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents a series of data points.

## Declaration

```objectivec
@interface AXDataSeriesDescriptor : NSObject
```

## Topics

### Creating a data series

- [initWithName:isContinuous:dataPoints:](axdataseriesdescriptor/init%28name_iscontinuous_datapoints_%29.md): Creates a data series with the specified name, a Boolean value that indicates whether the series is continuous, and data points.
- [initWithAttributedName:isContinuous:dataPoints:](axdataseriesdescriptor/init%28attributedname_iscontinuous_datapoints_%29.md): Creates a data series with the specified attributed name, a Boolean value that indicates whether the series is continuous, and data points.

### Naming the series

- [name](axdataseriesdescriptor/name.md): The name of the data series.
- [attributedName](axdataseriesdescriptor/attributedname.md): An attributed version of the data series name.

### Configuring the data points

- [isContinuous](axdataseriesdescriptor/iscontinuous.md): A Boolean value that determines whether the data series is continuous.
- [dataPoints](axdataseriesdescriptor/datapoints.md): The data points that the series contains.
- [AXDataPoint](axdatapoint.md): An object that represents a single data point in a chart.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Data representation

- [AXDataPoint](axdatapoint.md): An object that represents a single data point in a chart.
