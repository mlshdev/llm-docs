> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/accessorywidgetgroup](https://developer.apple.com/documentation/widgetkit/accessorywidgetgroup)

# AccessoryWidgetGroup

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** watchOS 11.0+

A view type that has a label at the top and three content views masked with a circle or rounded square.

## Declaration

```swift
@MainActor @preconcurrency struct AccessoryWidgetGroup<Label, Content> where Label : View, Content : View
```

<a id="overview"></a>

## Overview

You can use this view on `.accessoryRectangular` family widgets on watchOS to lay out three content views horizontally inside of a rectangular widget.

Example usage:

```swift
struct WeatherGroupView: View {
   var entry: Provider.Entry

   var body: some View {
       AccessoryWidgetGroup("Weather", systemImage: "cloud.sun.fill") {
           TemperatureWidgetView(entry.temperature)
           ConditionsWidgetView(entry.conditions)
           UVIndexWidgetView(entry.UVIndex)
       }
       .accessoryWidgetGroupStyle(.circular)
   }
}
```

The above example creates an `.accessoryRectangular` widget that has a `SwiftUI.Label` as its label and has three content views: temperature, conditions, and UVIndex; all of which are circular. If fewer than three views are provided, the content views are centered within the available space.

You can change the shape with which the content views are masked using the `.accessoryWidgetGroupStyle(_:)` view modifier.

## Topics

### Initializers

- [init(\_:content:)](accessorywidgetgroup/init%28__content_%29-3ij0e.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a string.
- [init(\_:content:)](accessorywidgetgroup/init%28__content_%29-75rkg.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a localized string resource.
- [init(\_:content:)](accessorywidgetgroup/init%28__content_%29-nb0.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a localized string key.
- [init(\_:image:content:)](accessorywidgetgroup/init%28__image_content_%29-385rt.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a localized string resource and image resource.
- [init(\_:image:content:)](accessorywidgetgroup/init%28__image_content_%29-50iyk.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a localized string key and image resource.
- [init(\_:image:content:)](accessorywidgetgroup/init%28__image_content_%29-66iys.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a string and image resource.
- [init(\_:systemImage:content:)](accessorywidgetgroup/init%28__systemimage_content_%29-3mynu.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a localized string resource and a system image name.
- [init(\_:systemImage:content:)](accessorywidgetgroup/init%28__systemimage_content_%29-54h9w.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a localized string key and a system image name.
- [init(\_:systemImage:content:)](accessorywidgetgroup/init%28__systemimage_content_%29-7rnqc.md): Conforms when `Label` is `Label<Text, Image>` and `Content` conforms to `View`. Creates an `AccessoryWidgetGroup` that generates its label from a string and system image name.
- [init(label:content:)](accessorywidgetgroup/init%28label_content_%29.md): Conforms when `Label` conforms to `View` and `Content` conforms to `View`. Creates an AccessoryWidgetGroup composed of a label and three circular or rounded square contents with equal spacing and vertical alignment.

## Relationships

### Conforms To

- [View](https://developer.apple.com/documentation/swiftui/view)

## See Also

### Accessory and watchOS widgets

- [Creating accessory widgets and watch complications](creating-accessory-widgets-and-watch-complications.md): Support accessory widgets that appear on the Lock Screen and as complications on Apple Watch.
- [AccessoryWidgetGroupStyle](accessorywidgetgroupstyle.md): The style for an [AccessoryWidgetGroup](accessorywidgetgroup.md) view.
- [Migrating ClockKit complications to WidgetKit](converting-a-clockkit-app.md): Leverage WidgetKit’s API to create watchOS complications using SwiftUI.
