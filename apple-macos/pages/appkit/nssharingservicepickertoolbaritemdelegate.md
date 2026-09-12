> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicepickertoolbaritemdelegate](https://developer.apple.com/documentation/appkit/nssharingservicepickertoolbaritemdelegate)

# NSSharingServicePickerToolbarItemDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

An interface that provides the content to share from the macOS share sheet.

## Declaration

```swift
protocol NSSharingServicePickerToolbarItemDelegate : NSSharingServicePickerDelegate
```

<a id="overview"></a>

## Overview

Adopt the [NSSharingServicePickerToolbarItemDelegate](nssharingservicepickertoolbaritemdelegate.md) protocol in one of your app’s custom types and use it to provide shareable content. Assign your delegate object to an [NSSharingServicePickerToolbarItem](nssharingservicepickertoolbaritem.md) object you add to your window’s toolbar.

## Topics

### Providing the Items to Share

- [items(for:)](nssharingservicepickertoolbaritemdelegate/items%28for_%29.md): Asks the delegate for the items to share.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSharingServicePickerDelegate](nssharingservicepickerdelegate.md)

## See Also

### Getting the Toolbar Items

- [delegate](nssharingservicepickertoolbaritem/delegate.md): The custom object from your app that provides the items to share.
- [activityItemsConfiguration](nssharingservicepickertoolbaritem/activityitemsconfiguration.md): The custom object from an app built with Mac Catalyst that provides the items to share.

# NSSharingServicePickerToolbarItemDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

An interface that provides the content to share from the macOS share sheet.

## Declaration

```objectivec
@protocol NSSharingServicePickerToolbarItemDelegate <NSSharingServicePickerDelegate>
```

<a id="overview"></a>

## Overview

Adopt the [NSSharingServicePickerToolbarItemDelegate](nssharingservicepickertoolbaritemdelegate.md) protocol in one of your app’s custom types and use it to provide shareable content. Assign your delegate object to an [NSSharingServicePickerToolbarItem](nssharingservicepickertoolbaritem.md) object you add to your window’s toolbar.

## Topics

### Providing the Items to Share

- [itemsForSharingServicePickerToolbarItem:](nssharingservicepickertoolbaritemdelegate/items%28for_%29.md): Asks the delegate for the items to share.

## Relationships

### Inherits From

- [NSSharingServicePickerDelegate](nssharingservicepickerdelegate.md)

## See Also

### Getting the Toolbar Items

- [delegate](nssharingservicepickertoolbaritem/delegate.md): The custom object from your app that provides the items to share.
- [activityItemsConfiguration](nssharingservicepickertoolbaritem/activityitemsconfiguration.md): The custom object from an app built with Mac Catalyst that provides the items to share.
