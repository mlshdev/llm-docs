> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteraction/hasinteractiveitem(at:)](https://developer.apple.com/documentation/visionkit/imageanalysisinteraction/hasinteractiveitem(at:))

# hasInteractiveItem(at:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Returns a Boolean value that indicates whether active text, data detectors, or supplementary interface objects exist at the specified point.

## Declaration

```swift
@MainActor final func hasInteractiveItem(at point: CGPoint) -> Bool
```

## Parameters

- `point`: A point in the image, in view coordinates.

<a id="return-value"></a>

## Return Value

`true` if active text, data detectors, or supplementary interface objects exist at `point`; otherwise, `false`.

## See Also

### Querying the interface state

- [liveTextButtonVisible](livetextbuttonvisible.md): A Boolean value that indicates whether the Live Text button appears.
- [isSupplementaryInterfaceHidden](issupplementaryinterfacehidden.md): A Boolean value that indicates whether the view hides supplementary interface objects.
- [hasSupplementaryInterface(at:)](hassupplementaryinterface%28at_%29.md): Returns a Boolean value that indicates whether supplementary interface objects exist at the specified point.
- [selectableItemsHighlighted](selectableitemshighlighted.md): A Boolean value that indicates whether the interaction highlights actionable text or data the analyzer detects in text.
