> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpinformationitem](https://developer.apple.com/documentation/carplay/cpinformationitem)

# CPInformationItem (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A data object that provides content for an information template.

## Declaration

```swift
class CPInformationItem
```

<a id="overview"></a>

## Overview

[CPInformationTemplate](cpinformationtemplate.md) uses information items to populate the rows of its list. Depending on the template’s layout, the item’s [title](cpinformationitem/title.md) and [detail](cpinformationitem/detail.md) values stack vertically or horizontally in the row. Use the `title` property to describe the content, and the `detail` property to provide the content. For example, when using `CPInformationTemplate` to present a food order summary, you could provide an item that displays the number of minutes until the order is ready.

## Topics

### Creating an Information Item

- [init(title:detail:)](cpinformationitem/init%28title_detail_%29.md): Creates an information item with a title and detail text.

### Accessing the Item’s Attributes

- [title](cpinformationitem/title.md): The text that the template displays as the item’s title.
- [detail](cpinformationitem/detail.md): The text that the template displays below or beside the item’s title.

### Initializers

- [init(coder:)](cpinformationitem/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPInformationRatingItem](cpinformationratingitem.md)

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
- [CPInformationRatingItem](cpinformationratingitem.md): A data object that provides rated content for an information template.

# CPInformationItem (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

A data object that provides content for an information template.

## Declaration

```objectivec
@interface CPInformationItem : NSObject
```

<a id="overview"></a>

## Overview

[CPInformationTemplate](cpinformationtemplate.md) uses information items to populate the rows of its list. Depending on the template’s layout, the item’s [title](cpinformationitem/title.md) and [detail](cpinformationitem/detail.md) values stack vertically or horizontally in the row. Use the `title` property to describe the content, and the `detail` property to provide the content. For example, when using `CPInformationTemplate` to present a food order summary, you could provide an item that displays the number of minutes until the order is ready.

## Topics

### Creating an Information Item

- [initWithTitle:detail:](cpinformationitem/init%28title_detail_%29.md): Creates an information item with a title and detail text.

### Accessing the Item’s Attributes

- [title](cpinformationitem/title.md): The text that the template displays as the item’s title.
- [detail](cpinformationitem/detail.md): The text that the template displays below or beside the item’s title.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [CPInformationRatingItem](cpinformationratingitem.md)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Managing the Items

- [items](cpinformationtemplate/items.md): The items that the template displays.
- [CPInformationRatingItem](cpinformationratingitem.md): A data object that provides rated content for an information template.
