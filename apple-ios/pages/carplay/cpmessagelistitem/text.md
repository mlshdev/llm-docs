> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagelistitem/text

# text (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The primary text to display in the message list item’s row.

## Declaration

```swift
var text: String? { get set }
```

<a id="discussion"></a>

## Discussion

CarPlay displays this string prominently in the message list item’s row. If you initialize the message list item with a conversation identifier, this property contains the string from the `text` parameter of the initializer. If you initialize it with a contact, this property contains the contact name.

## See Also

### Getting the row content

- [detailText](detailtext.md): Additional text to display less prominently below the row’s main text.
- [trailingText](trailingtext.md): Additional text to display after the trailing configuration items.
- [leadingDetailTextImage](leadingdetailtextimage.md): An image to display before the row’s detail text.

# text (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The primary text to display in the message list item’s row.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * text;
```

<a id="discussion"></a>

## Discussion

CarPlay displays this string prominently in the message list item’s row. If you initialize the message list item with a conversation identifier, this property contains the string from the `text` parameter of the initializer. If you initialize it with a contact, this property contains the contact name.

## See Also

### Getting the row content

- [detailText](detailtext.md): Additional text to display less prominently below the row’s main text.
- [trailingText](trailingtext.md): Additional text to display after the trailing configuration items.
- [leadingDetailTextImage](leadingdetailtextimage.md): An image to display before the row’s detail text.
