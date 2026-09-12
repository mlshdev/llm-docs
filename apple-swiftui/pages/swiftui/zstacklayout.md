> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/zstacklayout](https://developer.apple.com/documentation/swiftui/zstacklayout)

# ZStackLayout

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An overlaying container that you can use in conditional layouts.

## Declaration

```swift
@frozen struct ZStackLayout
```

<a id="overview"></a>

## Overview

This layout container behaves like a [ZStack](zstack.md), but conforms to the [Layout](layout.md) protocol so you can use it in the conditional layouts that you construct with [AnyLayout](anylayout.md). If you don’t need a conditional layout, use [ZStack](zstack.md) instead.

## Topics

### Creating a stack

- [init(alignment:)](zstacklayout/init%28alignment_%29.md): Creates a stack with the specified alignment.

### Getting the stack’s properties

- [alignment](zstacklayout/alignment.md): The alignment of subviews.

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
- [VStackLayout](vstacklayout.md): A vertical container that you can use in conditional layouts.
- [GridLayout](gridlayout.md): A grid that you can use in conditional layouts.
