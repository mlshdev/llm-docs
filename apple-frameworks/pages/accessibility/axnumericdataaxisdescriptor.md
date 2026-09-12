> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axnumericdataaxisdescriptor](https://developer.apple.com/documentation/accessibility/axnumericdataaxisdescriptor)

# AXNumericDataAxisDescriptor (Swift)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents an axis of numerical data.

## Declaration

```swift
class AXNumericDataAxisDescriptor
```

## Topics

### Creating a numeric data axis

- [init(title:range:gridlinePositions:valueDescriptionProvider:)](axnumericdataaxisdescriptor/init%28title_range_gridlinepositions_valuedescriptionprovider_%29.md): Creates a numeric data axis with the specified title, range, gridline positions, and value description provider closure.
- [init(attributedTitle:range:gridlinePositions:valueDescriptionProvider:)](axnumericdataaxisdescriptor/init%28attributedtitle_range_gridlinepositions_valuedescriptionprovider_%29.md): Creates a numeric data axis with the specified attributed title, range, gridline positions, and value description provider closure.

### Specifying the value description

- [valueDescriptionProvider](axnumericdataaxisdescriptor/valuedescriptionprovider.md): A description to speak for a particular data value on the axis.

### Configuring the axis scale

- [scaleType](axnumericdataaxisdescriptor/scaletype-swift.property.md): The scale for the axis.
- [AXNumericDataAxisDescriptor.ScaleType](axnumericdataaxisdescriptor/scaletype-swift.enum.md): Constants that describe the scale of a numeric axis.

### Configuring the axis range

- [range](axnumericdataaxisdescriptor/range.md): A range that defines the minimum and maximum displayable values for the axis.

### Configuring the gridlines

- [gridlinePositions](axnumericdataaxisdescriptor/gridlinepositions-5cfmw.md): The positions of the gridlines along the axis.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [AXDataAxisDescriptor](axdataaxisdescriptor.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Axis representation

- [AXDataAxisDescriptor](axdataaxisdescriptor.md): The basic interface for a data axis in a chart.
- [AXCategoricalDataAxisDescriptor](axcategoricaldataaxisdescriptor.md): An object that represents an axis of categorical data.

# AXNumericDataAxisDescriptor (Objective-C)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents an axis of numerical data.

## Declaration

```objectivec
@interface AXNumericDataAxisDescriptor : NSObject
```

## Topics

### Creating a numeric data axis

- [initWithTitle:lowerBound:upperBound:gridlinePositions:valueDescriptionProvider:](axnumericdataaxisdescriptor/initwithtitle_lowerbound_upperbound_gridlinepositions_valuedescriptionprovider_.md): Creates a numeric data axis with the specified title, lower bound value, upper bound value, gridline positions, and value description provider block.
- [initWithAttributedTitle:lowerBound:upperBound:gridlinePositions:valueDescriptionProvider:](axnumericdataaxisdescriptor/initwithattributedtitle_lowerbound_upperbound_gridlinepositions_valuedescriptionprovider_.md): Creates a numeric data axis with the specified attributed title, lower bound value, upper bound value, gridline positions, and value description provider block.

### Specifying the value description

- [valueDescriptionProvider](axnumericdataaxisdescriptor/valuedescriptionprovider.md): A description to speak for a particular data value on the axis.

### Configuring the axis scale

- [scaleType](axnumericdataaxisdescriptor/scaletype-swift.property.md): The scale for the axis.
- [AXNumericDataAxisDescriptorScale](axnumericdataaxisdescriptor/scaletype-swift.enum.md): Constants that describe the scale of a numeric axis.

### Configuring the axis range

- [lowerBound](axnumericdataaxisdescriptor/lowerbound.md): The minimum displayable value for the axis.
- [upperBound](axnumericdataaxisdescriptor/upperbound.md): The maximum displayable value for the axis.

### Configuring the gridlines

- [gridlinePositions](axnumericdataaxisdescriptor/gridlinepositions-9z10e.md): The positions of the gridlines along the axis.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [AXDataAxisDescriptor](axdataaxisdescriptor.md)

## See Also

### Axis representation

- [AXDataAxisDescriptor](axdataaxisdescriptor.md): The basic interface for a data axis in a chart.
- [AXCategoricalDataAxisDescriptor](axcategoricaldataaxisdescriptor.md): An object that represents an axis of categorical data.
