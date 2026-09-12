> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inappendtonoteintenthandling](https://developer.apple.com/documentation/intents/inappendtonoteintenthandling)

# INAppendToNoteIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The handler interface for appending content to a note.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
protocol INAppendToNoteIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INAppendToNoteIntentHandling](inappendtonoteintenthandling.md) protocol to resolve, confirm, and handle requests to append content to an existing note. Adopt this protocol in an object of your Intents extension that’s capable of updating the note content in your app or note management service.

Siri delivers an [INAppendToNoteIntent](inappendtonoteintent.md) object to your handler when the user asks to create a note using your app. The provided intent object contains information about which note to modify and the content to append. Use the methods of this protocol to resolve the parameters and update the note.

## Topics

### Resolving the Intent Parameters

- [resolveContent(for:with:)](inappendtonoteintenthandling/resolvecontent%28for_with_%29.md): Deprecated. Resolves the content to append to the note.
- [resolveTargetNote(for:with:)](inappendtonoteintenthandling/resolvetargetnote%28for_with_%29.md): Deprecated. Resolves the note that receives the new content.

### Confirming the Response

- [confirm(intent:completion:)](inappendtonoteintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can append content to the note.

### Handling the Intent

- [handle(intent:completion:)](inappendtonoteintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles appending content to a note.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INNotebookDomainHandling](innotebookdomainhandling.md)

## See Also

### Note Additions

- [INAppendToNoteIntent](inappendtonoteintent.md): Deprecated. A request to append content to a note.
- [INAppendToNoteIntentResponse](inappendtonoteintentresponse.md): Deprecated. Your app’s response to a request to append content to a note.

# INAppendToNoteIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

The handler interface for appending content to a note.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@protocol INAppendToNoteIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INAppendToNoteIntentHandling](inappendtonoteintenthandling.md) protocol to resolve, confirm, and handle requests to append content to an existing note. Adopt this protocol in an object of your Intents extension that’s capable of updating the note content in your app or note management service.

Siri delivers an [INAppendToNoteIntent](inappendtonoteintent.md) object to your handler when the user asks to create a note using your app. The provided intent object contains information about which note to modify and the content to append. Use the methods of this protocol to resolve the parameters and update the note.

## Topics

### Resolving the Intent Parameters

- [resolveContentForAppendToNote:withCompletion:](inappendtonoteintenthandling/resolvecontent%28for_with_%29.md): Deprecated. Resolves the content to append to the note.
- [resolveTargetNoteForAppendToNote:withCompletion:](inappendtonoteintenthandling/resolvetargetnote%28for_with_%29.md): Deprecated. Resolves the note that receives the new content.

### Confirming the Response

- [confirmAppendToNote:completion:](inappendtonoteintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can append content to the note.

### Handling the Intent

- [handleAppendToNote:completion:](inappendtonoteintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles appending content to a note.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INNotebookDomainHandling](innotebookdomainhandling.md)

## See Also

### Note Additions

- [INAppendToNoteIntent](inappendtonoteintent.md): Deprecated. A request to append content to a note.
- [INAppendToNoteIntentResponse](inappendtonoteintentresponse.md): Deprecated. Your app’s response to a request to append content to a note.
