> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/text

# text (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The primary text for the list item.

## Declaration

```swift
var text: String? { get }
```

<a id="discussion"></a>

## Discussion

CarPlay displays this text prominently in the row, starting at the leading edge. To change the value of this property after creating the list item, call the [setText(\_:)](settext%28__%29.md) method.

## See Also

### Managing the row’s content

- [detailText](detailtext.md): The secondary text for the list item.
- [image](image.md): The image to display on the leading edge of the cell.
- [setText(\_:)](settext%28__%29.md): Updates the primary text of the list item.
- [setDetailText(\_:)](setdetailtext%28__%29.md): Updates the secondary text of the list item.
- [setImage(\_:)](setimage%28__%29.md): Updates the leading image of the list item.
- [userInfo](userinfo.md): App-specific data you associate with the item.
- [maximumImageSize](maximumimagesize.md): The maximum dimensions for the list item images.

# text (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The primary text for the list item.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * text;
```

<a id="discussion"></a>

## Discussion

CarPlay displays this text prominently in the row, starting at the leading edge. To change the value of this property after creating the list item, call the [setText:](settext%28__%29.md) method.

## See Also

### Managing the row’s content

- [detailText](detailtext.md): The secondary text for the list item.
- [image](image.md): The image to display on the leading edge of the cell.
- [setText:](settext%28__%29.md): Updates the primary text of the list item.
- [setDetailText:](setdetailtext%28__%29.md): Updates the secondary text of the list item.
- [setImage:](setimage%28__%29.md): Updates the leading image of the list item.
- [userInfo](userinfo.md): App-specific data you associate with the item.
- [maximumImageSize](maximumimagesize.md): The maximum dimensions for the list item images.
