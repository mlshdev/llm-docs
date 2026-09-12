> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/accessorywidgetgroup/init(_:image:content:)-50iyk](https://developer.apple.com/documentation/widgetkit/accessorywidgetgroup/init(_:image:content:)-50iyk)

# init(\_:image:content:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** watchOS 11.0+

Creates an `AccessoryWidgetGroup` that generates its label from a localized string key and image resource.

## Declaration

```swift
@MainActor @preconcurrency init(_ titleKey: LocalizedStringKey, image: ImageResource, @ViewBuilder content: () -> Content)
```

## Parameters

- `titleKey`: The key for the `AccessoryWidgetGroup`’s localized label.
- `image`: The image resource to lookup.
- `content`: A view builder for the content of the accessory group.

<a id="discussion"></a>

## Discussion

This initializer creates a `Label` view on your behalf, and treats the localized key similar to `Text/init(_:tableName:bundle:comment:)`. See `Text` for more information about localizing strings.
