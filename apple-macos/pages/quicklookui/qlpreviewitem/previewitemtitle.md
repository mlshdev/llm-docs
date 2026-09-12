> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quicklookui/qlpreviewitem/previewitemtitle](https://developer.apple.com/documentation/quicklookui/qlpreviewitem/previewitemtitle)

# previewItemTitle (Swift)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The title to display for the preview item.

## Declaration

```swift
optional var previewItemTitle: String! { get }
```

<a id="Discussion"></a>

## Discussion

If you don’t implement a getter method for this property, or if your method returns `nil`, Quick Look examines the URL or content of the previewed item to determine an appropriate title. Return a `non-nil` value for this property to provide a custom title.

## See Also

### Instance Properties

- [previewItemDisplayState](previewitemdisplaystate.md): The display state for the preview item.
- [previewItemURL](previewitemurl.md): The URL of the item to preview.

# previewItemTitle (Objective-C)

**Framework:** Quick Look UI  
**Kind:** Instance Property  
**Availability:** macOS 10.6+

The title to display for the preview item.

## Declaration

```objectivec
@property (readonly) NSString * previewItemTitle;
```

<a id="Discussion"></a>

## Discussion

If you don’t implement a getter method for this property, or if your method returns `nil`, Quick Look examines the URL or content of the previewed item to determine an appropriate title. Return a `non-nil` value for this property to provide a custom title.

## See Also

### Instance Properties

- [previewItemDisplayState](previewitemdisplaystate.md): The display state for the preview item.
- [previewItemURL](previewitemurl.md): The URL of the item to preview.
