> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicepickertoolbaritem](https://developer.apple.com/documentation/appkit/nssharingservicepickertoolbaritem)

# NSSharingServicePickerToolbarItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** iOS 10.13+ · iPadOS 10.13+ · Mac Catalyst 13.1+ · macOS 10.15+

A toolbar item that displays the macOS share sheet.

## Declaration

```swift
class NSSharingServicePickerToolbarItem
```

<a id="overview"></a>

## Overview

An [NSSharingServicePickerToolbarItem](nssharingservicepickertoolbaritem.md) object is a standard item you add to your window’s toolbar. When someone clicks it, the item displays the macOS share sheet. Use this item to share the selected or focal content from the current window. For example, you might share the photo someone is viewing, the currently selected text, or the window’s associated document.

Provide the items to share using the associated [delegate](nssharingservicepickertoolbaritem/delegate.md) object. For an app built using Mac Catalyst, provide the items from the object in the [activityItemsConfiguration](nssharingservicepickertoolbaritem/activityitemsconfiguration.md) property.

## Topics

### Getting the Toolbar Items

- [delegate](nssharingservicepickertoolbaritem/delegate.md): The custom object from your app that provides the items to share.
- [NSSharingServicePickerToolbarItemDelegate](nssharingservicepickertoolbaritemdelegate.md): An interface that provides the content to share from the macOS share sheet.
- [activityItemsConfiguration](nssharingservicepickertoolbaritem/activityitemsconfiguration.md): The custom object from an app built with Mac Catalyst that provides the items to share.

## Relationships

### Inherits From

- [NSToolbarItem](nstoolbaritem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSMenuItemValidation](nsmenuitemvalidation.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSValidatedUserInterfaceItem](nsvalidateduserinterfaceitem.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App Services

- [NSSharingService](nssharingservice.md): An object that facilitates the sharing of content with social media services, or with apps like Mail or Safari.
- [NSSharingServicePicker](nssharingservicepicker.md): A list of sharing services that the user can choose from.
- [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md): An interface you adopt in custom objects that you want to share using the macOS share sheet.
- [NSServicesMenuRequestor](nsservicesmenurequestor.md): A set of methods that support interaction with items users can share through a sharing service.
- [NSCloudSharingServiceDelegate](nscloudsharingservicedelegate.md): A set of methods for responding to the life cycle events of the cloud-sharing service.
- [Services Functions](services-functions.md): Configure the contents of your app’s Services menu.

# NSSharingServicePickerToolbarItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

A toolbar item that displays the macOS share sheet.

## Declaration

```objectivec
@interface NSSharingServicePickerToolbarItem : NSToolbarItem
```

<a id="overview"></a>

## Overview

An [NSSharingServicePickerToolbarItem](nssharingservicepickertoolbaritem.md) object is a standard item you add to your window’s toolbar. When someone clicks it, the item displays the macOS share sheet. Use this item to share the selected or focal content from the current window. For example, you might share the photo someone is viewing, the currently selected text, or the window’s associated document.

Provide the items to share using the associated [delegate](nssharingservicepickertoolbaritem/delegate.md) object. For an app built using Mac Catalyst, provide the items from the object in the [activityItemsConfiguration](nssharingservicepickertoolbaritem/activityitemsconfiguration.md) property.

## Topics

### Getting the Toolbar Items

- [delegate](nssharingservicepickertoolbaritem/delegate.md): The custom object from your app that provides the items to share.
- [NSSharingServicePickerToolbarItemDelegate](nssharingservicepickertoolbaritemdelegate.md): An interface that provides the content to share from the macOS share sheet.
- [activityItemsConfiguration](nssharingservicepickertoolbaritem/activityitemsconfiguration.md): The custom object from an app built with Mac Catalyst that provides the items to share.

## Relationships

### Inherits From

- [NSToolbarItem](nstoolbaritem.md)

## See Also

### App Services

- [NSSharingService](nssharingservice.md): An object that facilitates the sharing of content with social media services, or with apps like Mail or Safari.
- [NSSharingServicePicker](nssharingservicepicker.md): A list of sharing services that the user can choose from.
- [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md): An interface you adopt in custom objects that you want to share using the macOS share sheet.
- [NSServicesMenuRequestor](nsservicesmenurequestor.md): A set of methods that support interaction with items users can share through a sharing service.
- [NSCloudSharingServiceDelegate](nscloudsharingservicedelegate.md): A set of methods for responding to the life cycle events of the cloud-sharing service.
- [Services Functions](services-functions.md): Configure the contents of your app’s Services menu.
