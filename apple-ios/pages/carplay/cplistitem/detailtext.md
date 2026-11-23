> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/detailtext

# detailText (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The secondary text for the list item.

## Declaration

```swift
var detailText: String? { get }
```

<a id="discussion"></a>

## Discussion

CarPlay displays this text below the primary text with a less prominent font. To change the value of this property after creating the list item, call the [setDetailText(\_:)](setdetailtext%28__%29.md) method.

## See Also

### Managing the row’s content

- [text](text.md): The primary text for the list item.
- [image](image.md): The image to display on the leading edge of the cell.
- [setText(\_:)](settext%28__%29.md): Updates the primary text of the list item.
- [setDetailText(\_:)](setdetailtext%28__%29.md): Updates the secondary text of the list item.
- [setImage(\_:)](setimage%28__%29.md): Updates the leading image of the list item.
- [userInfo](userinfo.md): App-specific data you associate with the item.
- [maximumImageSize](maximumimagesize.md): The maximum dimensions for the list item images.

# detailText (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

The secondary text for the list item.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * detailText;
```

<a id="discussion"></a>

## Discussion

CarPlay displays this text below the primary text with a less prominent font. To change the value of this property after creating the list item, call the [setDetailText:](setdetailtext%28__%29.md) method.

## See Also

### Managing the row’s content

- [text](text.md): The primary text for the list item.
- [image](image.md): The image to display on the leading edge of the cell.
- [setText:](settext%28__%29.md): Updates the primary text of the list item.
- [setDetailText:](setdetailtext%28__%29.md): Updates the secondary text of the list item.
- [setImage:](setimage%28__%29.md): Updates the leading image of the list item.
- [userInfo](userinfo.md): App-specific data you associate with the item.
- [maximumImageSize](maximumimagesize.md): The maximum dimensions for the list item images.
