> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpassistantcellactiontype/startcall](https://developer.apple.com/documentation/carplay/cpassistantcellactiontype/startcall)

# CPAssistantCellActionType.startCall (Swift)

**Framework:** CarPlay  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Provides an action that uses Siri to prompt the user for a person, group, or business to call.

## Declaration

```swift
case startCall
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  This action is only available in communication apps that include an Intents Extension capable of handling [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent). For more information, see [Creating an Intents App Extension](https://developer.apple.com/documentation/sirikit/creating-an-intents-app-extension).

The system provides the user’s response to your app’s Intents Extension. Your app must respond by identifying the requested person, group, or business and start a voice call with them.

## See Also

### Siri Actions

- [CPAssistantCellActionType.playMedia](playmedia.md): Provides an action that uses Siri to prompt the user for media playback.

# CPAssistantCellActionTypeStartCall (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Provides an action that uses Siri to prompt the user for a person, group, or business to call.

## Declaration

```objectivec
CPAssistantCellActionTypeStartCall
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  This action is only available in communication apps that include an Intents Extension capable of handling [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent). For more information, see [Creating an Intents App Extension](https://developer.apple.com/documentation/sirikit/creating-an-intents-app-extension).

The system provides the user’s response to your app’s Intents Extension. Your app must respond by identifying the requested person, group, or business and start a voice call with them.

## See Also

### Siri Actions

- [CPAssistantCellActionTypePlayMedia](playmedia.md): Provides an action that uses Siri to prompt the user for media playback.
