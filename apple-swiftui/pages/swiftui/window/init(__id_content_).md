> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/window/init(_:id:content:)](https://developer.apple.com/documentation/swiftui/window/init(_:id:content:))

# init(\_:id:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 13.0+ · visionOS 26.0+

Creates a window with a localized title and an identifier.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, id: String, @ContentBuilder content: () -> Content)
```

## Parameters

- `titleResource`: A localized string resource to use for the window’s title in system menus and in the window’s title bar. Provide a title that describes the purpose of the window.
- `id`: A unique string identifier that you can use to open the window.
- `content`: The view content to display in the window.

<a id="discussion"></a>

## Discussion

The window displays the view that you specify.
