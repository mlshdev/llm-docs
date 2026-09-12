> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiactivityitemsource](https://developer.apple.com/documentation/uikit/uiactivityitemsource)

# UIActivityItemSource (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A set of methods that an activity view controller uses to retrieve the data items to act on.

## Declaration

```swift
protocol UIActivityItemSource : NSObjectProtocol
```

<a id="overview"></a>

## Overview

You can use this protocol in situations where you want to provide the data from one of your app’s existing objects instead of creating a separate [UIActivityItemProvider](uiactivityitemprovider.md) object. When implementing this protocol, your object becomes the data provider, providing the view controller with access to the items.

Because the methods of this protocol are executed on your app’s main thread, you should avoid using this protocol in cases where the data objects might take a significant amount of time to create. When creating large data objects, consider using a [UIActivityItemProvider](uiactivityitemprovider.md) object instead.

## Topics

### Getting the data items

- [activityViewControllerPlaceholderItem(\_:)](uiactivityitemsource/activityviewcontrollerplaceholderitem%28__%29.md): Returns the placeholder object for the data.
- [activityViewController(\_:itemForActivityType:)](uiactivityitemsource/activityviewcontroller%28__itemforactivitytype_%29.md): Returns the data object to be acted upon.

### Providing information about the data items

- [activityViewController(\_:subjectForActivityType:)](uiactivityitemsource/activityviewcontroller%28__subjectforactivitytype_%29.md): For activities that support a subject field, returns the subject for the item.
- [activityViewController(\_:dataTypeIdentifierForActivityType:)](uiactivityitemsource/activityviewcontroller%28__datatypeidentifierforactivitytype_%29.md): For items that are provided as data, returns the UTI for the item.
- [activityViewController(\_:thumbnailImageForActivityType:suggestedSize:)](uiactivityitemsource/activityviewcontroller%28__thumbnailimageforactivitytype_suggestedsize_%29.md): For activities that support a preview image, returns a thumbnail preview image for the item.

### Providing metadata for accelerated previews

- [activityViewControllerLinkMetadata(\_:)](uiactivityitemsource/activityviewcontrollerlinkmetadata%28__%29.md): Returns metadata to display in the preview header of the share sheet.

### Instance Methods

- [activityViewControllerShareRecipients(\_:)](uiactivityitemsource/activityviewcontrollersharerecipients%28__%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIActivityItemProvider](uiactivityitemprovider.md)

## See Also

### Services

- [UIActivity](uiactivity.md): An abstract class that you subclass to implement app-specific services.
- [UIActivityViewController](uiactivityviewcontroller.md): A view controller that you use to offer standard services from your app.
- [UIActivityItemProvider](uiactivityitemprovider.md): A proxy for data that passes to an activity view controller.

# UIActivityItemSource (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A set of methods that an activity view controller uses to retrieve the data items to act on.

## Declaration

```objectivec
@protocol UIActivityItemSource <NSObject>
```

<a id="overview"></a>

## Overview

You can use this protocol in situations where you want to provide the data from one of your app’s existing objects instead of creating a separate [UIActivityItemProvider](uiactivityitemprovider.md) object. When implementing this protocol, your object becomes the data provider, providing the view controller with access to the items.

Because the methods of this protocol are executed on your app’s main thread, you should avoid using this protocol in cases where the data objects might take a significant amount of time to create. When creating large data objects, consider using a [UIActivityItemProvider](uiactivityitemprovider.md) object instead.

## Topics

### Getting the data items

- [activityViewControllerPlaceholderItem:](uiactivityitemsource/activityviewcontrollerplaceholderitem%28__%29.md): Returns the placeholder object for the data.
- [activityViewController:itemForActivityType:](uiactivityitemsource/activityviewcontroller%28__itemforactivitytype_%29.md): Returns the data object to be acted upon.

### Providing information about the data items

- [activityViewController:subjectForActivityType:](uiactivityitemsource/activityviewcontroller%28__subjectforactivitytype_%29.md): For activities that support a subject field, returns the subject for the item.
- [activityViewController:dataTypeIdentifierForActivityType:](uiactivityitemsource/activityviewcontroller%28__datatypeidentifierforactivitytype_%29.md): For items that are provided as data, returns the UTI for the item.
- [activityViewController:thumbnailImageForActivityType:suggestedSize:](uiactivityitemsource/activityviewcontroller%28__thumbnailimageforactivitytype_suggestedsize_%29.md): For activities that support a preview image, returns a thumbnail preview image for the item.

### Providing metadata for accelerated previews

- [activityViewControllerLinkMetadata:](uiactivityitemsource/activityviewcontrollerlinkmetadata%28__%29.md): Returns metadata to display in the preview header of the share sheet.

### Instance Methods

- [activityViewControllerShareRecipients:](uiactivityitemsource/activityviewcontrollersharerecipients%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UIActivityItemProvider](uiactivityitemprovider.md)

## See Also

### Services

- [UIActivity](uiactivity.md): An abstract class that you subclass to implement app-specific services.
- [UIActivityViewController](uiactivityviewcontroller.md): A view controller that you use to offer standard services from your app.
- [UIActivityItemProvider](uiactivityitemprovider.md): A proxy for data that passes to an activity view controller.
