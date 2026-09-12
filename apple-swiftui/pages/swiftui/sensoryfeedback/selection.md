> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sensoryfeedback/selection](https://developer.apple.com/documentation/swiftui/sensoryfeedback/selection)

# selection

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 26.0+ · watchOS 10.0+

Indicates that a UI element’s values are changing.

## Declaration

```swift
static let selection: SensoryFeedback
```

<a id="discussion"></a>

## Discussion

Equivalent to [selection(\_:)](selection%28__%29.md) with `SelectionFeedback/default`.

Only plays feedback on iOS and watchOS.

## See Also

### Indicating changes and selections

- [alignment](alignment.md): Indicates the alignment of a dragged item.
- [decrease](decrease.md): Indicates that an important value decreased below a significant threshold.
- [increase](increase.md): Indicates that an important value increased above a significant threshold.
- [levelChange](levelchange.md): Indicates movement between discrete levels of pressure.
- [pathComplete](pathcomplete.md): Indicates a drawn path has completed and/or recognized.
