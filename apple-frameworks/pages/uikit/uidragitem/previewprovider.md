> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidragitem/previewprovider](https://developer.apple.com/documentation/uikit/uidragitem/previewprovider)

# previewProvider (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A visual preview of the drag item, displayed while the user drags the item across the screen.

## Declaration

```swift
var previewProvider: (() -> UIDragPreview?)? { get set }
```

<a id="Discussion"></a>

## Discussion

As the user drags an item across the screen, the system displays a preview. You can change the preview by setting [previewProvider](previewprovider.md) to a block that returns a [UIDragPreview](../uidragpreview.md) object. The system invokes the block if and when it needs the drag item preview.

To use the default preview, set [previewProvider](previewprovider.md) to `nil`. To hide the preview, set [previewProvider](previewprovider.md) to a block that returns `nil`.

## See Also

### Changing the drag item preview

- [setNeedsDropPreviewUpdate()](setneedsdroppreviewupdate%28%29.md): Notifies the operating system that an updated drop preview is available for the item.

# previewProvider (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A visual preview of the drag item, displayed while the user drags the item across the screen.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIDragPreview * (^previewProvider)();
```

<a id="Discussion"></a>

## Discussion

As the user drags an item across the screen, the system displays a preview. You can change the preview by setting [previewProvider](previewprovider.md) to a block that returns a [UIDragPreview](../uidragpreview.md) object. The system invokes the block if and when it needs the drag item preview.

To use the default preview, set [previewProvider](previewprovider.md) to `nil`. To hide the preview, set [previewProvider](previewprovider.md) to a block that returns `nil`.

## See Also

### Changing the drag item preview

- [setNeedsDropPreviewUpdate](setneedsdroppreviewupdate%28%29.md): Notifies the operating system that an updated drop preview is available for the item.
