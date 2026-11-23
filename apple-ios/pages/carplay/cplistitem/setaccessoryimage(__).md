> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/setaccessoryimage(_:)

# setAccessoryImage(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The custom accessory image to display on the trailing edge of the list item.

## Declaration

```swift
func setAccessoryImage(_ accessoryImage: UIImage?)
```

<a id="discussion"></a>

## Discussion

If the [accessoryType](accessorytype.md) property is set to [CPListItemAccessoryType.none](../cplistitemaccessorytype/none.md), the list item displays the image in this property. If the value of this property is `nil`, the system omits the accessory image. To change the accessory image in this property, call the [setAccessoryImage(\_:)](setaccessoryimage%28__%29.md) method.

## See Also

### Managing accessories

- [accessoryType](accessorytype.md): The standard accessory type to display on the trailing edge of the list item.
- [accessoryImage](accessoryimage.md): The custom accessory image to display on the trailing edge of the list item.
- [CPListItemAccessoryType](../cplistitemaccessorytype.md): The standard image types a list item can display in its accessory region.

# setAccessoryImage: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The custom accessory image to display on the trailing edge of the list item.

## Declaration

```objectivec
- (void) setAccessoryImage:(UIImage *) accessoryImage;
```

<a id="discussion"></a>

## Discussion

If the [accessoryType](accessorytype.md) property is set to [CPListItemAccessoryTypeNone](../cplistitemaccessorytype/none.md), the list item displays the image in this property. If the value of this property is `nil`, the system omits the accessory image. To change the accessory image in this property, call the [setAccessoryImage:](setaccessoryimage%28__%29.md) method.

## See Also

### Managing accessories

- [accessoryType](accessorytype.md): The standard accessory type to display on the trailing edge of the list item.
- [accessoryImage](accessoryimage.md): The custom accessory image to display on the trailing edge of the list item.
- [CPListItemAccessoryType](../cplistitemaccessorytype.md): The standard image types a list item can display in its accessory region.
