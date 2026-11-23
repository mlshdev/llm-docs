> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpassistantcellactiontype/playmedia

# CPAssistantCellActionType.playMedia (Swift)

**Framework:** CarPlay  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An option to to play audio or video content.

## Declaration

```swift
case playMedia
```

<a id="discussion"></a>

## Discussion

To respond to this action, make sure your app implements an Intents extension capable of handling the [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent) type. When someone chooses this action, Siri prompts the person to specify the media item to play and passes that information to your app extension. Use the information to locate the specified media item, start playback, and display the [CPNowPlayingTemplate](../cpnowplayingtemplate.md).

> **Note**

> This action is available only to audio or video apps.

For more information about how to implement an Intents extension, see [Creating an Intents App Extension](https://developer.apple.com/documentation/sirikit/creating-an-intents-app-extension).

# CPAssistantCellActionTypePlayMedia (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An option to to play audio or video content.

## Declaration

```objectivec
CPAssistantCellActionTypePlayMedia
```

<a id="discussion"></a>

## Discussion

To respond to this action, make sure your app implements an Intents extension capable of handling the [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent) type. When someone chooses this action, Siri prompts the person to specify the media item to play and passes that information to your app extension. Use the information to locate the specified media item, start playback, and display the [CPNowPlayingTemplate](../cpnowplayingtemplate.md).

> **Note**

> This action is available only to audio or video apps.

For more information about how to implement an Intents extension, see [Creating an Intents App Extension](https://developer.apple.com/documentation/sirikit/creating-an-intents-app-extension).
