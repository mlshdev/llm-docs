> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/accessoryimage

# accessoryImage (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The custom accessory image to display on the trailing edge of the list item.

## Declaration

```swift
var accessoryImage: UIImage? { get }
```

<a id="discussion"></a>

## Discussion

If the [accessoryType](accessorytype.md) property is set to [CPListItemAccessoryType.none](../cplistitemaccessorytype/none.md), the list item displays the image in this property. To change the accessory image in this property, call the [setAccessoryImage(\_:)](setaccessoryimage%28__%29.md) method.

## See Also

### Managing accessories

- [accessoryType](accessorytype.md): The standard accessory type to display on the trailing edge of the list item.
- [setAccessoryImage(\_:)](setaccessoryimage%28__%29.md): The custom accessory image to display on the trailing edge of the list item.
- [CPListItemAccessoryType](../cplistitemaccessorytype.md): The standard image types a list item can display in its accessory region.

# accessoryImage (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The custom accessory image to display on the trailing edge of the list item.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIImage * accessoryImage;
```

<a id="discussion"></a>

## Discussion

If the [accessoryType](accessorytype.md) property is set to [CPListItemAccessoryTypeNone](../cplistitemaccessorytype/none.md), the list item displays the image in this property. To change the accessory image in this property, call the [setAccessoryImage:](setaccessoryimage%28__%29.md) method.

## See Also

### Managing accessories

- [accessoryType](accessorytype.md): The standard accessory type to display on the trailing edge of the list item.
- [setAccessoryImage:](setaccessoryimage%28__%29.md): The custom accessory image to display on the trailing edge of the list item.
- [CPListItemAccessoryType](../cplistitemaccessorytype.md): The standard image types a list item can display in its accessory region.
