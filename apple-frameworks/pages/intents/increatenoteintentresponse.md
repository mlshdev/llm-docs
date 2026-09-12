> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatenoteintentresponse](https://developer.apple.com/documentation/intents/increatenoteintentresponse)

# INCreateNoteIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Your app’s response to a request to create a note.

> INCreateNoteIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
class INCreateNoteIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INCreateNoteIntentResponse](increatenoteintentresponse.md) object to return information about the note that your app created. Siri communicates the information from your app’s response to the user at appropriate times.

You create an [INCreateNoteIntentResponse](increatenoteintentresponse.md) object in the [confirm(intent:completion:)](increatenoteintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](increatenoteintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INCreateNoteIntentHandling](increatenoteintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](increatenoteintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](increatenoteintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INCreateNoteIntentResponseCode](increatenoteintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Accessing the Note Content

- [createdNote](increatenoteintentresponse/creatednote.md): Deprecated. The details of the note that you created.

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

### Note Creation

- [INCreateNoteIntentHandling](increatenoteintenthandling.md): Deprecated. The handler interface for creating notes.
- [INCreateNoteIntent](increatenoteintent.md): Deprecated. A request to create a new note.

# INCreateNoteIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Your app’s response to a request to create a note.

> INCreateNoteIntentResponse is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@interface INCreateNoteIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INCreateNoteIntentResponse](increatenoteintentresponse.md) object to return information about the note that your app created. Siri communicates the information from your app’s response to the user at appropriate times.

You create an [INCreateNoteIntentResponse](increatenoteintentresponse.md) object in the [confirmCreateNote:completion:](increatenoteintenthandling/confirm%28intent_completion_%29.md) and [handleCreateNote:completion:](increatenoteintenthandling/handle%28intent_completion_%29.md) methods of your handler object. For more information about implementing your handler object, see [INCreateNoteIntentHandling](increatenoteintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](increatenoteintentresponse/init%28code_useractivity_%29.md): Deprecated. Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](increatenoteintentresponse/code.md): Deprecated. The code indicating whether you successfully handled the intent.
- [INCreateNoteIntentResponseCode](increatenoteintentresponsecode.md): Deprecated. Constants indicating the state of the response.

### Accessing the Note Content

- [createdNote](increatenoteintentresponse/creatednote.md): Deprecated. The details of the note that you created.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Note Creation

- [INCreateNoteIntentHandling](increatenoteintenthandling.md): Deprecated. The handler interface for creating notes.
- [INCreateNoteIntent](increatenoteintent.md): Deprecated. A request to create a new note.
