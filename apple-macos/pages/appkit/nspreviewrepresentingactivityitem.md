> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspreviewrepresentingactivityitem](https://developer.apple.com/documentation/appkit/nspreviewrepresentingactivityitem)

# NSPreviewRepresentingActivityItem (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 13.0+

A type that adds metadata to an item you share using the macOS share sheet.

## Declaration

```swift
class NSPreviewRepresentingActivityItem
```

<a id="overview"></a>

## Overview

An [NSPreviewRepresentingActivityItem](nspreviewrepresentingactivityitem.md) object provides a concrete implementation of the [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md) protocol. Use it to create shareable items for common types such as strings or images, or when you don’t want to adopt the [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md) protocol directly in your app’s objects. To share the item from your app, initialize the [NSSharingServicePicker](nssharingservicepicker.md) object with this object.

> **Note**

>  If your data consists of a URL, pass that URL directly to the sharing service picker instead of using this class.

## Topics

### Creating a Preview Activity Item

- [init(item:title:image:icon:)](nspreviewrepresentingactivityitem/init%28item_title_image_icon_%29.md): Creates a metadata object with the title, image, and icon for a shareable item.
- [init(item:title:imageProvider:iconProvider:)](nspreviewrepresentingactivityitem/init%28item_title_imageprovider_iconprovider_%29.md): Creates a metadata object that provides a title and images for a shareable item.

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
- [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md)

## See Also

### Share Panel

- [NSSharingServicePicker](nssharingservicepicker.md): A list of sharing services that the user can choose from.
- [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md): An interface you adopt in custom objects that you want to share using the macOS share sheet.

# NSPreviewRepresentingActivityItem (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 13.0+

A type that adds metadata to an item you share using the macOS share sheet.

## Declaration

```objectivec
@interface NSPreviewRepresentingActivityItem : NSObject
```

<a id="overview"></a>

## Overview

An [NSPreviewRepresentingActivityItem](nspreviewrepresentingactivityitem.md) object provides a concrete implementation of the [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md) protocol. Use it to create shareable items for common types such as strings or images, or when you don’t want to adopt the [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md) protocol directly in your app’s objects. To share the item from your app, initialize the [NSSharingServicePicker](nssharingservicepicker.md) object with this object.

> **Note**

>  If your data consists of a URL, pass that URL directly to the sharing service picker instead of using this class.

## Topics

### Creating a Preview Activity Item

- [initWithItem:title:image:icon:](nspreviewrepresentingactivityitem/init%28item_title_image_icon_%29.md): Creates a metadata object with the title, image, and icon for a shareable item.
- [initWithItem:title:imageProvider:iconProvider:](nspreviewrepresentingactivityitem/init%28item_title_imageprovider_iconprovider_%29.md): Creates a metadata object that provides a title and images for a shareable item.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md)

## See Also

### Share Panel

- [NSSharingServicePicker](nssharingservicepicker.md): A list of sharing services that the user can choose from.
- [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md): An interface you adopt in custom objects that you want to share using the macOS share sheet.
