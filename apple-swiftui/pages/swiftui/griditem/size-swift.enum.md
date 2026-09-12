> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/griditem/size-swift.enum](https://developer.apple.com/documentation/swiftui/griditem/size-swift.enum)

# GridItem.Size

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The size in the minor axis of one or more rows or columns in a grid layout.

## Declaration

```swift
enum Size
```

<a id="overview"></a>

## Overview

Use a `Size` instance when you create a [GridItem](../griditem.md). The value tells a [LazyHGrid](../lazyhgrid.md) how to size its rows, or a [LazyVGrid](../lazyvgrid.md) how to size its columns.

## Topics

### Getting the sizes

- [GridItem.Size.adaptive(minimum:maximum:)](size-swift.enum/adaptive%28minimum_maximum_%29.md): Multiple items in the space of a single flexible item.
- [GridItem.Size.fixed(\_:)](size-swift.enum/fixed%28__%29.md): A single item with the specified fixed size.
- [GridItem.Size.flexible(minimum:maximum:)](size-swift.enum/flexible%28minimum_maximum_%29.md): A single flexible item.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting grid item properties

- [alignment](alignment.md): The alignment to use when placing each view.
- [spacing](spacing.md): The spacing to the next item.
- [size](size-swift.property.md): The size of the item, which is the width of a column item or the height of a row item.
