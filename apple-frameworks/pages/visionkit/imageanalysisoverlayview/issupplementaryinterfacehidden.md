> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayview/issupplementaryinterfacehidden](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayview/issupplementaryinterfacehidden)

# isSupplementaryInterfaceHidden

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether the view hides supplementary interface objects.

## Declaration

```swift
@MainActor final var isSupplementaryInterfaceHidden: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Supplementary interface objects include the Live Text button and the interface for Quick Actions, depending on the item type. Setting this property invokes the [setSupplementaryInterfaceHidden(\_:animated:)](setsupplementaryinterfacehidden%28__animated_%29.md) method, passing this property value and `true` for the animated parameter.

## See Also

### Querying the interface state

- [liveTextButtonVisible](livetextbuttonvisible.md): A Boolean value that indicates whether the Live Text button appears.
- [hasInteractiveItem(at:)](hasinteractiveitem%28at_%29.md): Returns a Boolean value that indicates whether active text, data detectors, or supplementary interface objects exist at the specified point.
- [hasSupplementaryInterface(at:)](hassupplementaryinterface%28at_%29.md): Returns a Boolean value that indicates whether supplementary interface objects exist at the specified point.
- [selectableItemsHighlighted](selectableitemshighlighted.md): A Boolean value that indicates whether the overlay view highlights actionable text or data that the analyzer detects in text.
