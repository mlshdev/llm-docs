> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menuorder/automatic](https://developer.apple.com/documentation/swiftui/menuorder/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The ordering of the menu chosen by the system for the current context.

## Declaration

```swift
static let automatic: MenuOrder
```

<a id="discussion"></a>

## Discussion

On iOS, this order resolves to [fixed](fixed.md) for menus presented within scrollable content. Pickers that use the [menu](../pickerstyle/menu.md) style also default to [fixed](fixed.md) order. In all other cases, menus default to [priority](priority.md) order.

On macOS, tvOS and watchOS, the `automatic` order always resolves to [fixed](fixed.md) order.

## See Also

### Getting menu orders

- [fixed](fixed.md): Order items from top to bottom.
- [priority](priority.md): Keep the first items closest to user’s interaction point.
