> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservice/sharingcontentscope](https://developer.apple.com/documentation/appkit/nssharingservice/sharingcontentscope)

# NSSharingService.SharingContentScope (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.8+

The sharing scope constants specify the nature of the things you are sharing.

## Declaration

```swift
enum SharingContentScope
```

## Topics

### Constants

- [NSSharingService.SharingContentScope.item](sharingcontentscope/item.md): Used when sharing a clearly identified item, for example, a file represented by its icon.
- [NSSharingService.SharingContentScope.partial](sharingcontentscope/partial.md): Used when sharing a portion of a more global content, for example, part of a webpage.
- [NSSharingService.SharingContentScope.full](sharingcontentscope/full.md): Used when sharing the whole content of the current document, for example, the URL of the webpage.

### Initializers

- [init(rawValue:)](sharingcontentscope/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Customizing Transition Animation

- [sharingService(\_:sourceFrameOnScreenForShareItem:)](../nssharingservicedelegate/sharingservice%28__sourceframeonscreenforshareitem_%29.md): Invoked when the sharing service is performed and the sharing window is displayed, to present a transition between the original items and the sharing window.
- [sharingService(\_:transitionImageForShareItem:contentRect:)](../nssharingservicedelegate/sharingservice%28__transitionimageforshareitem_contentrect_%29.md): Invoked to allow returning a custom transition image when sharing an item.
- [sharingService(\_:sourceWindowForShareItems:sharingContentScope:)](../nssharingservicedelegate/sharingservice%28__sourcewindowforshareitems_sharingcontentscope_%29.md): Returns the window that contained the share items.

# NSSharingContentScope (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.8+

The sharing scope constants specify the nature of the things you are sharing.

## Declaration

```objectivec
enum NSSharingContentScope : NSInteger;
```

## Topics

### Constants

- [NSSharingContentScopeItem](sharingcontentscope/item.md): Used when sharing a clearly identified item, for example, a file represented by its icon.
- [NSSharingContentScopePartial](sharingcontentscope/partial.md): Used when sharing a portion of a more global content, for example, part of a webpage.
- [NSSharingContentScopeFull](sharingcontentscope/full.md): Used when sharing the whole content of the current document, for example, the URL of the webpage.

## See Also

### Customizing Transition Animation

- [sharingService:sourceFrameOnScreenForShareItem:](../nssharingservicedelegate/sharingservice%28__sourceframeonscreenforshareitem_%29.md): Invoked when the sharing service is performed and the sharing window is displayed, to present a transition between the original items and the sharing window.
- [sharingService:transitionImageForShareItem:contentRect:](../nssharingservicedelegate/sharingservice%28__transitionimageforshareitem_contentrect_%29.md): Invoked to allow returning a custom transition image when sharing an item.
- [sharingService:sourceWindowForShareItems:sharingContentScope:](../nssharingservicedelegate/sharingservice%28__sourcewindowforshareitems_sharingcontentscope_%29.md): Returns the window that contained the share items.
