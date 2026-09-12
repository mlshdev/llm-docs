> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axdataaxisdescriptor](https://developer.apple.com/documentation/accessibility/axdataaxisdescriptor)

# AXDataAxisDescriptor (Swift)

**Framework:** Accessibility  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The basic interface for a data axis in a chart.

## Declaration

```swift
protocol AXDataAxisDescriptor : NSCopying
```

<a id="overview"></a>

## Overview

Each [AXChart](axchart.md) requires at least two [AXDataAxisDescriptor](axdataaxisdescriptor.md) objects to describe an x-axis and a y-axis.

## Topics

### Specifying the title

- [title](axdataaxisdescriptor/title.md): The title of the axis.
- [attributedTitle](axdataaxisdescriptor/attributedtitle.md): An attributed version of the axis title.

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)

### Conforming Types

- [AXCategoricalDataAxisDescriptor](axcategoricaldataaxisdescriptor.md)
- [AXNumericDataAxisDescriptor](axnumericdataaxisdescriptor.md)

## See Also

### Axis representation

- [AXCategoricalDataAxisDescriptor](axcategoricaldataaxisdescriptor.md): An object that represents an axis of categorical data.
- [AXNumericDataAxisDescriptor](axnumericdataaxisdescriptor.md): An object that represents an axis of numerical data.

# AXDataAxisDescriptor (Objective-C)

**Framework:** Accessibility  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The basic interface for a data axis in a chart.

## Declaration

```objectivec
@protocol AXDataAxisDescriptor <NSCopying>
```

<a id="overview"></a>

## Overview

Each [AXChart](axchart.md) requires at least two [AXDataAxisDescriptor](axdataaxisdescriptor.md) objects to describe an x-axis and a y-axis.

## Topics

### Specifying the title

- [title](axdataaxisdescriptor/title.md): The title of the axis.
- [attributedTitle](axdataaxisdescriptor/attributedtitle.md): An attributed version of the axis title.

## Relationships

### Inherits From

- [NSCopying](../foundation/nscopying.md)

### Conforming Types

- [AXCategoricalDataAxisDescriptor](axcategoricaldataaxisdescriptor.md)
- [AXNumericDataAxisDescriptor](axnumericdataaxisdescriptor.md)

## See Also

### Axis representation

- [AXCategoricalDataAxisDescriptor](axcategoricaldataaxisdescriptor.md): An object that represents an axis of categorical data.
- [AXNumericDataAxisDescriptor](axnumericdataaxisdescriptor.md): An object that represents an axis of numerical data.
