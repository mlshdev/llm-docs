> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/charts/plottable](https://developer.apple.com/documentation/charts/plottable)

# Plottable

**Framework:** Swift Charts  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that can serve as data to plot in a chart.

## Declaration

```swift
protocol Plottable
```

<a id="overview"></a>

## Overview

You create [PlottableValue](plottablevalue.md) items from data that conforms to `Plottable` using a method like [value(\_:\_:)](plottablevalue/value%28____%29-13lvv.md). You then use those items as the values in a chart, like for the [BarMark](barmark.md) chart in the following example:

```swift
BarMark(
  x: .value("Category", "A")
  y: .value("Value", 100)
)
.foregroundStyle(by: .value("Series", "Series 1"))
```

You can create a custom plottable type by conforming it to this protocol. For example:

```swift
// Make `SomeValue` conform to `Plottable` and act as a categorical value in Swift Charts.
struct SomeValue: Plottable {
    var primitivePlottable: String { ... }
    init?(primitivePlottable: String) { ... }
}
```

In addition, you can make an enum work as a categorical data value by using `String` as its raw value and conforming the type to Plottable. The string values will be used as localized string keys when the categories are displayed as text in a chart (for example, on an axis).

```swift
enum Status: String, Plottable {
    case active = "Active"
    case inactive = "Inactive"
}
```

## Topics

### Supporting types

- [PrimitivePlottableProtocol](primitiveplottableprotocol.md): A type that represents the primitive plottable types supported by the framework. Don’t use this type directly.

### Associated Types

- [PrimitivePlottable](plottable/primitiveplottable-swift.associatedtype.md): A primitive plottable type.

### Initializers

- [init(primitivePlottable:)](plottable/init%28primitiveplottable_%29.md): Creates the plottable value for the underlying type, if any, that corresponds to the primitive plottable value.

### Instance Properties

- [primitivePlottable](plottable/primitiveplottable-xwx8.md): The primitive plottable value that corresponds to the plottable value of the underlying type.

## Relationships

### Inherited By

- [PrimitivePlottableProtocol](primitiveplottableprotocol.md)

## See Also

### Labeled data

- [PlottableValue](plottablevalue.md): Labeled data that you plot in a chart using marks.
