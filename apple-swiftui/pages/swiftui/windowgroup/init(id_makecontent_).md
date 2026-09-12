> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowgroup/init(id:makecontent:)](https://developer.apple.com/documentation/swiftui/windowgroup/init(id:makecontent:))

# init(id:makeContent:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a window group with an identifier.

## Declaration

```swift
@export(implementation) nonisolated init(id: String, @ContentBuilder makeContent: @escaping () -> Content)
```

## Parameters

- `id`: A string that uniquely identifies the window group. Identifiers must be unique among the window groups in your app.
- `makeContent`: A closure that creates the content for each instance of the group.

<a id="discussion"></a>

## Discussion

The window group uses the given view as a template to form the content of each window in the group.
