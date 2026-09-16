> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/modifiedcontent/init(content:modifier:)

# init(content:modifier:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A structure that defines the content and modifier needed to produce a new view or view modifier.

## Declaration

```swift
nonisolated init(content: Content, modifier: Modifier)
```

## Parameters

- `content`: The content that the modifier changes.
- `modifier`: The modifier to apply to the content.

<a id="discussion"></a>

## Discussion

If `content` is a [View](../view.md) and `modifier` is a [ViewModifier](../viewmodifier.md), the result is a [View](../view.md). If `content` and `modifier` are both view modifiers, then the result is a new [ViewModifier](../viewmodifier.md) combining them.

## See Also

### Creating a modified content view

- [content](content.md): The content that the modifier transforms into a new view or new view modifier.
- [modifier](modifier.md): The view modifier.
