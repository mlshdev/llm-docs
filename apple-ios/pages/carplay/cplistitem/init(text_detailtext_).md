> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistitem/init(text:detailtext:)](https://developer.apple.com/documentation/carplay/cplistitem/init(text:detailtext:))

# init(text:detailText:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a list item with primary and secondary text.

## Declaration

```swift
init(text: String?, detailText: String?)
```

## Parameters

- `text`: The primary text to show in the list item cell.
- `detailText`: Additional text to display below the primary text in the list item cell.

<a id="return-value"></a>

## Return Value

A newly initialized list item.

## See Also

### Creating a List Item

- [init(text:detailText:image:)](init%28text_detailtext_image_%29.md): Creates a list item with primary text, secondary text, and an image.
- [init(text:detailText:image:accessoryImage:accessoryType:)](init%28text_detailtext_image_accessoryimage_accessorytype_%29.md): Creates a list item that displays an accessory beside its content.

# initWithText:detailText: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Creates a list item with primary and secondary text.

## Declaration

```objectivec
- (instancetype) initWithText:(NSString *) text detailText:(NSString *) detailText;
```

## Parameters

- `text`: The primary text to show in the list item cell.
- `detailText`: Additional text to display below the primary text in the list item cell.

<a id="return-value"></a>

## Return Value

A newly initialized list item.

## See Also

### Creating a List Item

- [initWithText:detailText:image:](init%28text_detailtext_image_%29.md): Creates a list item with primary text, secondary text, and an image.
- [initWithText:detailText:image:accessoryImage:accessoryType:](init%28text_detailtext_image_accessoryimage_accessorytype_%29.md): Creates a list item that displays an accessory beside its content.
