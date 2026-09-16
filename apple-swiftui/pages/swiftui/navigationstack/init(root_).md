> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/navigationstack/init(root:)

# init(root:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a navigation stack that manages its own navigation state.

## Declaration

```swift
nonisolated init(@ContentBuilder root: () -> Root) where Data == NavigationPath
```

## Parameters

- `root`: The view to display when the stack is empty.
