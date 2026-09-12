> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/markdownsourceposition](https://developer.apple.com/documentation/foundation/nsattributedstring/key/markdownsourceposition)

# markdownSourcePosition (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The position in a Markdown source string corresponding to some attributed text.

## Declaration

```swift
static let markdownSourcePosition: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

This attribute indicates the position in the Markdown source where a run of attributed text begins and ends, omitting markup characters in the source. For example, after parsing the source string `“This is *emphasized*.”`, the text `emphasized` has a Markdown source position that starts at column `10`. This index is the `“e”` character, not the `“*”` formatting character.

An attributed string parsed from Markdown text includes this attribute only if the [appliesSourcePositionAttributes](../../nsattributedstringmarkdownparsingoptions/appliessourcepositionattributes.md) value in the directory of [NSAttributedString.DocumentReadingOptionKey](../documentreadingoptionkey.md) options provided to the [NSAttributedString](../../nsattributedstring.md) initializer is `YES`.

## See Also

### Getting Markdown attribute keys

- [inlinePresentationIntent](inlinepresentationintent.md): An attribute that provides details for an inline Markdown element.
- [presentationIntentAttributeName](presentationintentattributename.md): An attribute that provides details for a block-level Markdown element.
- [alternateDescription](alternatedescription.md): An alternate description for a URL or image.
- [imageURL](imageurl.md): The URL for an image in Markdown text.

# NSMarkdownSourcePositionAttributeName (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The position in a Markdown source string corresponding to some attributed text.

## Declaration

```objectivec
extern NSAttributedStringKey const NSMarkdownSourcePositionAttributeName;
```

<a id="Discussion"></a>

## Discussion

This attribute indicates the position in the Markdown source where a run of attributed text begins and ends, omitting markup characters in the source. For example, after parsing the source string `“This is *emphasized*.”`, the text `emphasized` has a Markdown source position that starts at column `10`. This index is the `“e”` character, not the `“*”` formatting character.

An attributed string parsed from Markdown text includes this attribute only if the [appliesSourcePositionAttributes](../../nsattributedstringmarkdownparsingoptions/appliessourcepositionattributes.md) value in the directory of [NSAttributedString.DocumentReadingOptionKey](../documentreadingoptionkey.md) options provided to the [NSAttributedString](../../nsattributedstring.md) initializer is `YES`.

## See Also

### Getting Markdown attribute keys

- [NSInlinePresentationIntentAttributeName](inlinepresentationintent.md): An attribute that provides details for an inline Markdown element.
- [NSPresentationIntentAttributeName](presentationintentattributename.md): An attribute that provides details for a block-level Markdown element.
- [NSAlternateDescriptionAttributeName](alternatedescription.md): An alternate description for a URL or image.
- [NSImageURLAttributeName](imageurl.md): The URL for an image in Markdown text.
