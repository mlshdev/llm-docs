> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/vstacklayout](https://developer.apple.com/documentation/swiftui/vstacklayout)

# VStackLayout

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A vertical container that you can use in conditional layouts.

## Declaration

```swift
@frozen struct VStackLayout
```

<a id="overview"></a>

## Overview

This layout container behaves like a [VStack](vstack.md), but conforms to the [Layout](layout.md) protocol so you can use it in the conditional layouts that you construct with [AnyLayout](anylayout.md). If you don’t need a conditional layout, use [VStack](vstack.md) instead.

## Topics

### Creating a vertical stack

- [init(alignment:spacing:)](vstacklayout/init%28alignment_spacing_%29.md): Creates a vertical stack with the specified spacing and horizontal alignment.

### Getting the stack’s properties

- [alignment](vstacklayout/alignment.md): The horizontal alignment of subviews.
- [spacing](vstacklayout/spacing.md): The distance between adjacent subviews.

## Relationships

### Conforms To

- [Animatable](animatable.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Layout](layout.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transitioning between layout types

- [AnyLayout](anylayout.md): A type-erased instance of the layout protocol.
- [HStackLayout](hstacklayout.md): A horizontal container that you can use in conditional layouts.
- [ZStackLayout](zstacklayout.md): An overlaying container that you can use in conditional layouts.
- [GridLayout](gridlayout.md): A grid that you can use in conditional layouts.
