> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessorywidgetgroupstyle(_:)](https://developer.apple.com/documentation/swiftui/view/accessorywidgetgroupstyle(_:))

# accessoryWidgetGroupStyle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** watchOS 11.0+

The view modifier that can be applied to `AccessoryWidgetGroup` to specify the shape the three content views will be masked with. The value of `style` is set to `.automatic`, which is `.circular` by default.

## Declaration

```swift
@MainActor @preconcurrency func accessoryWidgetGroupStyle(_ style: AccessoryWidgetGroupStyle = .automatic) -> some View

```

## Parameters

- `style`: The shape with which the content views are masked. The available shapes are circle and rounded square.
