> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkpickeritem/accessoryimage](https://developer.apple.com/documentation/watchkit/wkpickeritem/accessoryimage)

# accessoryImage (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

A small image to display next to the title string.

## Declaration

```swift
@NSCopying var accessoryImage: WKImage? { get set }
```

<a id="Discussion"></a>

## Discussion

The dimensions of an accessory image are 13 points wide by 13 points high. Larger images are scaled and centered to fit the available space. Smaller images are centered but not scaled.

## See Also

### Setting the Picker Item’s Content

- [contentImage](contentimage.md): The image to display for the item.
- [title](title.md): The text to display for the item.
- [caption](caption.md): A caption for the item’s content.

# accessoryImage (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

A small image to display next to the title string.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) WKImage * accessoryImage;
```

<a id="Discussion"></a>

## Discussion

The dimensions of an accessory image are 13 points wide by 13 points high. Larger images are scaled and centered to fit the available space. Smaller images are centered but not scaled.

## See Also

### Setting the Picker Item’s Content

- [contentImage](contentimage.md): The image to display for the item.
- [title](title.md): The text to display for the item.
- [caption](caption.md): A caption for the item’s content.
