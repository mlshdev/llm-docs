> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inappendtonoteintent](https://developer.apple.com/documentation/intents/inappendtonoteintent)

# INAppendToNoteIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

A request to append content to a note.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INAppendToNoteIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INAppendToNoteIntent](inappendtonoteintent.md) object when the user asks to append content to an existing note. The intent object contains the note to modify and the content to add to the note.

To handle this intent, the handler object in your Intents extension must adopt the [INAppendToNoteIntentHandling](inappendtonoteintenthandling.md) protocol. Your handler should confirm the request and create an [INAppendToNoteIntentResponse](inappendtonoteintentresponse.md) object with the updated note.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Always requires unlocked device | No |

If the resolution for any parameter requires disambiguation or confirmation, the user must unlock the device before you handle the intent. If resolution of the parameters doesn’t require user interaction, you can handle the intent without the user unlocking the device.

## Topics

### Initializing the Intent Object

- [init(targetNote:content:)](inappendtonoteintent/init%28targetnote_content_%29.md): Deprecated. Initializes the intent object with the specified note and content.

### Getting the Note Content

- [content](inappendtonoteintent/content.md): Deprecated. The content to append to the note.
- [targetNote](inappendtonoteintent/targetnote.md): Deprecated. The note to receive the additional content.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Note Additions

- [INAppendToNoteIntentHandling](inappendtonoteintenthandling.md): Deprecated. The handler interface for appending content to a note.
- [INAppendToNoteIntentResponse](inappendtonoteintentresponse.md): Deprecated. Your app’s response to a request to append content to a note.

# INAppendToNoteIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

A request to append content to a note.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INAppendToNoteIntent : INIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INAppendToNoteIntent](inappendtonoteintent.md) object when the user asks to append content to an existing note. The intent object contains the note to modify and the content to add to the note.

To handle this intent, the handler object in your Intents extension must adopt the [INAppendToNoteIntentHandling](inappendtonoteintenthandling.md) protocol. Your handler should confirm the request and create an [INAppendToNoteIntentResponse](inappendtonoteintentresponse.md) object with the updated note.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Always requires unlocked device | No |

If the resolution for any parameter requires disambiguation or confirmation, the user must unlock the device before you handle the intent. If resolution of the parameters doesn’t require user interaction, you can handle the intent without the user unlocking the device.

## Topics

### Initializing the Intent Object

- [initWithTargetNote:content:](inappendtonoteintent/init%28targetnote_content_%29.md): Deprecated. Initializes the intent object with the specified note and content.

### Getting the Note Content

- [content](inappendtonoteintent/content.md): Deprecated. The content to append to the note.
- [targetNote](inappendtonoteintent/targetnote.md): Deprecated. The note to receive the additional content.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Note Additions

- [INAppendToNoteIntentHandling](inappendtonoteintenthandling.md): Deprecated. The handler interface for appending content to a note.
- [INAppendToNoteIntentResponse](inappendtonoteintentresponse.md): Deprecated. Your app’s response to a request to append content to a note.
