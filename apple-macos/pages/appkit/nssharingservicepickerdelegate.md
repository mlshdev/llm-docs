> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicepickerdelegate](https://developer.apple.com/documentation/appkit/nssharingservicepickerdelegate)

# NSSharingServicePickerDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

An interface for managing content for the macOS share sheet.

## Declaration

```swift
protocol NSSharingServicePickerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Adopt the [NSSharingServicePickerDelegate](nssharingservicepickerdelegate.md) protocol in one of your app’s types, and use it to manage interactions with an [NSSharingServicePicker](nssharingservicepicker.md) object. Use your delegate object to customize the services for the proposed items and respond to the selection of a shared service.

For information about how to display the share sheet and configure your delegate, see [NSSharingServicePicker](nssharingservicepicker.md).

## Topics

### Configuring the Sharing Services

- [sharingServicePicker(\_:sharingServicesForItems:proposedSharingServices:)](nssharingservicepickerdelegate/sharingservicepicker%28__sharingservicesforitems_proposedsharingservices_%29.md): Asks the delegate to specify which services to make available from the sharing service picker.

### Customizing Behavior

- [sharingServicePicker(\_:didChoose:)](nssharingservicepickerdelegate/sharingservicepicker%28__didchoose_%29.md): Tells the delegate that the person selected a sharing service for the current item.
- [sharingServicePicker(\_:delegateFor:)](nssharingservicepickerdelegate/sharingservicepicker%28__delegatefor_%29.md): Asks your delegate to provide an object that the selected sharing service can use as its delegate.

### Instance Methods

- [sharingServicePickerCollaborationModeRestrictions(\_:)](nssharingservicepickerdelegate/sharingservicepickercollaborationmoderestrictions%28__%29.md): Used to specify the case where the share picker should not support some modes of sharing even if they are supported by the items being shared. Disabling all possible modes at the same time is not supported behavior.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSSharingServicePickerToolbarItemDelegate](nssharingservicepickertoolbaritemdelegate.md)
- [NSSharingServicePickerTouchBarItemDelegate](nssharingservicepickertouchbaritemdelegate.md)

## See Also

### Managing the sharing service picker

- [delegate](nssharingservicepicker/delegate.md): The object for managing the sharing service picker.

# NSSharingServicePickerDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

An interface for managing content for the macOS share sheet.

## Declaration

```objectivec
@protocol NSSharingServicePickerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Adopt the [NSSharingServicePickerDelegate](nssharingservicepickerdelegate.md) protocol in one of your app’s types, and use it to manage interactions with an [NSSharingServicePicker](nssharingservicepicker.md) object. Use your delegate object to customize the services for the proposed items and respond to the selection of a shared service.

For information about how to display the share sheet and configure your delegate, see [NSSharingServicePicker](nssharingservicepicker.md).

## Topics

### Configuring the Sharing Services

- [sharingServicePicker:sharingServicesForItems:proposedSharingServices:](nssharingservicepickerdelegate/sharingservicepicker%28__sharingservicesforitems_proposedsharingservices_%29.md): Asks the delegate to specify which services to make available from the sharing service picker.

### Customizing Behavior

- [sharingServicePicker:didChooseSharingService:](nssharingservicepickerdelegate/sharingservicepicker%28__didchoose_%29.md): Tells the delegate that the person selected a sharing service for the current item.
- [sharingServicePicker:delegateForSharingService:](nssharingservicepickerdelegate/sharingservicepicker%28__delegatefor_%29.md): Asks your delegate to provide an object that the selected sharing service can use as its delegate.

### Instance Methods

- [sharingServicePickerCollaborationModeRestrictions:](nssharingservicepickerdelegate/sharingservicepickercollaborationmoderestrictions%28__%29.md): Used to specify the case where the share picker should not support some modes of sharing even if they are supported by the items being shared. Disabling all possible modes at the same time is not supported behavior.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [NSSharingServicePickerToolbarItemDelegate](nssharingservicepickertoolbaritemdelegate.md)
- [NSSharingServicePickerTouchBarItemDelegate](nssharingservicepickertouchbaritemdelegate.md)

## See Also

### Managing the sharing service picker

- [delegate](nssharingservicepicker/delegate.md): The object for managing the sharing service picker.
