> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaintentresponsecode/continueinapp](https://developer.apple.com/documentation/intents/inplaymediaintentresponsecode/continueinapp)

# INPlayMediaIntentResponseCode.continueInApp (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The system should launch the app in the foreground to play the media.

## Declaration

```swift
case continueInApp
```

## Mentioned In

- [Improving Siri Media Interactions and App Selection](../../sirikit/improving-siri-media-interactions-and-app-selection.md)

<a id="Discussion"></a>

## Discussion

Because the lifespan of an app extension is short, media playback should happen in your app, not in the Intents app extension. To play the media with your app in the foreground, return [INPlayMediaIntentResponseCode.continueInApp](continueinapp.md) as the response [code](../inplaymediaintentresponse/code.md).

> **Note**

>  Your app should be in the foreground when playing a video requested with a media intent shortcut.

## See Also

### Intents App Extensions

- [INPlayMediaIntentResponseCode.ready](ready.md): The intents handler is ready to handle the intent.
- [INPlayMediaIntentResponseCode.handleInApp](handleinapp.md): The system should launch the app in the background to play the media.

# INPlayMediaIntentResponseCodeContinueInApp (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The system should launch the app in the foreground to play the media.

## Declaration

```objectivec
INPlayMediaIntentResponseCodeContinueInApp
```

## Mentioned In

- [Improving Siri Media Interactions and App Selection](../../sirikit/improving-siri-media-interactions-and-app-selection.md)

<a id="Discussion"></a>

## Discussion

Because the lifespan of an app extension is short, media playback should happen in your app, not in the Intents app extension. To play the media with your app in the foreground, return [INPlayMediaIntentResponseCodeContinueInApp](continueinapp.md) as the response [code](../inplaymediaintentresponse/code.md).

> **Note**

>  Your app should be in the foreground when playing a video requested with a media intent shortcut.

## See Also

### Intents App Extensions

- [INPlayMediaIntentResponseCodeReady](ready.md): The intents handler is ready to handle the intent.
- [INPlayMediaIntentResponseCodeHandleInApp](handleinapp.md): The system should launch the app in the background to play the media.
