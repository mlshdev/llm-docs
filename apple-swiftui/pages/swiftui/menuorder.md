> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menuorder](https://developer.apple.com/documentation/swiftui/menuorder)

# MenuOrder

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The order in which a menu presents its content.

## Declaration

```swift
struct MenuOrder
```

<a id="overview"></a>

## Overview

You can configure the preferred menu order using the [menuOrder(\_:)](view/menuorder%28__%29.md) view modifier.

## Topics

### Getting menu orders

- [automatic](menuorder/automatic.md): The ordering of the menu chosen by the system for the current context.
- [fixed](menuorder/fixed.md): Order items from top to bottom.
- [priority](menuorder/priority.md): Keep the first items closest to user’s interaction point.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting a preferred order

- [menuOrder(\_:)](view/menuorder%28__%29.md): Sets the preferred order of items for menus presented from this view.
- [menuOrder](environmentvalues/menuorder.md): The preferred order of items for menus presented from this view.
