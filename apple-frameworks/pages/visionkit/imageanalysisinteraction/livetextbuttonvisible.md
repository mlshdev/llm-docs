> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/livetextbuttonvisible

# liveTextButtonVisible

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

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
- [selectableItemsHighlighted](selectableitemshighlighted.md): A Boolean value that indicates whether the interaction highlights actionable text or data the analyzer detects in text.
