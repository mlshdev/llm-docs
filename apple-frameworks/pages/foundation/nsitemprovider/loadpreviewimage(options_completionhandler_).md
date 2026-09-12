> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/loadpreviewimage(options:completionhandler:)](https://developer.apple.com/documentation/foundation/nsitemprovider/loadpreviewimage(options:completionhandler:))

# loadPreviewImage(options:completionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Loads the preview image for the item that the item provider represents.

## Declaration

```swift
func loadPreviewImage(options: [AnyHashable : Any]! = [:], completionHandler: NSItemProvider.CompletionHandler!)
```

```swift
func loadPreviewImage(options: [AnyHashable : Any]! = [:]) async throws -> any NSSecureCoding
```

## Parameters

- `options`: A dictionary of keys and values that provide information about the item, such as the size of an image. For a list of possible keys, see [Options Dictionary Key](../options-dictionary-key.md).
- `completionHandler`: A completion handler block to execute with the results. The first parameter of this block must be a parameter of type [NSData](../nsdata.md), [NSURL](../nsurl.md), [UIImage](../../uikit/uiimage.md) (in iOS), or [NSImage](https://developer.apple.com/documentation/appkit/nsimage) (in macOS) for receiving the image data. For more information about implementing the block, see [NSItemProvider.CompletionHandler](completionhandler.md).

<a id="Discussion"></a>

## Discussion

To handle image preview yourself, provide a completion handler block that returns an [NSData](../nsdata.md) or [NSURL](../nsurl.md) object, or an instance of a platform-specific image class ([UIImage](../../uikit/uiimage.md) or [NSImage](https://developer.apple.com/documentation/appkit/nsimage)).

This method supports implicit type coercion for the item parameter of the completion block.

## See Also

### Loading a preview image

- [previewImageHandler](previewimagehandler.md): The custom preview image handler block for the item provider.

# loadPreviewImageWithOptions:completionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Loads the preview image for the item that the item provider represents.

## Declaration

```objectivec
- (void) loadPreviewImageWithOptions:(NSDictionary *) options completionHandler:(NSItemProviderCompletionHandler) completionHandler;
```

## Parameters

- `options`: A dictionary of keys and values that provide information about the item, such as the size of an image. For a list of possible keys, see [Options Dictionary Key](../options-dictionary-key.md).
- `completionHandler`: A completion handler block to execute with the results. The first parameter of this block must be a parameter of type [NSData](../nsdata.md), [NSURL](../nsurl.md), [UIImage](../../uikit/uiimage.md) (in iOS), or [NSImage](https://developer.apple.com/documentation/appkit/nsimage) (in macOS) for receiving the image data. For more information about implementing the block, see [NSItemProviderCompletionHandler](completionhandler.md).

<a id="Discussion"></a>

## Discussion

To handle image preview yourself, provide a completion handler block that returns an [NSData](../nsdata.md) or [NSURL](../nsurl.md) object, or an instance of a platform-specific image class ([UIImage](../../uikit/uiimage.md) or [NSImage](https://developer.apple.com/documentation/appkit/nsimage)).

This method supports implicit type coercion for the item parameter of the completion block.

## See Also

### Loading a preview image

- [previewImageHandler](previewimagehandler.md): The custom preview image handler block for the item provider.
