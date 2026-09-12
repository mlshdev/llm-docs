> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaintentresponse](https://developer.apple.com/documentation/intents/inplaymediaintentresponse)

# INPlayMediaIntentResponse (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

An intents handler’s response to a play media intent.

## Declaration

```swift
class INPlayMediaIntentResponse
```

<a id="overview"></a>

## Overview

Create an instance of this class when you are:

- Confirming your app can play the media.
- Handling the request to play the media.

To send private state data from your Intents app extension to your app, store the data in an [NSUserActivity](../foundation/nsuseractivity.md) object and include the object when creating the [INPlayMediaIntentResponse](inplaymediaintentresponse.md) instance.

## Topics

### Creating a Play Media Intent Response

- [init(code:userActivity:)](inplaymediaintentresponse/init%28code_useractivity_%29.md): Creates a response for a play media intent.

### Providing the Response Code

- [code](inplaymediaintentresponse/code.md): A response code that indicates whether the app can play the media.
- [INPlayMediaIntentResponseCode](inplaymediaintentresponsecode.md): Codes returned by an app or Intents app extension when handling or confirming a play media intent.

### Managing Now-Playing Information

- [nowPlayingInfo](inplaymediaintentresponse/nowplayinginfo.md): The now-playing information, such as title and artwork, for the media.

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

### Playable Media Intents

- [INPlayMediaIntentHandling](inplaymediaintenthandling.md): The interface an object implements to confirm and handle play media intents.
- [INPlayMediaIntent](inplaymediaintent.md): An intent that contains information about media playable from your app.

# INPlayMediaIntentResponse (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

An intents handler’s response to a play media intent.

## Declaration

```objectivec
@interface INPlayMediaIntentResponse : INIntentResponse
```

<a id="overview"></a>

## Overview

Create an instance of this class when you are:

- Confirming your app can play the media.
- Handling the request to play the media.

To send private state data from your Intents app extension to your app, store the data in an [NSUserActivity](../foundation/nsuseractivity.md) object and include the object when creating the [INPlayMediaIntentResponse](inplaymediaintentresponse.md) instance.

## Topics

### Creating a Play Media Intent Response

- [initWithCode:userActivity:](inplaymediaintentresponse/init%28code_useractivity_%29.md): Creates a response for a play media intent.

### Providing the Response Code

- [code](inplaymediaintentresponse/code.md): A response code that indicates whether the app can play the media.
- [INPlayMediaIntentResponseCode](inplaymediaintentresponsecode.md): Codes returned by an app or Intents app extension when handling or confirming a play media intent.

### Managing Now-Playing Information

- [nowPlayingInfo](inplaymediaintentresponse/nowplayinginfo.md): The now-playing information, such as title and artwork, for the media.

## Relationships

### Inherits From

- [INIntentResponse](inintentresponse.md)

## See Also

### Playable Media Intents

- [INPlayMediaIntentHandling](inplaymediaintenthandling.md): The interface an object implements to confirm and handle play media intents.
- [INPlayMediaIntent](inplaymediaintent.md): An intent that contains information about media playable from your app.
