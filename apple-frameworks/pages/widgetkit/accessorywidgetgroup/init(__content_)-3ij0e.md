> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/accessorywidgetgroup/init(_:content:)-3ij0e](https://developer.apple.com/documentation/widgetkit/accessorywidgetgroup/init(_:content:)-3ij0e)

# init(\_:content:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** watchOS 11.0+

Creates an `AccessoryWidgetGroup` that generates its label from a string.

## Declaration

```swift
@MainActor @preconcurrency init(_ title: some StringProtocol, @ViewBuilder content: () -> Content)
```

## Parameters

- `title`: A string for the label of `AccessoryWidgetGroup`.
- `content`: A view builder for the content of the accessory group.

<a id="discussion"></a>

## Discussion

This initializer creates a `Text` view on your behalf, and treats the label similar to `Text/init(_:)-9d1g4`. See `Text` for more information about localizing strings.
