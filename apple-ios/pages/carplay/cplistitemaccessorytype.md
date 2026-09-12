> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistitemaccessorytype](https://developer.apple.com/documentation/carplay/cplistitemaccessorytype)

# CPListItemAccessoryType (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The accessory types that a list item can display.

## Declaration

```swift
enum CPListItemAccessoryType
```

<a id="overview"></a>

## Overview

Use these constants to set the value of a list item’s [accessoryType](cplistitem/accessorytype.md) property. An accessory can provide additional context for a list item’s contents, or help communicate its behavior.

## Topics

### Accessory Types

- [CPListItemAccessoryType.none](cplistitemaccessorytype/none.md): Don’t show an accessory.
- [CPListItemAccessoryType.disclosureIndicator](cplistitemaccessorytype/disclosureindicator.md): Show a chevron icon.
- [CPListItemAccessoryType.cloud](cplistitemaccessorytype/cloud.md): Show a cloud icon.

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

### Managing Accessories

- [accessoryType](cplistitem/accessorytype.md): The accessory that the list item displays in its trailing region.
- [accessoryImage](cplistitem/accessoryimage.md): The image that the list item displays in its trailing region.
- [setAccessoryImage(\_:)](cplistitem/setaccessoryimage%28__%29.md): Updates the list item’s accessory image.

# CPListItemAccessoryType (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

The accessory types that a list item can display.

## Declaration

```objectivec
enum CPListItemAccessoryType : NSInteger;
```

<a id="overview"></a>

## Overview

Use these constants to set the value of a list item’s [accessoryType](cplistitem/accessorytype.md) property. An accessory can provide additional context for a list item’s contents, or help communicate its behavior.

## Topics

### Accessory Types

- [CPListItemAccessoryTypeNone](cplistitemaccessorytype/none.md): Don’t show an accessory.
- [CPListItemAccessoryTypeDisclosureIndicator](cplistitemaccessorytype/disclosureindicator.md): Show a chevron icon.
- [CPListItemAccessoryTypeCloud](cplistitemaccessorytype/cloud.md): Show a cloud icon.

## See Also

### Managing Accessories

- [accessoryType](cplistitem/accessorytype.md): The accessory that the list item displays in its trailing region.
- [accessoryImage](cplistitem/accessoryimage.md): The image that the list item displays in its trailing region.
- [setAccessoryImage:](cplistitem/setaccessoryimage%28__%29.md): Updates the list item’s accessory image.
