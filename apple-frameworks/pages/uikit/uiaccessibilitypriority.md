> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitypriority](https://developer.apple.com/documentation/uikit/uiaccessibilitypriority)

# UIAccessibilityPriority (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Constants that specify priorities for accessibility announcements.

## Declaration

```swift
struct UIAccessibilityPriority
```

<a id="overview"></a>

## Overview

Use these constants either with the [accessibilitySpeechAnnouncementPriority](../foundation/attributescopes/accessibilityattributes/accessibilityspeechannouncementpriority.md) property of [AttributedString](../foundation/attributedstring.md), or with the [UIAccessibilitySpeechAttributeAnnouncementPriority](uiaccessibilityspeechattributeannouncementpriority.md) attributed key. For example, the following code shows how to create an announcement with a [high](uiaccessibilitypriority/high.md) announcement priority:

```swift
let highPriorityAnnouncement = NSAttributedString(string: "Camera active", attributes:
[NSAttributedString.Key.accessibilitySpeechAnnouncementPriority: UIAccessibilityPriority.high])
```

## Topics

### Choosing a priority

- [high](uiaccessibilitypriority/high.md): A high-priority announcement that interrupts other speech and isn’t interruptible after it starts.
- [default](uiaccessibilitypriority/default.md): A default-priority announcement that interrupts existing speech, but is interruptible if a new speech utterance starts.
- [low](uiaccessibilitypriority/low.md): A low-priority announcement that the system queues and speaks after other speech utterances are complete.

### Creating a priority

- [init(rawValue:)](uiaccessibilitypriority/init%28rawvalue_%29.md): Creates a priority structure with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [accessibilitySpeechPunctuation](../foundation/nsattributedstring/key/accessibilityspeechpunctuation.md): A key that indicates whether to speak punctuation.
- [accessibilitySpeechLanguage](../foundation/nsattributedstring/key/accessibilityspeechlanguage.md): A key that indicates the language to use when speaking a string.
- [accessibilitySpeechPitch](../foundation/nsattributedstring/key/accessibilityspeechpitch.md): A key that indicates the pitch to apply to spoken content.
- [accessibilitySpeechQueueAnnouncement](../foundation/nsattributedstring/key/accessibilityspeechqueueannouncement.md): Deprecated. A key that indicates whether to queue an announcement behind existing speech or to interrupt it.
- [accessibilitySpeechIPANotation](../foundation/nsattributedstring/key/accessibilityspeechipanotation.md): A key that indicates the pronunciation of a specific word or phrase, such as a proper name.
- [accessibilitySpeechAnnouncementPriority](../foundation/nsattributedstring/key/accessibilityspeechannouncementpriority.md)
- [accessibilitySpeechSpellOut](../foundation/nsattributedstring/key/accessibilityspeechspellout.md)

# UIAccessibilityPriority (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Constants that specify priorities for accessibility announcements.

## Declaration

```objectivec
typedef NSString * UIAccessibilityPriority;
```

<a id="overview"></a>

## Overview

Use these constants either with the [accessibilitySpeechAnnouncementPriority](../foundation/attributescopes/accessibilityattributes/accessibilityspeechannouncementpriority.md) property of [AttributedString](../foundation/attributedstring.md), or with the [UIAccessibilitySpeechAttributeAnnouncementPriority](uiaccessibilityspeechattributeannouncementpriority.md) attributed key. For example, the following code shows how to create an announcement with a [UIAccessibilityPriorityHigh](uiaccessibilitypriority/high.md) announcement priority:

```swift
let highPriorityAnnouncement = NSAttributedString(string: "Camera active", attributes:
[NSAttributedString.Key.accessibilitySpeechAnnouncementPriority: UIAccessibilityPriority.high])
```

## Topics

### Choosing a priority

- [UIAccessibilityPriorityHigh](uiaccessibilitypriority/high.md): A high-priority announcement that interrupts other speech and isn’t interruptible after it starts.
- [UIAccessibilityPriorityDefault](uiaccessibilitypriority/default.md): A default-priority announcement that interrupts existing speech, but is interruptible if a new speech utterance starts.
- [UIAccessibilityPriorityLow](uiaccessibilitypriority/low.md): A low-priority announcement that the system queues and speaks after other speech utterances are complete.

## See Also

### Constants

- [UIAccessibilitySpeechAttributePunctuation](uiaccessibilityspeechattributepunctuation.md): A key that indicates whether to speak punctuation.
- [UIAccessibilitySpeechAttributeLanguage](uiaccessibilityspeechattributelanguage.md): A key that indicates the language to use when speaking a string.
- [UIAccessibilitySpeechAttributePitch](uiaccessibilityspeechattributepitch.md): A key that indicates the pitch to apply to spoken content.
- [UIAccessibilitySpeechAttributeQueueAnnouncement](uiaccessibilityspeechattributequeueannouncement.md): Deprecated. A key that indicates whether to queue an announcement behind existing speech or to interrupt it.
- [UIAccessibilitySpeechAttributeIPANotation](uiaccessibilityspeechattributeipanotation.md): A key that indicates the pronunciation of a specific word or phrase, such as a proper name.
- [UIAccessibilitySpeechAttributeAnnouncementPriority](uiaccessibilityspeechattributeannouncementpriority.md)
- [UIAccessibilitySpeechAttributeSpellOut](uiaccessibilityspeechattributespellout.md)
