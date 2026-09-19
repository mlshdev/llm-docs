> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uidocumentinteractioncontroller/dismisspreview(animated:)

# dismissPreview(animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Dismisses the currently active document preview.

## Declaration

```swift
func dismissPreview(animated: Bool)
```

## Parameters

- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the dismissal of the document preview or [false](https://developer.apple.com/documentation/swift/false) to dismiss it immediately.

<a id="Discussion"></a>

## Discussion

Use this method to dismiss the document preview programmatically. The document interaction controller may also dismiss the document preview automatically in response to user actions.

## See Also

### Presenting and dismissing a document preview

- [presentPreview(animated:)](presentpreview%28animated_%29.md): Displays a full-screen preview of the target document.

# dismissPreviewAnimated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Dismisses the currently active document preview.

## Declaration

```objectivec
- (void) dismissPreviewAnimated:(BOOL) animated;
```

## Parameters

- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) to animate the dismissal of the document preview or [false](https://developer.apple.com/documentation/swift/false) to dismiss it immediately.

<a id="Discussion"></a>

## Discussion

Use this method to dismiss the document preview programmatically. The document interaction controller may also dismiss the document preview automatically in response to user actions.

## See Also

### Presenting and dismissing a document preview

- [presentPreviewAnimated:](presentpreview%28animated_%29.md): Displays a full-screen preview of the target document.
