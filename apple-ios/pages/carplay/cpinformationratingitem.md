> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinformationratingitem](https://developer.apple.com/documentation/carplay/cpinformationratingitem)

# CPInformationRatingItem (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A data object that provides rated content for an information template.

## Declaration

```swift
class CPInformationRatingItem
```

<a id="overview"></a>

## Overview

`CPInformationRatingItem` provides the ability to display rated content in the rows of an information template. Depending on the template’s layout, the item’s attributes stack vertically or horizontally in the rows. The [title](cpinformationitem/title.md) property describes the content, and the [detail](cpinformationitem/detail.md) property provides the content. Use the [rating](cpinformationratingitem/rating.md) and [maximumRating](cpinformationratingitem/maximumrating.md) properties to display a rating for the content. For example, you could show a service rating when displaying information about a restaurant or café.

The template manages the visual styling of the rating and maximum rating.

## Topics

### Creating a Rating Item

- [init(rating:maximumRating:title:detail:)](cpinformationratingitem/init%28rating_maximumrating_title_detail_%29.md): Creates a rating item with a current and a maximum rating.

### Accessing the Item’s Attributes

- [rating](cpinformationratingitem/rating.md): The current rating that the template displays.
- [maximumRating](cpinformationratingitem/maximumrating.md): The maximum rating that the template displays.

## Relationships

### Inherits From

- [CPInformationItem](cpinformationitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Managing the Items

- [items](cpinformationtemplate/items.md): The items that the template displays.
- [CPInformationItem](cpinformationitem.md): A data object that provides content for an information template.

# CPInformationRatingItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A data object that provides rated content for an information template.

## Declaration

```objectivec
@interface CPInformationRatingItem : CPInformationItem
```

<a id="overview"></a>

## Overview

`CPInformationRatingItem` provides the ability to display rated content in the rows of an information template. Depending on the template’s layout, the item’s attributes stack vertically or horizontally in the rows. The [title](cpinformationitem/title.md) property describes the content, and the [detail](cpinformationitem/detail.md) property provides the content. Use the [rating](cpinformationratingitem/rating.md) and [maximumRating](cpinformationratingitem/maximumrating.md) properties to display a rating for the content. For example, you could show a service rating when displaying information about a restaurant or café.

The template manages the visual styling of the rating and maximum rating.

## Topics

### Creating a Rating Item

- [initWithRating:maximumRating:title:detail:](cpinformationratingitem/init%28rating_maximumrating_title_detail_%29.md): Creates a rating item with a current and a maximum rating.

### Accessing the Item’s Attributes

- [rating](cpinformationratingitem/rating.md): The current rating that the template displays.
- [maximumRating](cpinformationratingitem/maximumrating.md): The maximum rating that the template displays.

## Relationships

### Inherits From

- [CPInformationItem](cpinformationitem.md)

## See Also

### Managing the Items

- [items](cpinformationtemplate/items.md): The items that the template displays.
- [CPInformationItem](cpinformationitem.md): A data object that provides content for an information template.
