> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteractiondelegate/interaction(_:livetextbuttondidchangetovisible:)](https://developer.apple.com/documentation/visionkit/imageanalysisinteractiondelegate/interaction(_:livetextbuttondidchangetovisible:))

# interaction(\_:liveTextButtonDidChangeToVisible:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Notifies your app when the Live Text button’s visibility changes.

## Declaration

```swift
@MainActor func interaction(_ interaction: ImageAnalysisInteraction, liveTextButtonDidChangeToVisible visible: Bool)
```

## Parameters

- `interaction`: The interaction object for which the Live Text button appears.
- `visible`: `true` if the Live Text button appears; otherwise,`false`.

## Default Implementations

### ImageAnalysisInteractionDelegate Implementations

- [interaction(\_:liveTextButtonDidChangeToVisible:)](interaction%28__livetextbuttondidchangetovisible_%29-51zmv.md): A default, blank implementation for when the Live Text button appears or disappears.

## See Also

### Tracking interface changes

- [interaction(\_:highlightSelectedItemsDidChange:)](interaction%28__highlightselecteditemsdidchange_%29.md): Notifies your app when recognized items in the image appear highlighted as a result of a person tapping the Live Text button.
- [textSelectionDidChange(\_:)](textselectiondidchange%28__%29.md): Notifies your app when the interaction’s text selection changes.
