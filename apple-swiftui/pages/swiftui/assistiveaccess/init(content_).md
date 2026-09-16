> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/assistiveaccess/init(content:)

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
