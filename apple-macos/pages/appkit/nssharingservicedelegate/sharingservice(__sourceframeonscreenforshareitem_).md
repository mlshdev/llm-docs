> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicedelegate/sharingservice(_:sourceframeonscreenforshareitem:)](https://developer.apple.com/documentation/appkit/nssharingservicedelegate/sharingservice(_:sourceframeonscreenforshareitem:))

# sharingService(\_:sourceFrameOnScreenForShareItem:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Invoked when the sharing service is performed and the sharing window is displayed, to present a transition between the original items and the sharing window.

## Declaration

```swift
@MainActor optional func sharingService(_ sharingService: NSSharingService, sourceFrameOnScreenForShareItem item: Any) -> NSRect
```

## Parameters

- `sharingService`: The sharing service.
- `item`: The item being shared.

<a id="return-value"></a>

## Return Value

The rectangle, in screen coordinates, to display the transition.

<a id="Discussion"></a>

## Discussion

The following is an example implementation of this method:

```objc
- (NSRect)sharingService:(NSSharingService *)sharingService sourceFrameOnScreenForShareItem:(id <NSPasteboardWriting>)item
{
    if ([item isKindOfClass:[NSImage class]]) {
        NSImage * image = [_imageView image];
        NSRect frame = [_imageView bounds];
        frame = [_imageView convertRect:frame toView:nil];
        frame.origin = [[_imageView window] convertBaseToScreen:frame.origin];
        return frame;
    }
    return NSZeroRect;
}
```

## See Also

### Customizing Transition Animation

- [sharingService(\_:transitionImageForShareItem:contentRect:)](sharingservice%28__transitionimageforshareitem_contentrect_%29.md): Invoked to allow returning a custom transition image when sharing an item.
- [sharingService(\_:sourceWindowForShareItems:sharingContentScope:)](sharingservice%28__sourcewindowforshareitems_sharingcontentscope_%29.md): Returns the window that contained the share items.
- [NSSharingService.SharingContentScope](../nssharingservice/sharingcontentscope.md): The sharing scope constants specify the nature of the things you are sharing.

# sharingService:sourceFrameOnScreenForShareItem: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Invoked when the sharing service is performed and the sharing window is displayed, to present a transition between the original items and the sharing window.

## Declaration

```objectivec
- (NSRect) sharingService:(NSSharingService *) sharingService sourceFrameOnScreenForShareItem:(id) item;
```

## Parameters

- `sharingService`: The sharing service.
- `item`: The item being shared.

<a id="return-value"></a>

## Return Value

The rectangle, in screen coordinates, to display the transition.

<a id="Discussion"></a>

## Discussion

The following is an example implementation of this method:

```objc
- (NSRect)sharingService:(NSSharingService *)sharingService sourceFrameOnScreenForShareItem:(id <NSPasteboardWriting>)item
{
    if ([item isKindOfClass:[NSImage class]]) {
        NSImage * image = [_imageView image];
        NSRect frame = [_imageView bounds];
        frame = [_imageView convertRect:frame toView:nil];
        frame.origin = [[_imageView window] convertBaseToScreen:frame.origin];
        return frame;
    }
    return NSZeroRect;
}
```

## See Also

### Customizing Transition Animation

- [sharingService:transitionImageForShareItem:contentRect:](sharingservice%28__transitionimageforshareitem_contentrect_%29.md): Invoked to allow returning a custom transition image when sharing an item.
- [sharingService:sourceWindowForShareItems:sharingContentScope:](sharingservice%28__sourcewindowforshareitems_sharingcontentscope_%29.md): Returns the window that contained the share items.
- [NSSharingContentScope](../nssharingservice/sharingcontentscope.md): The sharing scope constants specify the nature of the things you are sharing.
