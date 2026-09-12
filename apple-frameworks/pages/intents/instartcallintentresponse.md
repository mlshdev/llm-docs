> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartcallintentresponse](https://developer.apple.com/documentation/intents/instartcallintentresponse)

# INStartCallIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

Your app’s response to a start call intent.

## Declaration

```swift
class INStartCallIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INStartCallIntentResponse](instartcallintentresponse.md) object to specify whether your app is able to initiate an audio or video call. You create instances of this class when confirming and handling an [INStartCallIntent](instartcallintent.md) object. When it’s time to call the user, SiriKit launches your app and delivers the [NSUserActivity](../foundation/nsuseractivity.md) object contained in this object. Use that user activity object to specify any additional information that assists your app in placing the call.

You create an [INStartCallIntentResponse](instartcallintentresponse.md) object in the [confirm(intent:completion:)](instartcallintenthandling/confirm%28intent_completion_%29.md) and [handle(intent:completion:)](instartcallintenthandling/handle%28intent_completion_%29.md) methods of your start call handler object. For more information about implementing your handler object, see [INStartCallIntentHandling](instartcallintenthandling.md).

## Topics

### Initializing the Response Object

- [init(code:userActivity:)](instartcallintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](instartcallintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INStartCallIntentResponseCode](instartcallintentresponsecode.md): Constants that indicate the response state.

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

### Starting a Call

- [INStartCallIntentHandling](instartcallintenthandling.md): An interface that handles requests to start audio and video calls.
- [INStartCallIntent](instartcallintent.md): A request to start an audio or video call with one or more users.
- [INStartCallCallRecordToCallBackUnsupportedReason](instartcallcallrecordtocallbackunsupportedreason.md): A reason why your app can’t use a record to call a person back.

# INStartCallIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 6.0+

Your app’s response to a start call intent.

## Declaration

```objectivec
@interface INStartCallIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Use an [INStartCallIntentResponse](instartcallintentresponse.md) object to specify whether your app is able to initiate an audio or video call. You create instances of this class when confirming and handling an [INStartCallIntent](instartcallintent.md) object. When it’s time to call the user, SiriKit launches your app and delivers the [NSUserActivity](../foundation/nsuseractivity.md) object contained in this object. Use that user activity object to specify any additional information that assists your app in placing the call.

You create an [INStartCallIntentResponse](instartcallintentresponse.md) object in the [confirmStartCall:completion:](instartcallintenthandling/confirm%28intent_completion_%29.md) and [handleStartCall:completion:](instartcallintenthandling/handle%28intent_completion_%29.md) methods of your start call handler object. For more information about implementing your handler object, see [INStartCallIntentHandling](instartcallintenthandling.md).

## Topics

### Initializing the Response Object

- [initWithCode:userActivity:](instartcallintentresponse/init%28code_useractivity_%29.md): Initializes the response object with the specified code and user activity object.

### Getting the Response Code

- [code](instartcallintentresponse/code.md): The code indicating whether you successfully handled the intent.
- [INStartCallIntentResponseCode](instartcallintentresponsecode.md): Constants that indicate the response state.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Starting a Call

- [INStartCallIntentHandling](instartcallintenthandling.md): An interface that handles requests to start audio and video calls.
- [INStartCallIntent](instartcallintent.md): A request to start an audio or video call with one or more users.
- [INStartCallCallRecordToCallBackUnsupportedReason](instartcallcallrecordtocallbackunsupportedreason.md): A reason why your app can’t use a record to call a person back.
