> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/widgetkit/activityconfiguration/init(for:content:dynamicisland:)

# init(for:content:dynamicIsland:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 16.1+ · iPadOS 16.1+

Creates a configuration object for a Live Activity.

## Declaration

```swift
@MainActor @preconcurrency init<Content>(for attributesType: Attributes.Type, @ViewBuilder content: @escaping (ActivityViewContext<Attributes>) -> Content, dynamicIsland: @escaping (ActivityViewContext<Attributes>) -> DynamicIsland) where Content : View
```

## Parameters

- `attributesType`: The type that describes the content of the Live Activity.
- `content`: A closure that creates the view for the Live Activity that appears on the Lock Screen. This view also appears as a banner on the Home Screen of devices that don’t support the Dynamic Island when you alert a person about updated Live Activity content.
- `dynamicIsland`: A closure that builds the Live Activity that appears in the Dynamic Island.

## See Also

### Creating a Live Activity configuration

- [ActivityViewContext](../activityviewcontext.md): A structure that describes the view context for creating the views of a Live Activity.
