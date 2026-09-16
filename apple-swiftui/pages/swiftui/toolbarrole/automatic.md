> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/toolbarrole/automatic

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The automatic role.

## Declaration

```swift
static var automatic: ToolbarRole { get }
```

<a id="discussion"></a>

## Discussion

In iOS, tvOS, and watchOS this resolves to the [navigationStack](navigationstack.md) role. In macOS, this resolves to the [editor](editor.md) role.
