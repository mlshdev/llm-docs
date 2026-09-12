> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/windowgroup/init(makecontent:)](https://developer.apple.com/documentation/swiftui/windowgroup/init(makecontent:))

# init(makeContent:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a window group.

## Declaration

```swift
@export(implementation) nonisolated init(@ContentBuilder makeContent: @escaping () -> Content)
```

## Parameters

- `makeContent`: A closure that creates the content for each instance of the group.

<a id="discussion"></a>

## Discussion

The window group uses the given view as a template to form the content of each window in the group.
