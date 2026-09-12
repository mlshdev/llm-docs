> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inupdatemediaaffinityintenthandling](https://developer.apple.com/documentation/intents/inupdatemediaaffinityintenthandling)

# INUpdateMediaAffinityIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The interface that handles requests to update the user’s preference for a media item.

## Declaration

```swift
protocol INUpdateMediaAffinityIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Use the methods of the [INUpdateMediaAffinityIntentHandling](inupdatemediaaffinityintenthandling.md) protocol to resolve, confirm, and handle requests that indicate the user’s preference for a media item. Adopt this protocol in an object of your Intents extension capable of providing feedback for media.

Siri delivers an [INUpdateMediaAffinityIntent](inupdatemediaaffinityintent.md) object to your handler when the user asks to modify their preference for a media item using your app. Use the methods of this protocol to resolve the parameters and update the user’s preference for the media.

## Topics

### Resolving Details of the Intent

- [resolveAffinityType(for:with:)](inupdatemediaaffinityintenthandling/resolveaffinitytype%28for_with_%29.md): Resolves the affinity type to which the media item is updated.
- [resolveMediaItems(for:with:)](inupdatemediaaffinityintenthandling/resolvemediaitems%28for_with_%29.md): Resolves the media items for which the user’s preferences are updated.

### Confirming the Response

- [confirm(intent:completion:)](inupdatemediaaffinityintenthandling/confirm%28intent_completion_%29.md): Confirms the details of the update media affinity request.

### Handling the Intent

- [handle(intent:completion:)](inupdatemediaaffinityintenthandling/handle%28intent_completion_%29.md): Handles the media update affinity request.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Update Media Affinity

- [INUpdateMediaAffinityIntent](inupdatemediaaffinityintent.md): A request to update the user’s affinity for a media item.
- [INUpdateMediaAffinityIntentResponse](inupdatemediaaffinityintentresponse.md): An intents handler’s response to an update media affinity intent.

# INUpdateMediaAffinityIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

The interface that handles requests to update the user’s preference for a media item.

## Declaration

```objectivec
@protocol INUpdateMediaAffinityIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Use the methods of the [INUpdateMediaAffinityIntentHandling](inupdatemediaaffinityintenthandling.md) protocol to resolve, confirm, and handle requests that indicate the user’s preference for a media item. Adopt this protocol in an object of your Intents extension capable of providing feedback for media.

Siri delivers an [INUpdateMediaAffinityIntent](inupdatemediaaffinityintent.md) object to your handler when the user asks to modify their preference for a media item using your app. Use the methods of this protocol to resolve the parameters and update the user’s preference for the media.

## Topics

### Resolving Details of the Intent

- [resolveAffinityTypeForUpdateMediaAffinity:withCompletion:](inupdatemediaaffinityintenthandling/resolveaffinitytype%28for_with_%29.md): Resolves the affinity type to which the media item is updated.
- [resolveMediaItemsForUpdateMediaAffinity:withCompletion:](inupdatemediaaffinityintenthandling/resolvemediaitems%28for_with_%29.md): Resolves the media items for which the user’s preferences are updated.

### Confirming the Response

- [confirmUpdateMediaAffinity:completion:](inupdatemediaaffinityintenthandling/confirm%28intent_completion_%29.md): Confirms the details of the update media affinity request.

### Handling the Intent

- [handleUpdateMediaAffinity:completion:](inupdatemediaaffinityintenthandling/handle%28intent_completion_%29.md): Handles the media update affinity request.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Update Media Affinity

- [INUpdateMediaAffinityIntent](inupdatemediaaffinityintent.md): A request to update the user’s affinity for a media item.
- [INUpdateMediaAffinityIntentResponse](inupdatemediaaffinityintentresponse.md): An intents handler’s response to an update media affinity intent.
