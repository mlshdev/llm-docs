> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpselectablelistitem

# CPSelectableListItem (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An interface for responding to selections in list items.

## Declaration

```swift
protocol CPSelectableListItem : CPListTemplateItem
```

<a id="overview"></a>

## Overview

This protocol provides system-provided list item types with the support they need to handle interactions. Don’t add this protocol directly to your custom types. Instead, use it through a system type such as [CPListItem](cplistitem.md) or [CPListImageRowItem](cplistimagerowitem.md).

## Topics

### Responding to a selection

- [handler](cpselectablelistitem/handler.md): The closure to run when someone interacts with any part of the item.

## Relationships

### Inherits From

- [CPListTemplateItem](cplisttemplateitem.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [CPListImageRowItem](cplistimagerowitem.md)
- [CPListItem](cplistitem.md)

## See Also

### Common types

- [CPThumbnailImage](cpthumbnailimage.md): An image that can display overlays and metadata on top of the image.
- [CPListImageRowItemElement](cplistimagerowitemelement.md): An abstract class for an element in a row of a list.
- [CPListTemplateItem](cplisttemplateitem.md): An interface that describes the common properties of all list item types.

# CPSelectableListItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An interface for responding to selections in list items.

## Declaration

```objectivec
@protocol CPSelectableListItem <CPListTemplateItem>
```

<a id="overview"></a>

## Overview

This protocol provides system-provided list item types with the support they need to handle interactions. Don’t add this protocol directly to your custom types. Instead, use it through a system type such as [CPListItem](cplistitem.md) or [CPListImageRowItem](cplistimagerowitem.md).

## Topics

### Responding to a selection

- [handler](cpselectablelistitem/handler.md): The closure to run when someone interacts with any part of the item.

## Relationships

### Inherits From

- [CPListTemplateItem](cplisttemplateitem.md)

### Conforming Types

- [CPListImageRowItem](cplistimagerowitem.md)
- [CPListItem](cplistitem.md)

## See Also

### Common types

- [CPThumbnailImage](cpthumbnailimage.md): An image that can display overlays and metadata on top of the image.
- [CPListImageRowItemElement](cplistimagerowitemelement.md): An abstract class for an element in a row of a list.
- [CPListTemplateItem](cplisttemplateitem.md): An interface that describes the common properties of all list item types.
