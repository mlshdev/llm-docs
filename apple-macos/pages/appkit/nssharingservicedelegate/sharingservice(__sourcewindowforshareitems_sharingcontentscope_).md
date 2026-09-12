> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicedelegate/sharingservice(_:sourcewindowforshareitems:sharingcontentscope:)](https://developer.apple.com/documentation/appkit/nssharingservicedelegate/sharingservice(_:sourcewindowforshareitems:sharingcontentscope:))

# sharingService(\_:sourceWindowForShareItems:sharingContentScope:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+

Returns the window that contained the share items.

## Declaration

```swift
@MainActor optional func sharingService(_ sharingService: NSSharingService, sourceWindowForShareItems items: [Any], sharingContentScope: UnsafeMutablePointer<NSSharingService.SharingContentScope>) -> NSWindow?
```

## Parameters

- `sharingService`: The sharing service.
- `items`: The items being shared.
- `sharingContentScope`: The sharing content scope. The sharing scope can be modified from the default value of [NSSharingService.SharingContentScope.item](../nssharingservice/sharingcontentscope/item.md) by setting a different value in the out parameter `sharingContentScope`. See [NSSharingService.SharingContentScope](../nssharingservice/sharingcontentscope.md) for supported values.

<a id="return-value"></a>

## Return Value

The window of the shared items.

<a id="Discussion"></a>

## Discussion

The following is an example implementation of this method. It changes the item scope, and returns the window the source image view is contained within.

```objc
- (NSWindow *)sharingService:(NSSharingService *)sharingService
              sourceWindowForShareItems:(NSArray *)items
              sharingContentScope:(NSSharingContentScope *)sharingContentScope
{
    *sharingContentScope = NSSharingContentScopeItem;
    return [_imageView window];
}
```

## See Also

### Customizing Transition Animation

- [sharingService(\_:sourceFrameOnScreenForShareItem:)](sharingservice%28__sourceframeonscreenforshareitem_%29.md): Invoked when the sharing service is performed and the sharing window is displayed, to present a transition between the original items and the sharing window.
- [sharingService(\_:transitionImageForShareItem:contentRect:)](sharingservice%28__transitionimageforshareitem_contentrect_%29.md): Invoked to allow returning a custom transition image when sharing an item.
- [NSSharingService.SharingContentScope](../nssharingservice/sharingcontentscope.md): The sharing scope constants specify the nature of the things you are sharing.

# sharingService:sourceWindowForShareItems:sharingContentScope: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the window that contained the share items.

## Declaration

```objectivec
- (NSWindow *) sharingService:(NSSharingService *) sharingService sourceWindowForShareItems:(NSArray *) items sharingContentScope:(NSSharingContentScope *) sharingContentScope;
```

## Parameters

- `sharingService`: The sharing service.
- `items`: The items being shared.
- `sharingContentScope`: The sharing content scope. The sharing scope can be modified from the default value of [NSSharingContentScopeItem](../nssharingservice/sharingcontentscope/item.md) by setting a different value in the out parameter `sharingContentScope`. See [NSSharingContentScope](../nssharingservice/sharingcontentscope.md) for supported values.

<a id="return-value"></a>

## Return Value

The window of the shared items.

<a id="Discussion"></a>

## Discussion

The following is an example implementation of this method. It changes the item scope, and returns the window the source image view is contained within.

```objc
- (NSWindow *)sharingService:(NSSharingService *)sharingService
              sourceWindowForShareItems:(NSArray *)items
              sharingContentScope:(NSSharingContentScope *)sharingContentScope
{
    *sharingContentScope = NSSharingContentScopeItem;
    return [_imageView window];
}
```

## See Also

### Customizing Transition Animation

- [sharingService:sourceFrameOnScreenForShareItem:](sharingservice%28__sourceframeonscreenforshareitem_%29.md): Invoked when the sharing service is performed and the sharing window is displayed, to present a transition between the original items and the sharing window.
- [sharingService:transitionImageForShareItem:contentRect:](sharingservice%28__transitionimageforshareitem_contentrect_%29.md): Invoked to allow returning a custom transition image when sharing an item.
- [NSSharingContentScope](../nssharingservice/sharingcontentscope.md): The sharing scope constants specify the nature of the things you are sharing.
