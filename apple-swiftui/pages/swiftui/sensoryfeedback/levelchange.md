> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sensoryfeedback/levelchange](https://developer.apple.com/documentation/swiftui/sensoryfeedback/levelchange)

# levelChange

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 26.0+ · watchOS 10.0+

Indicates movement between discrete levels of pressure.

## Declaration

```swift
static let levelChange: SensoryFeedback
```

<a id="discussion"></a>

## Discussion

For example, as the user presses a fast-forward button on a video player, playback could increase or decrease and haptic feedback could be provided as different levels of pressure are reached.

Only plays feedback on macOS.

## See Also

### Indicating changes and selections

- [alignment](alignment.md): Indicates the alignment of a dragged item.
- [decrease](decrease.md): Indicates that an important value decreased below a significant threshold.
- [increase](increase.md): Indicates that an important value increased above a significant threshold.
- [selection](selection.md): Indicates that a UI element’s values are changing.
- [pathComplete](pathcomplete.md): Indicates a drawn path has completed and/or recognized.
