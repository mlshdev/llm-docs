> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inaddmediaintenthandling](https://developer.apple.com/documentation/intents/inaddmediaintenthandling)

# INAddMediaIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The handler interface that adds media.

## Declaration

```swift
protocol INAddMediaIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INAddMediaIntentHandling](inaddmediaintenthandling.md) protocol to resolve, confirm, and handle requests to add media. Adopt this protocol in an object of your Intents extension that’s capable of adding media.

Siri delivers an [INAddMediaIntent](inaddmediaintent.md) object to your handler when the user asks to add media using your app. Use the methods of this protocol to resolve the parameters and add the media.

## Topics

### Resolving Details of the Intent

- [resolveMediaDestination(for:with:)](inaddmediaintenthandling/resolvemediadestination%28for_with_%29.md): Resolves the destination for the added media.
- [resolveMediaItems(for:with:)](inaddmediaintenthandling/resolvemediaitems%28for_with_%29.md): Resolves the media items to add.

### Confirming the Response

- [confirm(intent:completion:)](inaddmediaintenthandling/confirm%28intent_completion_%29.md): Confirms the details of the media addition request.

### Handling the Intent

- [handle(intent:completion:)](inaddmediaintenthandling/handle%28intent_completion_%29.md): Handles the media addition request.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Add Media

- [INAddMediaIntent](inaddmediaintent.md): A request to add a media item.
- [INAddMediaIntentResponse](inaddmediaintentresponse.md): An intents handler’s response to an add media intent.

# INAddMediaIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The handler interface that adds media.

## Declaration

```objectivec
@protocol INAddMediaIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INAddMediaIntentHandling](inaddmediaintenthandling.md) protocol to resolve, confirm, and handle requests to add media. Adopt this protocol in an object of your Intents extension that’s capable of adding media.

Siri delivers an [INAddMediaIntent](inaddmediaintent.md) object to your handler when the user asks to add media using your app. Use the methods of this protocol to resolve the parameters and add the media.

## Topics

### Resolving Details of the Intent

- [resolveMediaDestinationForAddMedia:withCompletion:](inaddmediaintenthandling/resolvemediadestination%28for_with_%29.md): Resolves the destination for the added media.
- [resolveMediaItemsForAddMedia:withCompletion:](inaddmediaintenthandling/resolvemediaitems%28for_with_%29.md): Resolves the media items to add.

### Confirming the Response

- [confirmAddMedia:completion:](inaddmediaintenthandling/confirm%28intent_completion_%29.md): Confirms the details of the media addition request.

### Handling the Intent

- [handleAddMedia:completion:](inaddmediaintenthandling/handle%28intent_completion_%29.md): Handles the media addition request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Add Media

- [INAddMediaIntent](inaddmediaintent.md): A request to add a media item.
- [INAddMediaIntentResponse](inaddmediaintentresponse.md): An intents handler’s response to an add media intent.
