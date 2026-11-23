> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpassistantcellactiontype/startcall

# CPAssistantCellActionType.startCall (Swift)

**Framework:** CarPlay  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An option to call a person, group, or business.

## Declaration

```swift
case startCall
```

<a id="discussion"></a>

## Discussion

To respond to this action, make sure your app implements an Intents extension capable of handling the [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent) type. When someone chooses this action, Siri prompts the person to specify the person, group, or business to call. Use the information to locate the appropriate contact details and start a voice call.

> **Note**

> This action is available only to communication apps.

For more information about how to implement an Intents extension, see [Creating an Intents App Extension](https://developer.apple.com/documentation/sirikit/creating-an-intents-app-extension).

# CPAssistantCellActionTypeStartCall (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An option to call a person, group, or business.

## Declaration

```objectivec
CPAssistantCellActionTypeStartCall
```

<a id="discussion"></a>

## Discussion

To respond to this action, make sure your app implements an Intents extension capable of handling the [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent) type. When someone chooses this action, Siri prompts the person to specify the person, group, or business to call. Use the information to locate the appropriate contact details and start a voice call.

> **Note**

> This action is available only to communication apps.

For more information about how to implement an Intents extension, see [Creating an Intents App Extension](https://developer.apple.com/documentation/sirikit/creating-an-intents-app-extension).
