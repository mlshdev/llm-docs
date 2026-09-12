> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicedelegate/sharingservice(_:transitionimageforshareitem:contentrect:)](https://developer.apple.com/documentation/appkit/nssharingservicedelegate/sharingservice(_:transitionimageforshareitem:contentrect:))

# sharingService(\_:transitionImageForShareItem:contentRect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Invoked to allow returning a custom transition image when sharing an item.

## Declaration

```swift
@MainActor optional func sharingService(_ sharingService: NSSharingService, transitionImageForShareItem item: Any, contentRect: UnsafeMutablePointer<NSRect>) -> NSImage?
```

## Parameters

- `sharingService`: The sharing service.
- `item`: The shared item.
- `contentRect`: The content rectangle is the frame of the actual content inside the transition image, excluding all decorations. For example, if the transition image is a QuickLook thumbnail, the value would be `QLThumbnailGetContentRect`.

<a id="return-value"></a>

## Return Value

The image to display for the sharing transition. Its size should exactly match that of the original image.

<a id="Discussion"></a>

## Discussion

A sample implementation of this method:

```objc
- (NSImage *)sharingService:(NSSharingService *)sharingService
             transitionImageForShareItem:(id <NSPasteboardWriting>)item
             contentRect:(NSRect *)contentRect
{
    if ([item isKindOfClass:[NSImage class]]) {
        return [_imageView image];
    }
}
```

## See Also

### Customizing Transition Animation

- [sharingService(\_:sourceFrameOnScreenForShareItem:)](sharingservice%28__sourceframeonscreenforshareitem_%29.md): Invoked when the sharing service is performed and the sharing window is displayed, to present a transition between the original items and the sharing window.
- [sharingService(\_:sourceWindowForShareItems:sharingContentScope:)](sharingservice%28__sourcewindowforshareitems_sharingcontentscope_%29.md): Returns the window that contained the share items.
- [NSSharingService.SharingContentScope](../nssharingservice/sharingcontentscope.md): The sharing scope constants specify the nature of the things you are sharing.

# sharingService:transitionImageForShareItem:contentRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked to allow returning a custom transition image when sharing an item.

## Declaration

```objectivec
- (NSImage *) sharingService:(NSSharingService *) sharingService transitionImageForShareItem:(id) item contentRect:(NSRect *) contentRect;
```

## Parameters

- `sharingService`: The sharing service.
- `item`: The shared item.
- `contentRect`: The content rectangle is the frame of the actual content inside the transition image, excluding all decorations. For example, if the transition image is a QuickLook thumbnail, the value would be `QLThumbnailGetContentRect`.

<a id="return-value"></a>

## Return Value

The image to display for the sharing transition. Its size should exactly match that of the original image.

<a id="Discussion"></a>

## Discussion

A sample implementation of this method:

```objc
- (NSImage *)sharingService:(NSSharingService *)sharingService
             transitionImageForShareItem:(id <NSPasteboardWriting>)item
             contentRect:(NSRect *)contentRect
{
    if ([item isKindOfClass:[NSImage class]]) {
        return [_imageView image];
    }
}
```

## See Also

### Customizing Transition Animation

- [sharingService:sourceFrameOnScreenForShareItem:](sharingservice%28__sourceframeonscreenforshareitem_%29.md): Invoked when the sharing service is performed and the sharing window is displayed, to present a transition between the original items and the sharing window.
- [sharingService:sourceWindowForShareItems:sharingContentScope:](sharingservice%28__sourcewindowforshareitems_sharingcontentscope_%29.md): Returns the window that contained the share items.
- [NSSharingContentScope](../nssharingservice/sharingcontentscope.md): The sharing scope constants specify the nature of the things you are sharing.
