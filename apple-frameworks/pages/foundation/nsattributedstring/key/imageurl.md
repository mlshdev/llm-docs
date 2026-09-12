> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/imageurl](https://developer.apple.com/documentation/foundation/nsattributedstring/key/imageurl)

# imageURL (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The URL for an image in Markdown text.

## Declaration

```swift
static let imageURL: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSURL](../../nsurl.md) with the link to the image.

## See Also

### Getting Markdown attribute keys

- [inlinePresentationIntent](inlinepresentationintent.md): An attribute that provides details for an inline Markdown element.
- [presentationIntentAttributeName](presentationintentattributename.md): An attribute that provides details for a block-level Markdown element.
- [markdownSourcePosition](markdownsourceposition.md): The position in a Markdown source string corresponding to some attributed text.
- [alternateDescription](alternatedescription.md): An alternate description for a URL or image.

# NSImageURLAttributeName (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The URL for an image in Markdown text.

## Declaration

```objectivec
extern NSAttributedStringKey const NSImageURLAttributeName;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSURL](../../nsurl.md) with the link to the image.

## See Also

### Getting Markdown attribute keys

- [NSInlinePresentationIntentAttributeName](inlinepresentationintent.md): An attribute that provides details for an inline Markdown element.
- [NSPresentationIntentAttributeName](presentationintentattributename.md): An attribute that provides details for a block-level Markdown element.
- [NSMarkdownSourcePositionAttributeName](markdownsourceposition.md): The position in a Markdown source string corresponding to some attributed text.
- [NSAlternateDescriptionAttributeName](alternatedescription.md): An alternate description for a URL or image.
