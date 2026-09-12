> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiconfigurationtextattributestransformer-c.typealias](https://developer.apple.com/documentation/uikit/uiconfigurationtextattributestransformer-c.typealias)

# UIConfigurationTextAttributesTransformer

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Defines a text transformation that can affect the visual appearance of a string.

## Declaration

```objectivec
typedef NSDictionary<NSString *,id> *(^)(NSDictionary<NSString *,id> *) UIConfigurationTextAttributesTransformer;
```

<a id="discussion"></a>

## Discussion

Use a transformer to affect how your attributed text appears on the UI. You provide a closure when initializing the transformer. Your closure accepts a container with the current text attributes and returns a container with the new text attributes.

```objc
UIConfigurationTextAttributesTransformer transformer;
transformer = ^(NSDictionary<NSAttributedStringKey, id> *incoming) {
    NSMutableDictionary<NSAttributedStringKey, id> *outgoing = [incoming mutableCopy];
    outgoing[NSForegroundColorAttributeName] = [UIColor blackColor];
    outgoing[NSFontAttributeName] = [UIFont boldSystemFontOfSize:20];
    return outgoing;
};
```

## See Also

### Configuring titles

- [title](uibuttonconfiguration/title.md): The text of the title label the button displays.
- [subtitle](uibuttonconfiguration/subtitle.md): The text the subtitle label of the button displays.
- [attributedTitle](uibuttonconfiguration/attributedtitle.md): The text and style attributes for the button’s title label.
- [attributedSubtitle](uibuttonconfiguration/attributedsubtitle.md): The text and style attributes for the button’s subtitle label.
- [titleTextAttributesTransformer](uibuttonconfiguration/titletextattributestransformer.md): A transformer to update the attributed title when the button state changes.
- [subtitleTextAttributesTransformer](uibuttonconfiguration/subtitletextattributestransformer.md): A transformer to update the attributed subtitle when the button state changes.
- [titlePadding](uibuttonconfiguration/titlepadding.md): The distance between the title and subtitle labels.
- [titleAlignment](uibuttonconfiguration/titlealignment.md): The text alignment the button uses to lay out the title and subtitle.
- [UIButtonConfigurationTitleAlignment](uibuttonconfigurationtitlealignment.md): Specifies how to align a button’s title and subtitle.
- [titleLineBreakMode](uibuttonconfiguration/titlelinebreakmode.md): The line break mode the button uses to lay out the button’s title.
- [subtitleLineBreakMode](uibuttonconfiguration/subtitlelinebreakmode.md): The line break mode the button uses to lay out the button’s subtitle.
