> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistitem/accessorytype](https://developer.apple.com/documentation/carplay/cplistitem/accessorytype)

# accessoryType (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The accessory that the list item displays in its trailing region.

## Declaration

```swift
var accessoryType: CPListItemAccessoryType { get set }
```

<a id="Discussion"></a>

## Discussion

If you update the list item to display an accessory image using the [setAccessoryImage(\_:)](setaccessoryimage%28__%29.md) method, CarPlay sets this property’s value to [CPListItemAccessoryType.none](../cplistitemaccessorytype/none.md).

## See Also

### Managing Accessories

- [CPListItemAccessoryType](../cplistitemaccessorytype.md): The accessory types that a list item can display.
- [accessoryImage](accessoryimage.md): The image that the list item displays in its trailing region.
- [setAccessoryImage(\_:)](setaccessoryimage%28__%29.md): Updates the list item’s accessory image.

# accessoryType (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The accessory that the list item displays in its trailing region.

## Declaration

```objectivec
@property (nonatomic, assign) CPListItemAccessoryType accessoryType;
```

<a id="Discussion"></a>

## Discussion

If you update the list item to display an accessory image using the [setAccessoryImage:](setaccessoryimage%28__%29.md) method, CarPlay sets this property’s value to [CPListItemAccessoryTypeNone](../cplistitemaccessorytype/none.md).

## See Also

### Managing Accessories

- [CPListItemAccessoryType](../cplistitemaccessorytype.md): The accessory types that a list item can display.
- [accessoryImage](accessoryimage.md): The image that the list item displays in its trailing region.
- [setAccessoryImage:](setaccessoryimage%28__%29.md): Updates the list item’s accessory image.
