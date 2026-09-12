> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkpickeritem/caption](https://developer.apple.com/documentation/watchkit/wkpickeritem/caption)

# caption (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

A caption for the item’s content.

## Declaration

```swift
var caption: String? { get set }
```

<a id="Discussion"></a>

## Discussion

When the picker’s focus style includes a caption, the picker gets the text for that caption from this property. Captions are a way to identify the meaning of the item’s content. You can also assign the same caption to all of the items in a picker to identify the purpose of the picker itself.

## See Also

### Setting the Picker Item’s Content

- [contentImage](contentimage.md): The image to display for the item.
- [title](title.md): The text to display for the item.
- [accessoryImage](accessoryimage.md): A small image to display next to the title string.

# caption (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

A caption for the item’s content.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * caption;
```

<a id="Discussion"></a>

## Discussion

When the picker’s focus style includes a caption, the picker gets the text for that caption from this property. Captions are a way to identify the meaning of the item’s content. You can also assign the same caption to all of the items in a picker to identify the purpose of the picker itself.

## See Also

### Setting the Picker Item’s Content

- [contentImage](contentimage.md): The image to display for the item.
- [title](title.md): The text to display for the item.
- [accessoryImage](accessoryimage.md): A small image to display next to the title string.
