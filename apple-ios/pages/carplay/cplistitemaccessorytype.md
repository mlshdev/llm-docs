> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitemaccessorytype

# CPListItemAccessoryType (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The standard image types a list item can display in its accessory region.

## Declaration

```swift
enum CPListItemAccessoryType
```

<a id="overview"></a>

## Overview

Use these constants to set the value of a list item’s [accessoryType](cplistitem/accessorytype.md) property. Assigning one of these values displays the specified image in the accessory region of the list item’s row. Choose an accessory type that provides relevant context about the item’s purpose. For example, display a disclosure indicator to signify that tapping the row takes the person to a new page of content.

## Topics

### Accessory types

- [CPListItemAccessoryType.none](cplistitemaccessorytype/none.md): A value that indicates the list item has no standard accessory type.
- [CPListItemAccessoryType.disclosureIndicator](cplistitemaccessorytype/disclosureindicator.md): A chevron image that signifies the item displays new content.
- [CPListItemAccessoryType.cloud](cplistitemaccessorytype/cloud.md): A cloud image that signifies the item contains cloud-based content.

### Initializers

- [init(rawValue:)](cplistitemaccessorytype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing accessories

- [accessoryType](cplistitem/accessorytype.md): The standard accessory type to display on the trailing edge of the list item.
- [accessoryImage](cplistitem/accessoryimage.md): The custom accessory image to display on the trailing edge of the list item.
- [setAccessoryImage(\_:)](cplistitem/setaccessoryimage%28__%29.md): The custom accessory image to display on the trailing edge of the list item.

# CPListItemAccessoryType (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The standard image types a list item can display in its accessory region.

## Declaration

```objectivec
enum CPListItemAccessoryType : NSInteger;
```

<a id="overview"></a>

## Overview

Use these constants to set the value of a list item’s [accessoryType](cplistitem/accessorytype.md) property. Assigning one of these values displays the specified image in the accessory region of the list item’s row. Choose an accessory type that provides relevant context about the item’s purpose. For example, display a disclosure indicator to signify that tapping the row takes the person to a new page of content.

## Topics

### Accessory types

- [CPListItemAccessoryTypeNone](cplistitemaccessorytype/none.md): A value that indicates the list item has no standard accessory type.
- [CPListItemAccessoryTypeDisclosureIndicator](cplistitemaccessorytype/disclosureindicator.md): A chevron image that signifies the item displays new content.
- [CPListItemAccessoryTypeCloud](cplistitemaccessorytype/cloud.md): A cloud image that signifies the item contains cloud-based content.

## See Also

### Managing accessories

- [accessoryType](cplistitem/accessorytype.md): The standard accessory type to display on the trailing edge of the list item.
- [accessoryImage](cplistitem/accessoryimage.md): The custom accessory image to display on the trailing edge of the list item.
- [setAccessoryImage:](cplistitem/setaccessoryimage%28__%29.md): The custom accessory image to display on the trailing edge of the list item.
