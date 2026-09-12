> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteraction/issupplementaryinterfacehidden](https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/issupplementaryinterfacehidden)

# isSupplementaryInterfaceHidden

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the view hides supplementary interface objects.

## Declaration

```swift
@MainActor final var isSupplementaryInterfaceHidden: Bool { get set }
```

## Mentioned In

- [Enabling Live Text interactions with images](../enabling-live-text-interactions-with-images.md)

<a id="discussion"></a>

## Discussion

Supplementary interface objects include the Live Text button and Quick Actions, depending on the item type. Setting this property invokes the [setSupplementaryInterfaceHidden(\_:animated:)](setsupplementaryinterfacehidden%28__animated_%29.md) method, passing this property value and `true` for the `animated` parameter.

## See Also

### Querying the interface state

- [liveTextButtonVisible](livetextbuttonvisible.md): A Boolean value that indicates whether the Live Text button appears.
- [hasInteractiveItem(at:)](hasinteractiveitem%28at_%29.md): Returns a Boolean value that indicates whether active text, data detectors, or supplementary interface objects exist at the specified point.
- [hasSupplementaryInterface(at:)](hassupplementaryinterface%28at_%29.md): Returns a Boolean value that indicates whether supplementary interface objects exist at the specified point.
- [selectableItemsHighlighted](selectableitemshighlighted.md): A Boolean value that indicates whether the interaction highlights actionable text or data the analyzer detects in text.
