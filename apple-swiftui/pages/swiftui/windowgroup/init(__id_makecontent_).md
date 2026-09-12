> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowgroup/init(_:id:makecontent:)](https://developer.apple.com/documentation/swiftui/windowgroup/init(_:id:makecontent:))

# init(\_:id:makeContent:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a window group with a text view title and an identifier.

## Declaration

```swift
@export(implementation) nonisolated init(_ title: Text, id: String, @ContentBuilder makeContent: @escaping () -> Content)
```

## Parameters

- `title`: The [Text](../text.md) view to use for the group’s title.
- `id`: A string that uniquely identifies the window group. Identifiers must be unique among the window groups in your app.
- `makeContent`: A closure that creates the content for each instance of the group.

<a id="discussion"></a>

## Discussion

The window group uses the specified content as a template to create each window in the group. The system uses the title to distinguish the window group in the user interface, such as in the name of commands associated with the group.

> **Important**

> The system ignores any text styling that you apply to the [Text](../text.md) view title, like bold or italics. However, you can use the formatting controls that the view offers, like for localization, dates, and numerical representations.
