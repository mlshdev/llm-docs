> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkpickeritem/title](https://developer.apple.com/documentation/watchkit/wkpickeritem/title)

# title (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The text to display for the item.

## Declaration

```swift
var title: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This string contains the item’s content and is displayed when the item is selected. Titles are used for pickers configured to display a list. They are not shown for stack and image sequence styles.

## See Also

### Setting the Picker Item’s Content

- [contentImage](contentimage.md): The image to display for the item.
- [accessoryImage](accessoryimage.md): A small image to display next to the title string.
- [caption](caption.md): A caption for the item’s content.

# title (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The text to display for the item.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * title;
```

<a id="Discussion"></a>

## Discussion

This string contains the item’s content and is displayed when the item is selected. Titles are used for pickers configured to display a list. They are not shown for stack and image sequence styles.

## See Also

### Setting the Picker Item’s Content

- [contentImage](contentimage.md): The image to display for the item.
- [accessoryImage](accessoryimage.md): A small image to display next to the title string.
- [caption](caption.md): A caption for the item’s content.
