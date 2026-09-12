> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inplaymediaintentresponsecode/success](https://developer.apple.com/documentation/intents/inplaymediaintentresponsecode/success)

# INPlayMediaIntentResponseCode.success (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The app is playing the media.

## Declaration

```swift
case success
```

<a id="Discussion"></a>

## Discussion

Respond with this code after your app starts playing the media content in the [application(\_:handle:completionHandler:)](../../uikit/uiapplicationdelegate/application%28__handle_completionhandler_%29.md) method.

## See Also

### App

- [INPlayMediaIntentResponseCode.inProgress](inprogress.md): The app is preparing to play the media content.

# INPlayMediaIntentResponseCodeSuccess (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 5.0+

The app is playing the media.

## Declaration

```objectivec
INPlayMediaIntentResponseCodeSuccess
```

<a id="Discussion"></a>

## Discussion

Respond with this code after your app starts playing the media content in the [application:handleIntent:completionHandler:](../../uikit/uiapplicationdelegate/application%28__handle_completionhandler_%29.md) method.

## See Also

### App

- [INPlayMediaIntentResponseCodeInProgress](inprogress.md): The app is preparing to play the media content.
