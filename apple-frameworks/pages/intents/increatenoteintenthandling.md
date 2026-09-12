> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/increatenoteintenthandling](https://developer.apple.com/documentation/intents/increatenoteintenthandling)

# INCreateNoteIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The handler interface for creating notes.

> INCreateNoteIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```swift
protocol INCreateNoteIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INCreateNoteIntentHandling](increatenoteintenthandling.md) protocol to resolve, confirm, and handle requests to create notes. Adopt this protocol in an object of your Intents extension that is capable of forwarding the note content to your app or note management service.

Siri delivers an [INCreateNoteIntent](increatenoteintent.md) object to your handler when the user asks to create a note using your app. The provided intent object contains the information to put into the note. Use the methods of this protocol to resolve the parameters and create the note.

## Topics

### Resolving the Intent Parameters

- [resolveTitle(for:with:)](increatenoteintenthandling/resolvetitle%28for_with_%29.md): Deprecated. Resolves the title of the note.
- [resolveContent(for:with:)](increatenoteintenthandling/resolvecontent%28for_with_%29.md): Deprecated. Resolves the main content of the note.
- [resolveGroupName(for:with:)](increatenoteintenthandling/resolvegroupname%28for_with_%29.md): Deprecated. Resolves the intended group of the note.

### Confirming the Response

- [confirm(intent:completion:)](increatenoteintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can create the note.

### Handling the Intent

- [handle(intent:completion:)](increatenoteintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles the creation of a note.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INNotebookDomainHandling](innotebookdomainhandling.md)

## See Also

### Note Creation

- [INCreateNoteIntent](increatenoteintent.md): Deprecated. A request to create a new note.
- [INCreateNoteIntentResponse](increatenoteintentresponse.md): Deprecated. Your app’s response to a request to create a note.

# INCreateNoteIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

The handler interface for creating notes.

> INCreateNoteIntentHandling is deprecated. Please adopt the Notes or Reminders AppSchema domain instead.

## Declaration

```objectivec
@protocol INCreateNoteIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INCreateNoteIntentHandling](increatenoteintenthandling.md) protocol to resolve, confirm, and handle requests to create notes. Adopt this protocol in an object of your Intents extension that is capable of forwarding the note content to your app or note management service.

Siri delivers an [INCreateNoteIntent](increatenoteintent.md) object to your handler when the user asks to create a note using your app. The provided intent object contains the information to put into the note. Use the methods of this protocol to resolve the parameters and create the note.

## Topics

### Resolving the Intent Parameters

- [resolveTitleForCreateNote:withCompletion:](increatenoteintenthandling/resolvetitle%28for_with_%29.md): Deprecated. Resolves the title of the note.
- [resolveContentForCreateNote:withCompletion:](increatenoteintenthandling/resolvecontent%28for_with_%29.md): Deprecated. Resolves the main content of the note.
- [resolveGroupNameForCreateNote:withCompletion:](increatenoteintenthandling/resolvegroupname%28for_with_%29.md): Deprecated. Resolves the intended group of the note.

### Confirming the Response

- [confirmCreateNote:completion:](increatenoteintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can create the note.

### Handling the Intent

- [handleCreateNote:completion:](increatenoteintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles the creation of a note.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INNotebookDomainHandling](innotebookdomainhandling.md)

## See Also

### Note Creation

- [INCreateNoteIntent](increatenoteintent.md): Deprecated. A request to create a new note.
- [INCreateNoteIntentResponse](increatenoteintentresponse.md): Deprecated. Your app’s response to a request to create a note.
