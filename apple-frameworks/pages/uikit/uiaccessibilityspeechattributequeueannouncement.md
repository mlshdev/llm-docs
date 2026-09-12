> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilityspeechattributequeueannouncement](https://developer.apple.com/documentation/uikit/uiaccessibilityspeechattributequeueannouncement)

# UIAccessibilitySpeechAttributeQueueAnnouncement

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+

A key that indicates whether to queue an announcement behind existing speech or to interrupt it.

## Declaration

```objectivec
extern NSAttributedStringKey const UIAccessibilitySpeechAttributeQueueAnnouncement;
```

<a id="Overview"></a>

## Overview

The value of this key is an [NSNumber](../foundation/nsnumber.md) object that the system interprets as a Boolean value. When the value is `YES`, the system queues the announcement behind existing speech. When the value is `NO`, the announcement interrupts the existing speech. The default behavior is to interrupt existing speech.

## See Also

### Constants

- [UIAccessibilitySpeechAttributePunctuation](uiaccessibilityspeechattributepunctuation.md): A key that indicates whether to speak punctuation.
- [UIAccessibilitySpeechAttributeLanguage](uiaccessibilityspeechattributelanguage.md): A key that indicates the language to use when speaking a string.
- [UIAccessibilitySpeechAttributePitch](uiaccessibilityspeechattributepitch.md): A key that indicates the pitch to apply to spoken content.
- [UIAccessibilitySpeechAttributeIPANotation](uiaccessibilityspeechattributeipanotation.md): A key that indicates the pronunciation of a specific word or phrase, such as a proper name.
- [UIAccessibilitySpeechAttributeAnnouncementPriority](uiaccessibilityspeechattributeannouncementpriority.md)
- [UIAccessibilitySpeechAttributeSpellOut](uiaccessibilityspeechattributespellout.md)
- [UIAccessibilityPriority](uiaccessibilitypriority.md): Constants that specify priorities for accessibility announcements.
