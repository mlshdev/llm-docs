> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/accessorywidgetgroup/init(label:content:)](https://developer.apple.com/documentation/widgetkit/accessorywidgetgroup/init(label:content:))

# init(label:content:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** watchOS 11.0+

Creates an AccessoryWidgetGroup composed of a label and three circular or rounded square contents with equal spacing and vertical alignment.

## Declaration

```swift
@MainActor @preconcurrency init(@ViewBuilder label: () -> Label, @ViewBuilder content: () -> Content)
```

## Parameters

- `label`: A label or a text to show up on the top corner of the widget view to describe the purpose of the group.
- `content`: A view builder for the content of the accessory group.
