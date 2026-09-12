> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowgroup/init(_:id:for:content:defaultvalue:)](https://developer.apple.com/documentation/swiftui/windowgroup/init(_:id:for:content:defaultvalue:))

# init(\_:id:for:content:defaultValue:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a data-presenting window group with a localized title string, an identifier, and a default value.

## Declaration

```swift
@export(implementation) nonisolated init<D, C>(_ titleResource: LocalizedStringResource, id: String, for type: D.Type = D.self, @ContentBuilder content: @escaping (Binding<D>) -> C, defaultValue: @escaping () -> D) where Content == PresentedWindowContent<D, C>, D : Decodable, D : Encodable, D : Hashable, C : View
```

## Parameters

- `titleResource`: The title key to use for the group’s title.
- `id`: A string that uniquely identifies the window group. Identifiers must be unique among the window groups in your app.
- `type`: The type of presented data this window group accepts.
- `content`: A closure that creates the content for each instance of the group. The closure receives a binding to the value that you pass into the [openWindow](../environmentvalues/openwindow.md) action when you open the window. SwiftUI automatically persists and restores the value of this binding as part of the state restoration process.
- `defaultValue`: A closure that returns a default value to present. SwiftUI calls this closure when it has no data to provide, like when someone opens a new window from the File \> New Window menu item.

<a id="discussion"></a>

## Discussion

The window group uses the specified content as a template to create each window in the group.

The system uses the title to distinguish the window group in the user interface, such as in the name of commands associated with the group.

SwiftUI creates a window from the group when you present a value of the specified type using the [openWindow](../environmentvalues/openwindow.md) action.

## See Also

### Identifying a window group that has default data

- [init(id:for:content:defaultValue:)](init%28id_for_content_defaultvalue_%29.md): Conforms when `Content` conforms to `View`. Creates a data-presenting window group with an identifier and a default value.
