> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/utilitywindow/init(_:id:content:)](https://developer.apple.com/documentation/swiftui/utilitywindow/init(_:id:content:))

# init(\_:id:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 15.0+

Creates a utility window with a localized title and identifier.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, id: String, @ContentBuilder content: () -> Content)
```

## Parameters

- `titleResource`: A localized string resource to use in the utility window’s title bar. Provide a title that describes the purpose of the utility window.
- `id`: An unique string identifier that you can use to open the utility window.
- `content`: The view content to display in the utility window.
