> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axdatapoint](https://developer.apple.com/documentation/accessibility/axdatapoint)

# AXDataPoint (Swift)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents a single data point in a chart.

## Declaration

```swift
class AXDataPoint
```

## Topics

### Creating a data point

- [init(x:y:additionalValues:label:)](axdatapoint/init%28x_y_additionalvalues_label_%29-83xvg.md): Creates a data point with the specified x-value, y-value, additional values, and label.
- [init(x:y:additionalValues:label:)](axdatapoint/init%28x_y_additionalvalues_label_%29-4v3sb.md): Creates a data point with the specified x-value, y-value, additional values, and label.

### Specifying the data value

- [xValue](axdatapoint/xvalue.md): The value of the x-axis for the data point.
- [yValue](axdatapoint/yvalue.md): The value of the y-axis for the data point.
- [AXDataPointValue](axdatapointvalue.md): A single data value.
- [AXDataPoint.Value](axdatapoint/value.md): Constants that describe types of data values.

### Specifying the label

- [label](axdatapoint/label.md): The label for the data point.
- [attributedLabel](axdatapoint/attributedlabel.md): An attributed version of the label for the data point.

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

- [AXDataSeriesDescriptor](axdataseriesdescriptor.md): An object that represents a series of data points.

# AXDataPoint (Objective-C)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents a single data point in a chart.

## Declaration

```objectivec
@interface AXDataPoint : NSObject
```

## Topics

### Creating a data point

- [initWithX:y:](axdatapoint/initwithx_y_.md): Creates a data point with the specified x- and y-values.
- [initWithX:y:additionalValues:](axdatapoint/initwithx_y_additionalvalues_.md): Creates a data point with the specified x-value, y-value, and additional values.
- [initWithX:y:additionalValues:label:](axdatapoint/initwithx_y_additionalvalues_label_.md): Creates a data point with the specified x-value, y-value, additional values, and label.

### Specifying the data value

- [xValue](axdatapoint/xvalue.md): The value of the x-axis for the data point.
- [yValue](axdatapoint/yvalue.md): The value of the y-axis for the data point.
- [additionalValues](axdatapoint/additionalvalues.md): An array of values for additional axes for the data point.
- [AXDataPointValue](axdatapointvalue.md): A single data value.

### Specifying the label

- [label](axdatapoint/label.md): The label for the data point.
- [attributedLabel](axdatapoint/attributedlabel.md): An attributed version of the label for the data point.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Data representation

- [AXDataSeriesDescriptor](axdataseriesdescriptor.md): An object that represents a series of data points.
