> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/accessorywidgetgroup/init(_:image:content:)-66iys](https://developer.apple.com/documentation/widgetkit/accessorywidgetgroup/init(_:image:content:)-66iys)

# init(\_:image:content:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** watchOS 11.0+

Creates an `AccessoryWidgetGroup` that generates its label from a string and image resource.

## Declaration

```swift
@MainActor @preconcurrency init(_ title: some StringProtocol, image: ImageResource, @ViewBuilder content: () -> Content)
```

## Parameters

- `title`: A string for the label of `AccessoryWidgetGroup`.
- `image`: The image resource to lookup.
- `content`: A view builder for the content of the accessory group.

<a id="discussion"></a>

## Discussion

This initializer creates a `Label` view on your behalf, and treats the label similar to `Text/init(_:)-9d1g4`. See `Text` for more information about localizing strings.
