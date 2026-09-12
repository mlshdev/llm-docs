> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/accessorywidgetgroup/init(_:systemimage:content:)-7rnqc](https://developer.apple.com/documentation/widgetkit/accessorywidgetgroup/init(_:systemimage:content:)-7rnqc)

# init(\_:systemImage:content:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** watchOS 11.0+

Creates an `AccessoryWidgetGroup` that generates its label from a string and system image name.

## Declaration

```swift
@MainActor @preconcurrency init(_ titleKey: some StringProtocol, systemImage: String, @ViewBuilder content: () -> Content)
```

## Parameters

- `titleKey`: A string for the `AccessoryWidgetGroup`’s label.
- `systemImage`: The name of the image resource to lookup.
- `content`: A view builder for the content of the accessory group.

<a id="discussion"></a>

## Discussion

This initializer creates a `Label` view on your behalf, and treats the label similar to `Text/init(_:)-9d1g4`. See `Text` for more information about localizing strings.
