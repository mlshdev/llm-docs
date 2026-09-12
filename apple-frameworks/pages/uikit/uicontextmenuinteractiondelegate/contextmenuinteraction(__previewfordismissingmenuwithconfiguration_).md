> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction(_:previewfordismissingmenuwithconfiguration:)](https://developer.apple.com/documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction(_:previewfordismissingmenuwithconfiguration:))

# contextMenuInteraction(\_:previewForDismissingMenuWithConfiguration:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the destination view to use when animating the appearance of the preview interface.

> Use [contextMenuInteraction(\_:configuration:dismissalPreviewForItemWithIdentifier:)](contextmenuinteraction%28__configuration_dismissalpreviewforitemwithidentifier_%29.md) instead.

## Declaration

```swift
optional func contextMenuInteraction(_ interaction: UIContextMenuInteraction, previewForDismissingMenuWithConfiguration configuration: UIContextMenuConfiguration) -> UITargetedPreview?
```

## Parameters

- `interaction`: The interaction object that triggered the preview.
- `configuration`: The configuration object associated with the current interaction.

<a id="return-value"></a>

## Return Value

An object containing the destination view and configuration parameters for the animation.

<a id="Discussion"></a>

## Discussion

When the user dismisses the preview interface, UIKit animates that interface to the view you specify in the returned [UITargetedPreview](../uitargetedpreview.md) object.

## See Also

### Deprecated

- [contextMenuInteraction(\_:previewForHighlightingMenuWithConfiguration:)](contextmenuinteraction%28__previewforhighlightingmenuwithconfiguration_%29.md): Deprecated. Returns the source view to use when animating the appearance of the preview interface.

# contextMenuInteraction:previewForDismissingMenuWithConfiguration: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the destination view to use when animating the appearance of the preview interface.

> Use [contextMenuInteraction:configuration:dismissalPreviewForItemWithIdentifier:](contextmenuinteraction%28__configuration_dismissalpreviewforitemwithidentifier_%29.md) instead.

## Declaration

```objectivec
- (UITargetedPreview *) contextMenuInteraction:(UIContextMenuInteraction *) interaction previewForDismissingMenuWithConfiguration:(UIContextMenuConfiguration *) configuration;
```

## Parameters

- `interaction`: The interaction object that triggered the preview.
- `configuration`: The configuration object associated with the current interaction.

<a id="return-value"></a>

## Return Value

An object containing the destination view and configuration parameters for the animation.

<a id="Discussion"></a>

## Discussion

When the user dismisses the preview interface, UIKit animates that interface to the view you specify in the returned [UITargetedPreview](../uitargetedpreview.md) object.

## See Also

### Deprecated

- [contextMenuInteraction:previewForHighlightingMenuWithConfiguration:](contextmenuinteraction%28__previewforhighlightingmenuwithconfiguration_%29.md): Deprecated. Returns the source view to use when animating the appearance of the preview interface.
