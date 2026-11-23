> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/userinfo

# userInfo (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

App-specific data you associate with the item.

## Declaration

```swift
var userInfo: Any? { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to attach app-specific data to the list item. For example, you might attach the model object from your app that corresponds to the list item’s content. This information is just for your app, and CarPlay doesn’t use it. The default value of this property is `nil`.

## See Also

### Managing the row’s content

- [text](text.md): The primary text for the list item.
- [detailText](detailtext.md): The secondary text for the list item.
- [image](image.md): The image to display on the leading edge of the cell.
- [setText(\_:)](settext%28__%29.md): Updates the primary text of the list item.
- [setDetailText(\_:)](setdetailtext%28__%29.md): Updates the secondary text of the list item.
- [setImage(\_:)](setimage%28__%29.md): Updates the leading image of the list item.
- [maximumImageSize](maximumimagesize.md): The maximum dimensions for the list item images.

# userInfo (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

App-specific data you associate with the item.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id userInfo;
```

<a id="discussion"></a>

## Discussion

Use this property to attach app-specific data to the list item. For example, you might attach the model object from your app that corresponds to the list item’s content. This information is just for your app, and CarPlay doesn’t use it. The default value of this property is `nil`.

## See Also

### Managing the row’s content

- [text](text.md): The primary text for the list item.
- [detailText](detailtext.md): The secondary text for the list item.
- [image](image.md): The image to display on the leading edge of the cell.
- [setText:](settext%28__%29.md): Updates the primary text of the list item.
- [setDetailText:](setdetailtext%28__%29.md): Updates the secondary text of the list item.
- [setImage:](setimage%28__%29.md): Updates the leading image of the list item.
- [maximumImageSize](maximumimagesize.md): The maximum dimensions for the list item images.
