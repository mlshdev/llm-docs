> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicedelegate](https://developer.apple.com/documentation/appkit/nssharingservicedelegate)

# NSSharingServiceDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that you use to customize the position and animation of a share sheet, and to be notified whether the item is successfully shared.

## Declaration

```swift
protocol NSSharingServiceDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

See [NSSharingService](nssharingservice.md) for more information.

## Topics

### Sharing Items

- [sharingService(\_:willShareItems:)](nssharingservicedelegate/sharingservice%28__willshareitems_%29.md): Invoked when the sharing service will share the specified items.
- [sharingService(\_:didShareItems:)](nssharingservicedelegate/sharingservice%28__didshareitems_%29.md): Invoked when the sharing service has finished sharing the items.
- [sharingService(\_:didFailToShareItems:error:)](nssharingservicedelegate/sharingservice%28__didfailtoshareitems_error_%29.md): Invoked when the sharing service encountered an error when sharing items.

### Customizing Transition Animation

- [sharingService(\_:sourceFrameOnScreenForShareItem:)](nssharingservicedelegate/sharingservice%28__sourceframeonscreenforshareitem_%29.md): Invoked when the sharing service is performed and the sharing window is displayed, to present a transition between the original items and the sharing window.
- [sharingService(\_:transitionImageForShareItem:contentRect:)](nssharingservicedelegate/sharingservice%28__transitionimageforshareitem_contentrect_%29.md): Invoked to allow returning a custom transition image when sharing an item.
- [sharingService(\_:sourceWindowForShareItems:sharingContentScope:)](nssharingservicedelegate/sharingservice%28__sourcewindowforshareitems_sharingcontentscope_%29.md): Returns the window that contained the share items.
- [NSSharingService.SharingContentScope](nssharingservice/sharingcontentscope.md): The sharing scope constants specify the nature of the things you are sharing.

### Getting an Anchor View

- [anchoringView(for:showRelativeTo:preferredEdge:)](nssharingservicedelegate/anchoringview%28for_showrelativeto_preferrededge_%29.md): The method invoked when the service is performed and wants to display its contents in a popover.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSCloudSharingServiceDelegate](nscloudsharingservicedelegate.md)

## See Also

### Managing the Delegate

- [delegate](nssharingservice/delegate.md): Specifies the delegate of the sharing service.

# NSSharingServiceDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of methods that you use to customize the position and animation of a share sheet, and to be notified whether the item is successfully shared.

## Declaration

```objectivec
@protocol NSSharingServiceDelegate <NSObject>
```

<a id="overview"></a>

## Overview

See [NSSharingService](nssharingservice.md) for more information.

## Topics

### Sharing Items

- [sharingService:willShareItems:](nssharingservicedelegate/sharingservice%28__willshareitems_%29.md): Invoked when the sharing service will share the specified items.
- [sharingService:didShareItems:](nssharingservicedelegate/sharingservice%28__didshareitems_%29.md): Invoked when the sharing service has finished sharing the items.
- [sharingService:didFailToShareItems:error:](nssharingservicedelegate/sharingservice%28__didfailtoshareitems_error_%29.md): Invoked when the sharing service encountered an error when sharing items.

### Customizing Transition Animation

- [sharingService:sourceFrameOnScreenForShareItem:](nssharingservicedelegate/sharingservice%28__sourceframeonscreenforshareitem_%29.md): Invoked when the sharing service is performed and the sharing window is displayed, to present a transition between the original items and the sharing window.
- [sharingService:transitionImageForShareItem:contentRect:](nssharingservicedelegate/sharingservice%28__transitionimageforshareitem_contentrect_%29.md): Invoked to allow returning a custom transition image when sharing an item.
- [sharingService:sourceWindowForShareItems:sharingContentScope:](nssharingservicedelegate/sharingservice%28__sourcewindowforshareitems_sharingcontentscope_%29.md): Returns the window that contained the share items.
- [NSSharingContentScope](nssharingservice/sharingcontentscope.md): The sharing scope constants specify the nature of the things you are sharing.

### Getting an Anchor View

- [anchoringViewForSharingService:showRelativeToRect:preferredEdge:](nssharingservicedelegate/anchoringview%28for_showrelativeto_preferrededge_%29.md): The method invoked when the service is performed and wants to display its contents in a popover.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSCloudSharingServiceDelegate](nscloudsharingservicedelegate.md)

## See Also

### Managing the Delegate

- [delegate](nssharingservice/delegate.md): Specifies the delegate of the sharing service.
