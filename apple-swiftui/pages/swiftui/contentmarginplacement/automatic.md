> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/contentmarginplacement/automatic

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The automatic placement.

## Declaration

```swift
static var automatic: ContentMarginPlacement { get }
```

<a id="discussion"></a>

## Discussion

Views that support margin customization can automatically use margins with this placement. For example, a [ScrollView](../scrollview.md) will use this placement to automatically inset both its content and scroll indicators by the specified amount.

## See Also

### Getting the placement

- [scrollContent](scrollcontent.md): The scroll content placement.
- [scrollIndicators](scrollindicators.md): The scroll indicators placement.
