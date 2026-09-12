> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayview/selectableitemshighlighted](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/selectableitemshighlighted)

# selectableItemsHighlighted

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether the overlay view highlights actionable text or data that the analyzer detects in text.

## Declaration

```swift
@MainActor final var selectableItemsHighlighted: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The overlay view manages this property value for you. It sets this property to `false` if you set the [analysis](analysis.md) property or the [activeInteractionTypes](activeinteractiontypes.md) property to an empty set. Otherwise, it sets this property depending on whether the user toggles the Live Text button in the interface.

## See Also

### Querying the interface state

- [liveTextButtonVisible](livetextbuttonvisible.md): A Boolean value that indicates whether the Live Text button appears.
- [isSupplementaryInterfaceHidden](issupplementaryinterfacehidden.md): A Boolean value that indicates whether the view hides supplementary interface objects.
- [hasInteractiveItem(at:)](hasinteractiveitem%28at_%29.md): Returns a Boolean value that indicates whether active text, data detectors, or supplementary interface objects exist at the specified point.
- [hasSupplementaryInterface(at:)](hassupplementaryinterface%28at_%29.md): Returns a Boolean value that indicates whether supplementary interface objects exist at the specified point.
