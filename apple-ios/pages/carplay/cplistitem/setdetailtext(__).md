> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/setdetailtext(_:)

# setDetailText(\_:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Updates the secondary text of the list item.

## Declaration

```swift
func setDetailText(_ detailText: String?)
```

## Parameters

- `detailText`: The secondary text to display below the primary text in the list item’s row.

## See Also

### Managing the row’s content

- [text](text.md): The primary text for the list item.
- [detailText](detailtext.md): The secondary text for the list item.
- [image](image.md): The image to display on the leading edge of the cell.
- [setText(\_:)](settext%28__%29.md): Updates the primary text of the list item.
- [setImage(\_:)](setimage%28__%29.md): Updates the leading image of the list item.
- [userInfo](userinfo.md): App-specific data you associate with the item.
- [maximumImageSize](maximumimagesize.md): The maximum dimensions for the list item images.

# setDetailText: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Updates the secondary text of the list item.

## Declaration

```objectivec
- (void) setDetailText:(NSString *) detailText;
```

## Parameters

- `detailText`: The secondary text to display below the primary text in the list item’s row.

## See Also

### Managing the row’s content

- [text](text.md): The primary text for the list item.
- [detailText](detailtext.md): The secondary text for the list item.
- [image](image.md): The image to display on the leading edge of the cell.
- [setText:](settext%28__%29.md): Updates the primary text of the list item.
- [setImage:](setimage%28__%29.md): Updates the leading image of the list item.
- [userInfo](userinfo.md): App-specific data you associate with the item.
- [maximumImageSize](maximumimagesize.md): The maximum dimensions for the list item images.
