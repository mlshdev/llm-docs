> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/assistiveaccess/init(content:)](https://developer.apple.com/documentation/swiftui/assistiveaccess/init(content:))

# init(content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates an Assistive Access scene.

## Declaration

```swift
nonisolated init(@ContentBuilder content: () -> Content)
```

## Parameters

- `content`: A closure that creates the content for the app when Assistive Access is enabled.

<a id="discussion"></a>

## Discussion

When Assistive Access is enabled, the given view is used as the root view of the app.
