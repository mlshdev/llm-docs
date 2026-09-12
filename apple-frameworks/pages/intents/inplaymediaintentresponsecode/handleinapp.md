> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaintentresponsecode/handleinapp](https://developer.apple.com/documentation/intents/inplaymediaintentresponsecode/handleinapp)

# INPlayMediaIntentResponseCode.handleInApp (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The system should launch the app in the background to play the media.

## Declaration

```swift
case handleInApp
```

## Mentioned In

- [Improving Siri Media Interactions and App Selection](../../sirikit/improving-siri-media-interactions-and-app-selection.md)

<a id="Discussion"></a>

## Discussion

Because the lifespan of an app extension is short, media playback should happen in your app, not in the Intents app extension. To handle media playback in your app while in the background, return [INPlayMediaIntentResponseCode.handleInApp](handleinapp.md) as the response [code](../inplaymediaintentresponse/code.md).

## See Also

### Intents App Extensions

- [INPlayMediaIntentResponseCode.ready](ready.md): The intents handler is ready to handle the intent.
- [INPlayMediaIntentResponseCode.continueInApp](continueinapp.md): The system should launch the app in the foreground to play the media.

# INPlayMediaIntentResponseCodeHandleInApp (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The system should launch the app in the background to play the media.

## Declaration

```objectivec
INPlayMediaIntentResponseCodeHandleInApp
```

## Mentioned In

- [Improving Siri Media Interactions and App Selection](../../sirikit/improving-siri-media-interactions-and-app-selection.md)

<a id="Discussion"></a>

## Discussion

Because the lifespan of an app extension is short, media playback should happen in your app, not in the Intents app extension. To handle media playback in your app while in the background, return [INPlayMediaIntentResponseCodeHandleInApp](handleinapp.md) as the response [code](../inplaymediaintentresponse/code.md).

## See Also

### Intents App Extensions

- [INPlayMediaIntentResponseCodeReady](ready.md): The intents handler is ready to handle the intent.
- [INPlayMediaIntentResponseCodeContinueInApp](continueinapp.md): The system should launch the app in the foreground to play the media.
