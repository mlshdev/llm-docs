> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/gridlayout](https://developer.apple.com/documentation/swiftui/gridlayout)

# GridLayout

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A grid that you can use in conditional layouts.

## Declaration

```swift
@frozen nonisolated struct GridLayout
```

<a id="overview"></a>

## Overview

This layout container behaves like a [Grid](grid.md), but conforms to the [Layout](layout.md) protocol so you can use it in the conditional layouts that you construct with [AnyLayout](anylayout.md). If you don’t need a conditional layout, use [Grid](grid.md) instead.

## Topics

### Creating a grid

- [init(alignment:horizontalSpacing:verticalSpacing:)](gridlayout/init%28alignment_horizontalspacing_verticalspacing_%29.md): Creates a grid with the specified spacing and alignment.

### Getting the grid’s properties

- [alignment](gridlayout/alignment.md): The alignment of subviews.
- [horizontalSpacing](gridlayout/horizontalspacing.md): The horizontal distance between adjacent subviews.
- [verticalSpacing](gridlayout/verticalspacing.md): The vertical distance between adjacent subviews.

### Type Aliases

- [GridLayout.Body](gridlayout/body.md)

### Default Implementations

- [Layout Implementations](gridlayout/layout-implementations.md)

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Layout](layout.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transitioning between layout types

- [AnyLayout](anylayout.md): A type-erased instance of the layout protocol.
- [HStackLayout](hstacklayout.md): A horizontal container that you can use in conditional layouts.
- [VStackLayout](vstacklayout.md): A vertical container that you can use in conditional layouts.
- [ZStackLayout](zstacklayout.md): An overlaying container that you can use in conditional layouts.
