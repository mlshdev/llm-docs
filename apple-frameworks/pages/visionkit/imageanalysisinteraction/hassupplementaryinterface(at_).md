> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/hassupplementaryinterface(at:)

# hasSupplementaryInterface(at:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether supplementary interface objects exist at the specified point.

## Declaration

```swift
@MainActor final func hasSupplementaryInterface(at point: CGPoint) -> Bool
```

## Parameters

- `point`: A point in the image, in view coordinates.

<a id="return-value"></a>

## Return Value

`true` if supplementary interface objects exist at `point`; otherwise, `false`.

<a id="discussion"></a>

## Discussion

Supplementary interface objects include the Live Text button and Quick Actions, depending on the item type.

## See Also

### Querying the interface state

- [liveTextButtonVisible](livetextbuttonvisible.md): A Boolean value that indicates whether the Live Text button appears.
- [isSupplementaryInterfaceHidden](issupplementaryinterfacehidden.md): A Boolean value that indicates whether the view hides supplementary interface objects.
- [hasInteractiveItem(at:)](hasinteractiveitem%28at_%29.md): Returns a Boolean value that indicates whether active text, data detectors, or supplementary interface objects exist at the specified point.
- [selectableItemsHighlighted](selectableitemshighlighted.md): A Boolean value that indicates whether the interaction highlights actionable text or data the analyzer detects in text.
