> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/accessorytype

# accessoryType (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The standard accessory type to display on the trailing edge of the list item.

## Declaration

```swift
var accessoryType: CPListItemAccessoryType { get set }
```

<a id="discussion"></a>

## Discussion

The value in this property determines whether to show a standard accessory image such as a disclosure chevron or a custom image you supply. When the value in this property is a value other than [CPListItemAccessoryType.none](../cplistitemaccessorytype/none.md), the list item displays the specified standard accessory image. Setting the value to [CPListItemAccessoryType.none](../cplistitemaccessorytype/none.md) displays the custom image in the [accessoryImage](accessoryimage.md) property if you provided one; otherwise, the item omits the accessory image.

## See Also

### Managing accessories

- [accessoryImage](accessoryimage.md): The custom accessory image to display on the trailing edge of the list item.
- [setAccessoryImage(\_:)](setaccessoryimage%28__%29.md): The custom accessory image to display on the trailing edge of the list item.
- [CPListItemAccessoryType](../cplistitemaccessorytype.md): The standard image types a list item can display in its accessory region.

# accessoryType (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The standard accessory type to display on the trailing edge of the list item.

## Declaration

```objectivec
@property (nonatomic, assign) CPListItemAccessoryType accessoryType;
```

<a id="discussion"></a>

## Discussion

The value in this property determines whether to show a standard accessory image such as a disclosure chevron or a custom image you supply. When the value in this property is a value other than [CPListItemAccessoryTypeNone](../cplistitemaccessorytype/none.md), the list item displays the specified standard accessory image. Setting the value to [CPListItemAccessoryTypeNone](../cplistitemaccessorytype/none.md) displays the custom image in the [accessoryImage](accessoryimage.md) property if you provided one; otherwise, the item omits the accessory image.

## See Also

### Managing accessories

- [accessoryImage](accessoryimage.md): The custom accessory image to display on the trailing edge of the list item.
- [setAccessoryImage:](setaccessoryimage%28__%29.md): The custom accessory image to display on the trailing edge of the list item.
- [CPListItemAccessoryType](../cplistitemaccessorytype.md): The standard image types a list item can display in its accessory region.
