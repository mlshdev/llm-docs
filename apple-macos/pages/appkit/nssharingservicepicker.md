> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssharingservicepicker](https://developer.apple.com/documentation/appkit/nssharingservicepicker)

# NSSharingServicePicker (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.8+

A list of sharing services that the user can choose from.

## Declaration

```swift
class NSSharingServicePicker
```

<a id="overview"></a>

## Overview

An [NSSharingServicePicker](nssharingservicepicker.md) object presents an interface for sharing one or more items using a specific service. In macOS 12 and earlier, this picker displays a menu with a list of services that someone can use to share the item. In macOS 13 and later, the picker displays a popover with a preview of the item and the list of services. When someone chooses a service, the picker automatically shares the proposed item with that service.

Create a sharing service picker and configure it with a delegate object to monitor interactions. Your delegate must conform to the [NSSharingServicePickerDelegate](nssharingservicepickerdelegate.md) protocol. Present the picker from your interface using the [show(relativeTo:of:preferredEdge:)](nssharingservicepicker/show%28relativeto_of_preferrededge_%29.md) method.

## Topics

### Creating a sharing service picker

- [init(items:)](nssharingservicepicker/init%28items_%29.md): Creates a new sharing service picker for the selected items.

### Managing the sharing service picker

- [delegate](nssharingservicepicker/delegate.md): The object for managing the sharing service picker.
- [NSSharingServicePickerDelegate](nssharingservicepickerdelegate.md): An interface for managing content for the macOS share sheet.

### Displaying the sharing service picker

- [show(relativeTo:of:preferredEdge:)](nssharingservicepicker/show%28relativeto_of_preferrededge_%29.md): Shows the picker interface and populates it with the relevant sharing services.
- [close()](nssharingservicepicker/close%28%29.md): Closes the picker interface.

### Retrieving the sharing menu item

- [standardShareMenuItem](nssharingservicepicker/standardsharemenuitem.md): A menu item suitable to display the picker for the specified items.

### Classes

- [NSSharingServicePicker.CollaborationModeRestriction](nssharingservicepicker/collaborationmoderestriction.md): Specifies whether a specific type of sharing should be disabled in the share picker, and if so, whether a reason should be provided for the disablement.

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

- [NSSharingService](nssharingservice.md): An object that facilitates the sharing of content with social media services, or with apps like Mail or Safari.
- [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md): An interface you adopt in custom objects that you want to share using the macOS share sheet.
- [NSSharingServicePickerToolbarItem](nssharingservicepickertoolbaritem.md): A toolbar item that displays the macOS share sheet.
- [NSServicesMenuRequestor](nsservicesmenurequestor.md): A set of methods that support interaction with items users can share through a sharing service.
- [NSCloudSharingServiceDelegate](nscloudsharingservicedelegate.md): A set of methods for responding to the life cycle events of the cloud-sharing service.
- [Services Functions](services-functions.md): Configure the contents of your app’s Services menu.

# NSSharingServicePicker (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** macOS 10.8+

A list of sharing services that the user can choose from.

## Declaration

```objectivec
@interface NSSharingServicePicker : NSObject
```

<a id="overview"></a>

## Overview

An [NSSharingServicePicker](nssharingservicepicker.md) object presents an interface for sharing one or more items using a specific service. In macOS 12 and earlier, this picker displays a menu with a list of services that someone can use to share the item. In macOS 13 and later, the picker displays a popover with a preview of the item and the list of services. When someone chooses a service, the picker automatically shares the proposed item with that service.

Create a sharing service picker and configure it with a delegate object to monitor interactions. Your delegate must conform to the [NSSharingServicePickerDelegate](nssharingservicepickerdelegate.md) protocol. Present the picker from your interface using the [showRelativeToRect:ofView:preferredEdge:](nssharingservicepicker/show%28relativeto_of_preferrededge_%29.md) method.

## Topics

### Creating a sharing service picker

- [initWithItems:](nssharingservicepicker/init%28items_%29.md): Creates a new sharing service picker for the selected items.

### Managing the sharing service picker

- [delegate](nssharingservicepicker/delegate.md): The object for managing the sharing service picker.
- [NSSharingServicePickerDelegate](nssharingservicepickerdelegate.md): An interface for managing content for the macOS share sheet.

### Displaying the sharing service picker

- [showRelativeToRect:ofView:preferredEdge:](nssharingservicepicker/show%28relativeto_of_preferrededge_%29.md): Shows the picker interface and populates it with the relevant sharing services.
- [close](nssharingservicepicker/close%28%29.md): Closes the picker interface.

### Retrieving the sharing menu item

- [standardShareMenuItem](nssharingservicepicker/standardsharemenuitem.md): A menu item suitable to display the picker for the specified items.

### Classes

- [NSSharingCollaborationModeRestriction](nssharingservicepicker/collaborationmoderestriction.md): Specifies whether a specific type of sharing should be disabled in the share picker, and if so, whether a reason should be provided for the disablement.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### App Services

- [NSSharingService](nssharingservice.md): An object that facilitates the sharing of content with social media services, or with apps like Mail or Safari.
- [NSPreviewRepresentableActivityItem](nspreviewrepresentableactivityitem.md): An interface you adopt in custom objects that you want to share using the macOS share sheet.
- [NSSharingServicePickerToolbarItem](nssharingservicepickertoolbaritem.md): A toolbar item that displays the macOS share sheet.
- [NSServicesMenuRequestor](nsservicesmenurequestor.md): A set of methods that support interaction with items users can share through a sharing service.
- [NSCloudSharingServiceDelegate](nscloudsharingservicedelegate.md): A set of methods for responding to the life cycle events of the cloud-sharing service.
- [Services Functions](services-functions.md): Configure the contents of your app’s Services menu.
