> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayview/livetextbuttonvisible](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/livetextbuttonvisible)

# liveTextButtonVisible

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether the Live Text button appears.

## Declaration

```swift
@MainActor final var liveTextButtonVisible: Bool { get }
```

<a id="discussion"></a>

## Discussion

When a person taps the Live Text button, it highlights recognized items in the image.

## See Also

### Querying the interface state

- [isSupplementaryInterfaceHidden](issupplementaryinterfacehidden.md): A Boolean value that indicates whether the view hides supplementary interface objects.
- [hasInteractiveItem(at:)](hasinteractiveitem%28at_%29.md): Returns a Boolean value that indicates whether active text, data detectors, or supplementary interface objects exist at the specified point.
- [hasSupplementaryInterface(at:)](hassupplementaryinterface%28at_%29.md): Returns a Boolean value that indicates whether supplementary interface objects exist at the specified point.
- [selectableItemsHighlighted](selectableitemshighlighted.md): A Boolean value that indicates whether the overlay view highlights actionable text or data that the analyzer detects in text.
