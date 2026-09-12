> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilityspeechattributelanguage](https://developer.apple.com/documentation/uikit/uiaccessibilityspeechattributelanguage)

# UIAccessibilitySpeechAttributeLanguage

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A key that indicates the language to use when speaking a string.

## Declaration

```objectivec
extern NSAttributedStringKey const UIAccessibilitySpeechAttributeLanguage;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSString](../foundation/nsstring.md) object that contains a BCP 47 language code. When applying it to text in a string, the rules for the specified language govern how to pronounce that string.

## See Also

### Constants

- [UIAccessibilitySpeechAttributePunctuation](uiaccessibilityspeechattributepunctuation.md): A key that indicates whether to speak punctuation.
- [UIAccessibilitySpeechAttributePitch](uiaccessibilityspeechattributepitch.md): A key that indicates the pitch to apply to spoken content.
- [UIAccessibilitySpeechAttributeQueueAnnouncement](uiaccessibilityspeechattributequeueannouncement.md): Deprecated. A key that indicates whether to queue an announcement behind existing speech or to interrupt it.
- [UIAccessibilitySpeechAttributeIPANotation](uiaccessibilityspeechattributeipanotation.md): A key that indicates the pronunciation of a specific word or phrase, such as a proper name.
- [UIAccessibilitySpeechAttributeAnnouncementPriority](uiaccessibilityspeechattributeannouncementpriority.md)
- [UIAccessibilitySpeechAttributeSpellOut](uiaccessibilityspeechattributespellout.md)
- [UIAccessibilityPriority](uiaccessibilitypriority.md): Constants that specify priorities for accessibility announcements.
