> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toggle/init(sources:ison:label:)](https://developer.apple.com/documentation/swiftui/toggle/init(sources:ison:label:))

# init(sources:isOn:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a toggle representing a collection of values with a custom label.

## Declaration

```swift
nonisolated init<C>(sources: C, isOn: KeyPath<C.Element, Binding<Bool>>, @ContentBuilder label: () -> Label) where C : RandomAccessCollection
```

## Parameters

- `sources`: A collection of values used as the source for rendering the Toggle’s state.
- `isOn`: The key path of the values that determines whether the toggle is on, mixed or off.
- `label`: A view that describes the purpose of the toggle.

<a id="discussion"></a>

## Discussion

The following example creates a single toggle that represents the state of multiple alarms:

```swift
struct Alarm: Hashable, Identifiable {
    var id = UUID()
    var isOn = false
    var name = ""
}

@State private var alarms = [
    Alarm(isOn: true, name: "Morning"),
    Alarm(isOn: false, name: "Evening")
]

Toggle(sources: $alarms, isOn: \.isOn) {
    Text("Enable all alarms")
}
```

## See Also

### Creating a toggle for a collection

- [init(\_:sources:isOn:)](init%28__sources_ison_%29.md): Conforms when `Label` is `Text`. Creates a toggle representing a collection of values that generates its label from a localized string resource.
- [init(\_:image:sources:isOn:)](init%28__image_sources_ison_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a toggle representing a collection of values that generates its label from a localized string resource and image resource.
- [init(\_:systemImage:sources:isOn:)](init%28__systemimage_sources_ison_%29.md): Conforms when `Label` is `Label<Text, Image>`. Creates a toggle representing a collection of values that generates its label from a localized string key and system image.
