> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpmessagelistitem/trailingtext

# trailingText (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Additional text to display after the trailing configuration items.

## Declaration

```swift
var trailingText: String? { get set }
```

<a id="discussion"></a>

## Discussion

Specify the trailing text at initialization time. CarPlay places the text after any content from the [trailingConfiguration](trailingconfiguration.md) property.

## See Also

### Getting the row content

- [text](text.md): The primary text to display in the message list item’s row.
- [detailText](detailtext.md): Additional text to display less prominently below the row’s main text.
- [leadingDetailTextImage](leadingdetailtextimage.md): An image to display before the row’s detail text.

# trailingText (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

Additional text to display after the trailing configuration items.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * trailingText;
```

<a id="discussion"></a>

## Discussion

Specify the trailing text at initialization time. CarPlay places the text after any content from the [trailingConfiguration](trailingconfiguration.md) property.

## See Also

### Getting the row content

- [text](text.md): The primary text to display in the message list item’s row.
- [detailText](detailtext.md): Additional text to display less prominently below the row’s main text.
- [leadingDetailTextImage](leadingdetailtextimage.md): An image to display before the row’s detail text.
