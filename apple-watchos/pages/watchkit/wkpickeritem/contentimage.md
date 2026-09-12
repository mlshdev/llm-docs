> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkpickeritem/contentimage](https://developer.apple.com/documentation/watchkit/wkpickeritem/contentimage)

# contentImage (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The image to display for the item.

## Declaration

```swift
@NSCopying var contentImage: WKImage? { get set }
```

<a id="Discussion"></a>

## Discussion

This image contains the item’s content and is displayed when the item is selected. The content image supported for all picker styles.

## See Also

### Setting the Picker Item’s Content

- [title](title.md): The text to display for the item.
- [accessoryImage](accessoryimage.md): A small image to display next to the title string.
- [caption](caption.md): A caption for the item’s content.

# contentImage (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The image to display for the item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) WKImage * contentImage;
```

<a id="Discussion"></a>

## Discussion

This image contains the item’s content and is displayed when the item is selected. The content image supported for all picker styles.

## See Also

### Setting the Picker Item’s Content

- [title](title.md): The text to display for the item.
- [accessoryImage](accessoryimage.md): A small image to display next to the title string.
- [caption](caption.md): A caption for the item’s content.
