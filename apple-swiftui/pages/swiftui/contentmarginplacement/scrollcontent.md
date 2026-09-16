> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/contentmarginplacement/scrollcontent

# scrollContent

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The scroll content placement.

## Declaration

```swift
static var scrollContent: ContentMarginPlacement { get }
```

<a id="discussion"></a>

## Discussion

Scrollable views like [ScrollView](../scrollview.md) will use this placement to inset their content, but not their scroll indicators.

## See Also

### Getting the placement

- [automatic](automatic.md): The automatic placement.
- [scrollIndicators](scrollindicators.md): The scroll indicators placement.
