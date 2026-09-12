> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservice](https://developer.apple.com/documentation/appkit/nssharingservice)

# NSSharingService (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.8+

An object that facilitates the sharing of content with social media services, or with apps like Mail or Safari.

## Declaration

```swift
class NSSharingService
```

<a id="overview"></a>

## Overview

An [NSSharingService](nssharingservice.md) object provides a consistent user experience for sharing items—[NSURL](https://developer.apple.com/documentation/foundation/nsurl) objects, [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, [NSImage](nsimage.md) objects, video (through file URLs), of any object that implements the [NSPasteboardWriting](nspasteboardwriting.md) protocol—in macOS.

For any item or group of items, the [NSSharingService](nssharingservice.md) displays a sheet with the content to share. A sharing service can create a post on a social network like Twitter or Facebook, send a message by email or iMessage, upload videos to viewing services, or send a file using AirDrop.

You can use [NSSharingService](nssharingservice.md) objects directly in your app. The following example shows how to create a button that shares content directly to a social media service.

```objc
- (void)awakeFromNib
{
    NSSharingService * service = [NSSharingService sharingServiceNamed:NSSharingServiceNamePostOnTwitter];
    [myShareOnTwitterButton setTitle:service.title];
    [myShareOnTwitterButton setEnabled:[service canPerformWithItems:nil]];
}
 
 
- (IBAction)shareOnTwitter:(id)sender
{
    // Items to share
    NSAttributedString *text = [self.textView attributedString];
    NSImage *image = [self.imageView image];
    NSArray * shareItems = [NSArray arrayWithObjects:text, image, nil];
 
    NSSharingService *service = [NSSharingService sharingServiceNamed:NSSharingServiceNamePostOnTwitter];
    service.delegate = self;
    [service performWithItems:shareItems];
}
```

## Topics

### Creating a Sharing Service

- [init(named:)](nssharingservice/init%28named_%29.md): Returns a sharing service instance representing the specified service name.
- [init(title:image:alternateImage:handler:)](nssharingservice/init%28title_image_alternateimage_handler_%29.md): Creates a custom sharing service object.
- [NSSharingService.Name](nssharingservice/name.md): Constants that describe the sharing services that macOS supports.

### Managing the Delegate

- [delegate](nssharingservice/delegate.md): Specifies the delegate of the sharing service.
- [NSSharingServiceDelegate](nssharingservicedelegate.md): A set of methods that you use to customize the position and animation of a share sheet, and to be notified whether the item is successfully shared.

### Querying Service Availability

- [sharingServices(forItems:)](nssharingservice/sharingservices%28foritems_%29.md): Deprecated. Returns a list of sharing services which could share all the provided items together.
- [canPerform(withItems:)](nssharingservice/canperform%28withitems_%29.md): Returns whether the service can share all the specified items.

### Getting the Service’s Details

- [accountName](nssharingservice/accountname.md): The account name used for posting on Twitter or Sina Weibo.
- [alternateImage](nssharingservice/alternateimage.md): The alternate image representing the sharing service.
- [image](nssharingservice/image.md): The primary image representing the sharing service.
- [title](nssharingservice/title.md): The title of the sharing service.

### Configuring the Service

- [menuItemTitle](nssharingservice/menuitemtitle.md): The title of the service in the Share menu.
- [recipients](nssharingservice/recipients.md): An array containing the user handles of the desired recipients.
- [subject](nssharingservice/subject.md): The subject of the post.

### Sharing Items

- [perform(withItems:)](nssharingservice/perform%28withitems_%29.md): Manually performs the service on the provided items.

### Providing CloudKit Share Options

- [NSSharingService.CloudKitOptions](nssharingservice/cloudkitoptions.md): Constants that describe how a participant can configure a CloudKit share.

### Getting the Shared Items

- [attachmentFileURLs](nssharingservice/attachmentfileurls.md): An array of NSURL objects representing the files that were shared.
- [messageBody](nssharingservice/messagebody.md): The message body as a string.
- [permanentLink](nssharingservice/permanentlink.md): A permanent URL (permalink) that your app can use to access the post.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### App Services

- [NSSharingServicePicker](nssharingservicepicker.md): A list of sharing services that the user can choose from.
- [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md): An interface you adopt in custom objects that you want to share using the macOS share sheet.
- [NSSharingServicePickerToolbarItem](nssharingservicepickertoolbaritem.md): A toolbar item that displays the macOS share sheet.
- [NSServicesMenuRequestor](nsservicesmenurequestor.md): A set of methods that support interaction with items users can share through a sharing service.
- [NSCloudSharingServiceDelegate](nscloudsharingservicedelegate.md): A set of methods for responding to the life cycle events of the cloud-sharing service.
- [Services Functions](services-functions.md): Configure the contents of your app’s Services menu.

# NSSharingService (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.8+

An object that facilitates the sharing of content with social media services, or with apps like Mail or Safari.

## Declaration

```objectivec
@interface NSSharingService : NSObject
```

<a id="overview"></a>

## Overview

An [NSSharingService](nssharingservice.md) object provides a consistent user experience for sharing items—[NSURL](https://developer.apple.com/documentation/foundation/nsurl) objects, [NSString](https://developer.apple.com/documentation/foundation/nsstring) objects, [NSImage](nsimage.md) objects, video (through file URLs), of any object that implements the [NSPasteboardWriting](nspasteboardwriting.md) protocol—in macOS.

For any item or group of items, the [NSSharingService](nssharingservice.md) displays a sheet with the content to share. A sharing service can create a post on a social network like Twitter or Facebook, send a message by email or iMessage, upload videos to viewing services, or send a file using AirDrop.

You can use [NSSharingService](nssharingservice.md) objects directly in your app. The following example shows how to create a button that shares content directly to a social media service.

```objc
- (void)awakeFromNib
{
    NSSharingService * service = [NSSharingService sharingServiceNamed:NSSharingServiceNamePostOnTwitter];
    [myShareOnTwitterButton setTitle:service.title];
    [myShareOnTwitterButton setEnabled:[service canPerformWithItems:nil]];
}
 
 
- (IBAction)shareOnTwitter:(id)sender
{
    // Items to share
    NSAttributedString *text = [self.textView attributedString];
    NSImage *image = [self.imageView image];
    NSArray * shareItems = [NSArray arrayWithObjects:text, image, nil];
 
    NSSharingService *service = [NSSharingService sharingServiceNamed:NSSharingServiceNamePostOnTwitter];
    service.delegate = self;
    [service performWithItems:shareItems];
}
```

## Topics

### Creating a Sharing Service

- [sharingServiceNamed:](nssharingservice/init%28named_%29.md): Returns a sharing service instance representing the specified service name.
- [initWithTitle:image:alternateImage:handler:](nssharingservice/init%28title_image_alternateimage_handler_%29.md): Creates a custom sharing service object.
- [NSSharingServiceName](nssharingservice/name.md): Constants that describe the sharing services that macOS supports.

### Managing the Delegate

- [delegate](nssharingservice/delegate.md): Specifies the delegate of the sharing service.
- [NSSharingServiceDelegate](nssharingservicedelegate.md): A set of methods that you use to customize the position and animation of a share sheet, and to be notified whether the item is successfully shared.

### Querying Service Availability

- [sharingServicesForItems:](nssharingservice/sharingservices%28foritems_%29.md): Deprecated. Returns a list of sharing services which could share all the provided items together.
- [canPerformWithItems:](nssharingservice/canperform%28withitems_%29.md): Returns whether the service can share all the specified items.

### Getting the Service’s Details

- [accountName](nssharingservice/accountname.md): The account name used for posting on Twitter or Sina Weibo.
- [alternateImage](nssharingservice/alternateimage.md): The alternate image representing the sharing service.
- [image](nssharingservice/image.md): The primary image representing the sharing service.
- [title](nssharingservice/title.md): The title of the sharing service.

### Configuring the Service

- [menuItemTitle](nssharingservice/menuitemtitle.md): The title of the service in the Share menu.
- [recipients](nssharingservice/recipients.md): An array containing the user handles of the desired recipients.
- [subject](nssharingservice/subject.md): The subject of the post.

### Sharing Items

- [performWithItems:](nssharingservice/perform%28withitems_%29.md): Manually performs the service on the provided items.

### Providing CloudKit Share Options

- [NSCloudKitSharingServiceOptions](nssharingservice/cloudkitoptions.md): Constants that describe how a participant can configure a CloudKit share.

### Getting the Shared Items

- [attachmentFileURLs](nssharingservice/attachmentfileurls.md): An array of NSURL objects representing the files that were shared.
- [messageBody](nssharingservice/messagebody.md): The message body as a string.
- [permanentLink](nssharingservice/permanentlink.md): A permanent URL (permalink) that your app can use to access the post.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### App Services

- [NSSharingServicePicker](nssharingservicepicker.md): A list of sharing services that the user can choose from.
- [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md): An interface you adopt in custom objects that you want to share using the macOS share sheet.
- [NSSharingServicePickerToolbarItem](nssharingservicepickertoolbaritem.md): A toolbar item that displays the macOS share sheet.
- [NSServicesMenuRequestor](nsservicesmenurequestor.md): A set of methods that support interaction with items users can share through a sharing service.
- [NSCloudSharingServiceDelegate](nscloudsharingservicedelegate.md): A set of methods for responding to the life cycle events of the cloud-sharing service.
- [Services Functions](services-functions.md): Configure the contents of your app’s Services menu.
