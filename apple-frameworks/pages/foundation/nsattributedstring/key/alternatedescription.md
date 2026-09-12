> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/key/alternatedescription](https://developer.apple.com/documentation/foundation/nsattributedstring/key/alternatedescription)

# alternateDescription (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An alternate description for a URL or image.

## Declaration

```swift
static let alternateDescription: NSAttributedString.Key
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSString](../../nsstring.md) with the alternate description of the URL or image.

When a Markdown link contains a title string, the system adds this key to the link text and sets the value to the title. For example, in the Markdown tect `[Visit the Apple Store](https://store.apple.com “The Apple Store website”)`, the system sets the value of this key to `The Apple Store website`.

## See Also

### Getting Markdown attribute keys

- [inlinePresentationIntent](inlinepresentationintent.md): An attribute that provides details for an inline Markdown element.
- [presentationIntentAttributeName](presentationintentattributename.md): An attribute that provides details for a block-level Markdown element.
- [markdownSourcePosition](markdownsourceposition.md): The position in a Markdown source string corresponding to some attributed text.
- [imageURL](imageurl.md): The URL for an image in Markdown text.

# NSAlternateDescriptionAttributeName (Objective-C)

**Framework:** Foundation  
**Kind:** Global Variable  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An alternate description for a URL or image.

## Declaration

```objectivec
extern NSAttributedStringKey const NSAlternateDescriptionAttributeName;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSString](../../nsstring.md) with the alternate description of the URL or image.

When a Markdown link contains a title string, the system adds this key to the link text and sets the value to the title. For example, in the Markdown tect `[Visit the Apple Store](https://store.apple.com “The Apple Store website”)`, the system sets the value of this key to `The Apple Store website`.

## See Also

### Getting Markdown attribute keys

- [NSInlinePresentationIntentAttributeName](inlinepresentationintent.md): An attribute that provides details for an inline Markdown element.
- [NSPresentationIntentAttributeName](presentationintentattributename.md): An attribute that provides details for a block-level Markdown element.
- [NSMarkdownSourcePositionAttributeName](markdownsourceposition.md): The position in a Markdown source string corresponding to some attributed text.
- [NSImageURLAttributeName](imageurl.md): The URL for an image in Markdown text.
