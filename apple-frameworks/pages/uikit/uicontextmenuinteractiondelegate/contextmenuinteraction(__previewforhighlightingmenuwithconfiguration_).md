> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction(_:previewforhighlightingmenuwithconfiguration:)](https://developer.apple.com/documentation/uikit/uicontextmenuinteractiondelegate/contextmenuinteraction(_:previewforhighlightingmenuwithconfiguration:))

# contextMenuInteraction(\_:previewForHighlightingMenuWithConfiguration:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the source view to use when animating the appearance of the preview interface.

> Use [contextMenuInteraction(\_:configuration:highlightPreviewForItemWithIdentifier:)](contextmenuinteraction%28__configuration_highlightpreviewforitemwithidentifier_%29.md) instead.

## Declaration

```swift
optional func contextMenuInteraction(_ interaction: UIContextMenuInteraction, previewForHighlightingMenuWithConfiguration configuration: UIContextMenuConfiguration) -> UITargetedPreview?
```

## Parameters

- `interaction`: The interaction object that triggered the preview.
- `configuration`: The configuration object associated with the current interaction.

<a id="return-value"></a>

## Return Value

An object containing the source view and configuration parameters for the animation.

<a id="Discussion"></a>

## Discussion

UIKit calls this method before an interaction begins, to give you an opportunity to supply a custom source view for the presentation animations. If you didn’t provide a preview handler block in the `configuration` data, UIKit displays the specified view in the preview interface.

## See Also

### Deprecated

- [contextMenuInteraction(\_:previewForDismissingMenuWithConfiguration:)](contextmenuinteraction%28__previewfordismissingmenuwithconfiguration_%29.md): Deprecated. Returns the destination view to use when animating the appearance of the preview interface.

# contextMenuInteraction:previewForHighlightingMenuWithConfiguration: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 16.0) · iPadOS 13.0+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · visionOS 1.0+ (deprecated in 1.0)

Returns the source view to use when animating the appearance of the preview interface.

> Use [contextMenuInteraction:configuration:highlightPreviewForItemWithIdentifier:](contextmenuinteraction%28__configuration_highlightpreviewforitemwithidentifier_%29.md) instead.

## Declaration

```objectivec
- (UITargetedPreview *) contextMenuInteraction:(UIContextMenuInteraction *) interaction previewForHighlightingMenuWithConfiguration:(UIContextMenuConfiguration *) configuration;
```

## Parameters

- `interaction`: The interaction object that triggered the preview.
- `configuration`: The configuration object associated with the current interaction.

<a id="return-value"></a>

## Return Value

An object containing the source view and configuration parameters for the animation.

<a id="Discussion"></a>

## Discussion

UIKit calls this method before an interaction begins, to give you an opportunity to supply a custom source view for the presentation animations. If you didn’t provide a preview handler block in the `configuration` data, UIKit displays the specified view in the preview interface.

## See Also

### Deprecated

- [contextMenuInteraction:previewForDismissingMenuWithConfiguration:](contextmenuinteraction%28__previewfordismissingmenuwithconfiguration_%29.md): Deprecated. Returns the destination view to use when animating the appearance of the preview interface.
