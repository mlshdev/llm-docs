> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/previewimagehandler](https://developer.apple.com/documentation/foundation/nsitemprovider/previewimagehandler)

# previewImageHandler (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The custom preview image handler block for the item provider.

## Declaration

```swift
var previewImageHandler: NSItemProvider.LoadHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

In your image handler block, return an [NSURL](../nsurl.md) object that specifies a file, or return an [NSData](../nsdata.md) object.

## See Also

### Loading a preview image

- [loadPreviewImage(options:completionHandler:)](loadpreviewimage%28options_completionhandler_%29.md): Loads the preview image for the item that the item provider represents.

# previewImageHandler (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The custom preview image handler block for the item provider.

## Declaration

```objectivec
@property (atomic, copy, nullable) NSItemProviderLoadHandler previewImageHandler;
```

<a id="Discussion"></a>

## Discussion

In your image handler block, return an [NSURL](../nsurl.md) object that specifies a file, or return an [NSData](../nsdata.md) object.

## See Also

### Loading a preview image

- [loadPreviewImageWithOptions:completionHandler:](loadpreviewimage%28options_completionhandler_%29.md): Loads the preview image for the item that the item provider represents.
