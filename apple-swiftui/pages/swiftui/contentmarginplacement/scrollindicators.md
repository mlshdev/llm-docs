> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/contentmarginplacement/scrollindicators

# scrollIndicators

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The scroll indicators placement.

## Declaration

```swift
static var scrollIndicators: ContentMarginPlacement { get }
```

<a id="discussion"></a>

## Discussion

Scrollable views like [ScrollView](../scrollview.md) will use this placement to inset their scroll indicators, but not their content.

## See Also

### Getting the placement

- [automatic](automatic.md): The automatic placement.
- [scrollContent](scrollcontent.md): The scroll content placement.
