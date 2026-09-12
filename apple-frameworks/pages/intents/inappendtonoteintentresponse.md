> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inappendtonoteintentresponse](https://developer.apple.com/documentation/intents/inappendtonoteintentresponse)

# INAppendToNoteIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Your app’s response to a request to append content to a note.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INAppendToNoteIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INAppendToNoteIntentResponse](inappendtonoteintentresponse.md) object to return information about the updated note. Siri communicates the information from the response to the user at appropriate times. Be sure to include the details of the note in the [note](inappendtonoteintentresponse/note.md) property.

You create an [INAppendToNoteIntentResponse](inappendtonoteintentresponse.md) object in the [confirm(intent:completion:)](inappendtonoteintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](inappendtonoteintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INAppendToNoteIntentHandling](inappendtonoteintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](inappendtonoteintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](inappendtonoteintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INAppendToNoteIntentResponseCode](inappendtonoteintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Accessing the Note Content

- [note](inappendtonoteintentresponse/note.md): Deprecated. The details of the note that you updated.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Note Additions

- [INAppendToNoteIntentHandling](inappendtonoteintenthandling.md): Deprecated. The handler interface for appending content to a note.
- [INAppendToNoteIntent](inappendtonoteintent.md): Deprecated. A request to append content to a note.

# INAppendToNoteIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

Your app’s response to a request to append content to a note.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INAppendToNoteIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INAppendToNoteIntentResponse](inappendtonoteintentresponse.md) object to return information about the updated note. Siri communicates the information from the response to the user at appropriate times. Be sure to include the details of the note in the [note](inappendtonoteintentresponse/note.md) property.

You create an [INAppendToNoteIntentResponse](inappendtonoteintentresponse.md) object in the [confirmAppendToNote:completion:](inappendtonoteintenthandling/confirm%28intent_completion_%29.md) and [handleAppendToNote:completion:](inappendtonoteintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INAppendToNoteIntentHandling](inappendtonoteintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](inappendtonoteintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](inappendtonoteintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INAppendToNoteIntentResponseCode](inappendtonoteintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Accessing the Note Content

- [note](inappendtonoteintentresponse/note.md): Deprecated. The details of the note that you updated.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Note Additions

- [INAppendToNoteIntentHandling](inappendtonoteintenthandling.md): Deprecated. The handler interface for appending content to a note.
- [INAppendToNoteIntent](inappendtonoteintent.md): Deprecated. A request to append content to a note.
