> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axdatapointvalue](https://developer.apple.com/documentation/accessibility/axdatapointvalue)

# AXDataPointValue (Swift)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A single data value.

## Declaration

```swift
class AXDataPointValue
```

<a id="overview"></a>

## Overview

An [AXDataPointValue](axdatapointvalue.md) can be either numeric or categorical. Data points in a numeric axis use the [number](axdatapointvalue/number.md) property, and data points in a categorical axis use the [category](axdatapointvalue/category.md) property.

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

### Specifying the data value

- [xValue](axdatapoint/xvalue.md): The value of the x-axis for the data point.
- [yValue](axdatapoint/yvalue.md): The value of the y-axis for the data point.
- [AXDataPoint.Value](axdatapoint/value.md): Constants that describe types of data values.

# AXDataPointValue (Objective-C)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A single data value.

## Declaration

```objectivec
@interface AXDataPointValue : NSObject
```

<a id="overview"></a>

## Overview

An [AXDataPointValue](axdatapointvalue.md) can be either numeric or categorical. Data points in a numeric axis use the [number](axdatapointvalue/number.md) property, and data points in a categorical axis use the [category](axdatapointvalue/category.md) property.

## Topics

### Creating a numeric value

- [valueWithNumber:](axdatapointvalue/valuewithnumber_.md): Creates a numeric data value with the specified number.
- [number](axdatapointvalue/number.md): A number that represents the numeric data value.

### Creating a categorical value

- [valueWithCategory:](axdatapointvalue/valuewithcategory_.md): Creates a categorical data value with the specified category string.
- [category](axdatapointvalue/category.md): A string that represents the categorical data value.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Specifying the data value

- [xValue](axdatapoint/xvalue.md): The value of the x-axis for the data point.
- [yValue](axdatapoint/yvalue.md): The value of the y-axis for the data point.
- [additionalValues](axdatapoint/additionalvalues.md): An array of values for additional axes for the data point.
