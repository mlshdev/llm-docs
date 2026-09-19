> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/widgetkit/accessorywidgetgroup/init(label:content:)

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

## See Also

### Creating an accessory widget group

- [init(\_:content:)](init%28__content_%29-3ij0e.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a string.
- [init(\_:content:)](init%28__content_%29-75rkg.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a localized string resource.
- [init(\_:content:)](init%28__content_%29-nb0.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a localized string key.
- [init(\_:image:content:)](init%28__image_content_%29-385rt.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a localized string resource and image resource.
- [init(\_:image:content:)](init%28__image_content_%29-50iyk.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a localized string key and image resource.
- [init(\_:image:content:)](init%28__image_content_%29-66iys.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a string and image resource.
- [init(\_:systemImage:content:)](init%28__systemimage_content_%29-3mynu.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a localized string resource and a system image name.
- [init(\_:systemImage:content:)](init%28__systemimage_content_%29-54h9w.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a localized string key and a system image name.
- [init(\_:systemImage:content:)](init%28__systemimage_content_%29-7rnqc.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a string and system image name.
