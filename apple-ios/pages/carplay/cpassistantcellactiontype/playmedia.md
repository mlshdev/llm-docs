> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpassistantcellactiontype/playmedia](https://developer.apple.com/documentation/carplay/cpassistantcellactiontype/playmedia)

# CPAssistantCellActionType.playMedia (Swift)

**Framework:** CarPlay  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Provides an action that uses Siri to prompt the user for media playback.

## Declaration

```swift
case playMedia
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  This action is only available in audio apps that include an Intents Extension capable of handling [INSearchCallHistoryIntent](https://developer.apple.com/documentation/intents/insearchcallhistoryintent). For more information, see [Creating an Intents App Extension](https://developer.apple.com/documentation/sirikit/creating-an-intents-app-extension).

The system provides the user’s response to your app’s Intents Extension. Your app must respond by searching for the requested media and, if it’s available, start its playback and display a [CPNowPlayingTemplate](../cpnowplayingtemplate.md).

## See Also

### Siri Actions

- [CPAssistantCellActionType.startCall](startcall.md): Provides an action that uses Siri to prompt the user for a person, group, or business to call.

# CPAssistantCellActionTypePlayMedia (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Provides an action that uses Siri to prompt the user for media playback.

## Declaration

```objectivec
CPAssistantCellActionTypePlayMedia
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  This action is only available in audio apps that include an Intents Extension capable of handling [INSearchCallHistoryIntent](https://developer.apple.com/documentation/intents/insearchcallhistoryintent). For more information, see [Creating an Intents App Extension](https://developer.apple.com/documentation/sirikit/creating-an-intents-app-extension).

The system provides the user’s response to your app’s Intents Extension. Your app must respond by searching for the requested media and, if it’s available, start its playback and display a [CPNowPlayingTemplate](../cpnowplayingtemplate.md).

## See Also

### Siri Actions

- [CPAssistantCellActionTypeStartCall](startcall.md): Provides an action that uses Siri to prompt the user for a person, group, or business to call.
