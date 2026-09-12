> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/presentationintentattributename](https://developer.apple.com/documentation/foundation/nsattributedstring/key/presentationintentattributename)

# presentationIntentAttributeName (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An attribute that provides details for a block-level Markdown element.

## Declaration

```swift
static let presentationIntentAttributeName: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSPresentationIntent](../../nspresentationintent.md) object. Block-level elements include paragraphs, headers, lists, tables, and other structural elements of the Markdown content.

The system provides default visual treatments for ranges of text with this attribute. To replace the default visual treatment, remove this attribute and replace it with the formatting options you want.

## See Also

### Getting Markdown attribute keys

- [inlinePresentationIntent](inlinepresentationintent.md): An attribute that provides details for an inline Markdown element.
- [markdownSourcePosition](markdownsourceposition.md): The position in a Markdown source string corresponding to some attributed text.
- [alternateDescription](alternatedescription.md): An alternate description for a URL or image.
- [imageURL](imageurl.md): The URL for an image in Markdown text.

# NSPresentationIntentAttributeName (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An attribute that provides details for a block-level Markdown element.

## Declaration

```objectivec
extern NSAttributedStringKey const NSPresentationIntentAttributeName;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSPresentationIntent](../../nspresentationintent.md) object. Block-level elements include paragraphs, headers, lists, tables, and other structural elements of the Markdown content.

The system provides default visual treatments for ranges of text with this attribute. To replace the default visual treatment, remove this attribute and replace it with the formatting options you want.

## See Also

### Getting Markdown attribute keys

- [NSInlinePresentationIntentAttributeName](inlinepresentationintent.md): An attribute that provides details for an inline Markdown element.
- [NSMarkdownSourcePositionAttributeName](markdownsourceposition.md): The position in a Markdown source string corresponding to some attributed text.
- [NSAlternateDescriptionAttributeName](alternatedescription.md): An alternate description for a URL or image.
- [NSImageURLAttributeName](imageurl.md): The URL for an image in Markdown text.
