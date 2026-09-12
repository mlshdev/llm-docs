> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axcategoricaldataaxisdescriptor](https://developer.apple.com/documentation/accessibility/axcategoricaldataaxisdescriptor)

# AXCategoricalDataAxisDescriptor (Swift)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents an axis of categorical data.

## Declaration

```swift
class AXCategoricalDataAxisDescriptor
```

<a id="overview"></a>

## Overview

A categorical data axis divides information into groups, or categories. For example, a categorical axis may represent blood type data divided into the possible categories *AB*, *A*, *B*, and *O*.

## Topics

### Creating a categorical data axis

- [init(title:categoryOrder:)](axcategoricaldataaxisdescriptor/init%28title_categoryorder_%29.md): Creates a categorical data axis with the specified title and an array of categories in the specified order.
- [init(attributedTitle:categoryOrder:)](axcategoricaldataaxisdescriptor/init%28attributedtitle_categoryorder_%29.md): Creates a categorical data axis with the specified attributed title and an array of categories in the specified order.

### Configuring the order of categories

- [categoryOrder](axcategoricaldataaxisdescriptor/categoryorder.md): A list of every category value for the axis in the order they appear visually in the graph or legend.

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
- [AXNumericDataAxisDescriptor](axnumericdataaxisdescriptor.md): An object that represents an axis of numerical data.

# AXCategoricalDataAxisDescriptor (Objective-C)

**Framework:** Accessibility  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An object that represents an axis of categorical data.

## Declaration

```objectivec
@interface AXCategoricalDataAxisDescriptor : NSObject
```

<a id="overview"></a>

## Overview

A categorical data axis divides information into groups, or categories. For example, a categorical axis may represent blood type data divided into the possible categories *AB*, *A*, *B*, and *O*.

## Topics

### Creating a categorical data axis

- [initWithTitle:categoryOrder:](axcategoricaldataaxisdescriptor/init%28title_categoryorder_%29.md): Creates a categorical data axis with the specified title and an array of categories in the specified order.
- [initWithAttributedTitle:categoryOrder:](axcategoricaldataaxisdescriptor/init%28attributedtitle_categoryorder_%29.md): Creates a categorical data axis with the specified attributed title and an array of categories in the specified order.

### Configuring the order of categories

- [categoryOrder](axcategoricaldataaxisdescriptor/categoryorder.md): A list of every category value for the axis in the order they appear visually in the graph or legend.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [AXDataAxisDescriptor](axdataaxisdescriptor.md)

## See Also

### Axis representation

- [AXDataAxisDescriptor](axdataaxisdescriptor.md): The basic interface for a data axis in a chart.
- [AXNumericDataAxisDescriptor](axnumericdataaxisdescriptor.md): An object that represents an axis of numerical data.
