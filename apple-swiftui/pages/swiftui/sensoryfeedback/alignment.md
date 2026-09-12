> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/sensoryfeedback/alignment](https://developer.apple.com/documentation/swiftui/sensoryfeedback/alignment)

# alignment

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 26.0+ · watchOS 10.0+

Indicates the alignment of a dragged item.

## Declaration

```swift
static let alignment: SensoryFeedback
```

<a id="discussion"></a>

## Discussion

For example, use this pattern in a drawing app when the user drags a shape into alignment with another shape.

Only plays feedback on iOS and macOS.

## See Also

### Indicating changes and selections

- [decrease](decrease.md): Indicates that an important value decreased below a significant threshold.
- [increase](increase.md): Indicates that an important value increased above a significant threshold.
- [levelChange](levelchange.md): Indicates movement between discrete levels of pressure.
- [selection](selection.md): Indicates that a UI element’s values are changing.
- [pathComplete](pathcomplete.md): Indicates a drawn path has completed and/or recognized.
