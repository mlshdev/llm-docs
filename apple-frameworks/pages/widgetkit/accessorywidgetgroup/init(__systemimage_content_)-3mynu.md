> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/accessorywidgetgroup/init(_:systemimage:content:)-3mynu](https://developer.apple.com/documentation/widgetkit/accessorywidgetgroup/init(_:systemimage:content:)-3mynu)

# init(\_:systemImage:content:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** watchOS 11.0+

Creates an `AccessoryWidgetGroup` that generates its label from a localized string resource and a system image name.

## Declaration

```swift
@MainActor @preconcurrency init(_ titleResource: LocalizedStringResource, systemImage: String, @ViewBuilder content: () -> Content)
```

## Parameters

- `titleResource`: Resource for the `AccessoryWidgetGroup`’s localized label.
- `systemImage`: The name of the image resource to lookup.
- `content`: A view builder for the content of the accessory group.

<a id="discussion"></a>

## Discussion

This initializer creates a `Label` view on your behalf. See `Text` for more information about localizing strings.
