> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplisttemplateitem

# CPListTemplateItem (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An interface that describes the common properties of all list item types.

## Declaration

```swift
protocol CPListTemplateItem : NSObjectProtocol
```

<a id="overview"></a>

## Overview

This protocol adds key behaviors to all system-provided list item types. Don’t add this protocol directly to your custom types. Instead, use it through a system type such as [CPListItem](cplistitem.md), [CPListImageRowItem](cplistimagerowitem.md), or [CPMessageListItem](cpmessagelistitem.md).

## Topics

### Managing content

- [text](cplisttemplateitem/text.md): The primary text to display for the item.
- [userInfo](cplisttemplateitem/userinfo.md): App-specific data you associate with the item.

### Enabling items

- [isEnabled](cplisttemplateitem/isenabled.md): A Boolean value that indicates whether the item is enabled.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [CPSelectableListItem](cpselectablelistitem.md)

### Conforming Types

- [CPListImageRowItem](cplistimagerowitem.md)
- [CPListItem](cplistitem.md)
- [CPMessageListItem](cpmessagelistitem.md)

## See Also

### Common types

- [CPThumbnailImage](cpthumbnailimage.md): An image that can display overlays and metadata on top of the image.
- [CPListImageRowItemElement](cplistimagerowitemelement.md): An abstract class for an element in a row of a list.
- [CPSelectableListItem](cpselectablelistitem.md): An interface for responding to selections in list items.

# CPListTemplateItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An interface that describes the common properties of all list item types.

## Declaration

```objectivec
@protocol CPListTemplateItem <NSObject>
```

<a id="overview"></a>

## Overview

This protocol adds key behaviors to all system-provided list item types. Don’t add this protocol directly to your custom types. Instead, use it through a system type such as [CPListItem](cplistitem.md), [CPListImageRowItem](cplistimagerowitem.md), or [CPMessageListItem](cpmessagelistitem.md).

## Topics

### Managing content

- [text](cplisttemplateitem/text.md): The primary text to display for the item.
- [userInfo](cplisttemplateitem/userinfo.md): App-specific data you associate with the item.

### Enabling items

- [enabled](cplisttemplateitem/isenabled.md): A Boolean value that indicates whether the item is enabled.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Inherited By

- [CPSelectableListItem](cpselectablelistitem.md)

### Conforming Types

- [CPMessageListItem](cpmessagelistitem.md)

## See Also

### Common types

- [CPThumbnailImage](cpthumbnailimage.md): An image that can display overlays and metadata on top of the image.
- [CPListImageRowItemElement](cplistimagerowitemelement.md): An abstract class for an element in a row of a list.
- [CPSelectableListItem](cpselectablelistitem.md): An interface for responding to selections in list items.
