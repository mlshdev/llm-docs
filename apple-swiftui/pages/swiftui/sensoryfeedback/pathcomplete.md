> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/sensoryfeedback/pathcomplete

# pathComplete

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · macOS 14.5+ · tvOS 17.5+ · visionOS 26.0+ · watchOS 10.5+

Indicates a drawn path has completed and/or recognized.

## Declaration

```swift
static let pathComplete: SensoryFeedback
```

<a id="discussion"></a>

## Discussion

Use this to provide feedback for closed shape drawing or similar actions. It should supplement the user experience, since only some platforms will play feedback in response to it.

Only plays feedback on iOS.

## See Also

### Indicating changes and selections

- [alignment](alignment.md): Indicates the alignment of a dragged item.
- [decrease](decrease.md): Indicates that an important value decreased below a significant threshold.
- [increase](increase.md): Indicates that an important value increased above a significant threshold.
- [levelChange](levelchange.md): Indicates movement between discrete levels of pressure.
- [selection](selection.md): Indicates that a UI element’s values are changing.
