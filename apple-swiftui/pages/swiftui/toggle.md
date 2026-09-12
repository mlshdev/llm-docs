> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toggle](https://developer.apple.com/documentation/swiftui/toggle)

# Toggle

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A control that toggles between on and off states.

## Declaration

```swift
nonisolated struct Toggle<Label> where Label : View
```

## Mentioned In

- [Building and customizing the menu bar with SwiftUI](building-and-customizing-the-menu-bar-with-swiftui.md)
- [Declaring a custom view](declaring-a-custom-view.md)
- [Laying out a simple view](laying-out-a-simple-view.md)
- [Populating SwiftUI menus with adaptive controls](populating-swiftui-menus-with-adaptive-controls.md)

<a id="overview"></a>

## Overview

You create a toggle by providing an `isOn` binding and a label. Bind `isOn` to a Boolean property that determines whether the toggle is on or off. Set the label to a view that visually describes the purpose of switching between toggle states. For example:

```swift
@State private var vibrateOnRing = false

var body: some View {
    Toggle(isOn: $vibrateOnRing) {
        Text("Vibrate on Ring")
    }
}
```

For the common case of [Label](label.md) based labels, you can use the convenience initializer that takes a title string (or localized string key) and the name of a system image:

```swift
@State private var vibrateOnRing = true

var body: some View {
    Toggle(
        "Vibrate on Ring",
        systemImage: "dot.radiowaves.left.and.right",
        isOn: $vibrateOnRing
    )
}
```

For text-only labels, you can use the convenience initializer that takes a title string (or localized string key) as its first parameter, instead of a trailing closure:

```swift
@State private var vibrateOnRing = true

var body: some View {
    Toggle("Vibrate on Ring", isOn: $vibrateOnRing)
}
```

For cases where adding a subtitle to the label is desired, use a view builder that creates multiple `Text` views where the first text represents the title and the second text represents the subtitle:

```swift
@State private var vibrateOnRing = false

var body: some View {
    Toggle(isOn: $vibrateOnRing) {
        Text("Vibrate on Ring")
        Text("Enable vibration when the phone rings")
    }
}
```

> **Note**

> This behavior does not apply to [button](togglestyle/button.md).

<a id="Styling-toggles"></a>

### Styling toggles

Toggles use a default style that varies based on both the platform and the context. For more information, read about the [automatic](togglestyle/automatic.md) toggle style.

You can customize the appearance and interaction of toggles by applying styles using the [toggleStyle(\_:)](view/togglestyle%28__%29.md) modifier. You can apply built-in styles, like [switch](togglestyle/switch.md), to either a toggle, or to a view hierarchy that contains toggles:

```swift
VStack {
    Toggle("Vibrate on Ring", isOn: $vibrateOnRing)
    Toggle("Vibrate on Silent", isOn: $vibrateOnSilent)
}
.toggleStyle(.switch)
```

You can also define custom styles by creating a type that conforms to the [ToggleStyle](togglestyle.md) protocol.

## Topics

### Creating a toggle

- [init(\_:isOn:)](toggle/init%28__ison_%29.md): Conforms when `Label` is `Text`. Creates a toggle that generates its label from a localized string resource.
- [init(isOn:label:)](toggle/init%28ison_label_%29.md): Creates a toggle that displays a custom label.
- [init(\_:image:isOn:)](toggle/init%28__image_ison_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a toggle that generates its label from a localized string resource and image resource.
- [init(\_:systemImage:isOn:)](toggle/init%28__systemimage_ison_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a toggle that generates its label from a localized string key and system image.

### Creating a toggle for a collection

- [init(\_:sources:isOn:)](toggle/init%28__sources_ison_%29.md): Conforms when `Label` is `Text`. Creates a toggle representing a collection of values that generates its label from a localized string resource.
- [init(sources:isOn:label:)](toggle/init%28sources_ison_label_%29.md): Creates a toggle representing a collection of values with a custom label.
- [init(\_:image:sources:isOn:)](toggle/init%28__image_sources_ison_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a toggle representing a collection of values that generates its label from a localized string resource and image resource.
- [init(\_:systemImage:sources:isOn:)](toggle/init%28__systemimage_sources_ison_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a toggle representing a collection of values that generates its label from a localized string key and system image.

### Creating a toggle from a configuration

- [init(\_:)](toggle/init%28__%29.md): Conforms when `Label` is `ToggleStyleConfiguration.Label`. Creates a toggle based on a toggle style configuration.

### Creating a toggle for an App Intent

- [init(isOn:intent:label:)](toggle/init%28ison_intent_label_%29.md): Conforms when `Label` conforms to `View`. Creates a toggle performing an `AppIntent`.
- [init(\_:isOn:intent:)](toggle/init%28__ison_intent_%29.md): Conforms when `Label` is `Text`. Creates a toggle performing an `AppIntent` and generates its label from a localized string key.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Getting numeric inputs

- [Slider](slider.md): A control for selecting a value from a bounded linear range of values.
- [Stepper](stepper.md): A control that performs increment and decrement actions.
- [toggleStyle(\_:)](view/togglestyle%28__%29.md): Sets the style for toggles in a view hierarchy.
