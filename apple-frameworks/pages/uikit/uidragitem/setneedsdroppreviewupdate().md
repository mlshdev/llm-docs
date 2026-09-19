> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uidragitem/setneedsdroppreviewupdate()

# setNeedsDropPreviewUpdate() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+

Notifies the operating system that an updated drop preview is available for the item.

## Declaration

```swift
func setNeedsDropPreviewUpdate()
```

<a id="Discussion"></a>

## Discussion

Call this method to provide an updated drop preview after UIKit has started the drop animation. If the drop animation is still ongoing, UIKit calls the drop interaction delegate’s [dropInteraction(\_:previewForDropping:withDefault:)](../uidropinteractiondelegate/dropinteraction%28__previewfordropping_withdefault_%29.md) method, passing the previous drop preview as the `defaultPreview`.

## See Also

### Changing the drag item preview

- [previewProvider](previewprovider.md): A visual preview of the drag item, displayed while the user drags the item across the screen.

# setNeedsDropPreviewUpdate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS 1.1+

Notifies the operating system that an updated drop preview is available for the item.

## Declaration

```objectivec
- (void) setNeedsDropPreviewUpdate;
```

<a id="Discussion"></a>

## Discussion

Call this method to provide an updated drop preview after UIKit has started the drop animation. If the drop animation is still ongoing, UIKit calls the drop interaction delegate’s [dropInteraction:previewForDroppingItem:withDefault:](../uidropinteractiondelegate/dropinteraction%28__previewfordropping_withdefault_%29.md) method, passing the previous drop preview as the `defaultPreview`.

## See Also

### Changing the drag item preview

- [previewProvider](previewprovider.md): A visual preview of the drag item, displayed while the user drags the item across the screen.
