> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaintentresponsecode/ready](https://developer.apple.com/documentation/intents/inplaymediaintentresponsecode/ready)

# INPlayMediaIntentResponseCode.ready (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The intents handler is ready to handle the intent.

## Declaration

```swift
case ready
```

<a id="Discussion"></a>

## Discussion

Respond with this code in your Intents app extension’s [confirm(intent:completion:)](../inplaymediaintenthandling/confirm%28intent_completion_%29.md) method after verifying that your app can play the requested media.

## See Also

### Intents App Extensions

- [INPlayMediaIntentResponseCode.continueInApp](continueinapp.md): The system should launch the app in the foreground to play the media.
- [INPlayMediaIntentResponseCode.handleInApp](handleinapp.md): The system should launch the app in the background to play the media.

# INPlayMediaIntentResponseCodeReady (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The intents handler is ready to handle the intent.

## Declaration

```objectivec
INPlayMediaIntentResponseCodeReady
```

<a id="Discussion"></a>

## Discussion

Respond with this code in your Intents app extension’s [confirmPlayMedia:completion:](../inplaymediaintenthandling/confirm%28intent_completion_%29.md) method after verifying that your app can play the requested media.

## See Also

### Intents App Extensions

- [INPlayMediaIntentResponseCodeContinueInApp](continueinapp.md): The system should launch the app in the foreground to play the media.
- [INPlayMediaIntentResponseCodeHandleInApp](handleinapp.md): The system should launch the app in the background to play the media.
