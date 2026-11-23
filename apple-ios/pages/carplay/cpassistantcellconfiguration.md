> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpassistantcellconfiguration

# CPAssistantCellConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A type that configures a special row in for performing app-related actions using Siri.

## Declaration

```swift
class CPAssistantCellConfiguration
```

<a id="overview"></a>

## Overview

The `CPAssistantCellConfiguration` type tells CarPlay how to display the *assistant cell* in a list interface. The assistant cell is a system-provided row that allows people to play audio or video content or start a call using Siri. If you’re building an audio, video, or communication app, you can add this cell to your list to give people the ability a hands-free way to perform these actions.

> **Important**

> The assistant cell is available only in audio, video, and communication apps. Trying to display it in other app types generates a build-time error.

To add an assistant cell to your app’s interface, create a `CPAssistantCellConfiguration` type and configure it with the type of action to perform and the placement of the cell in your list. When your [CPListTemplate](cplisttemplate.md) object contains a cell configuration, the list displays an extra row with instructions on how to perform the action you specified. A person can then use Siri to complete the action and deliver details back to your app.

CarPlay reports Siri-based interactions to your app’s Intents extension, which you implement using [SiriKit](https://developer.apple.com/documentation/sirikit). To play a media file from your audio or video app, CarPlay expects this extension to implement the [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent) type. To start a call, CarPlay expects the extension to implement the [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent) type. If your app extension doesn’t implement the expected type, CarPlay raises an exception. For more information about how to implement an Intents extension, see [Creating an Intents App Extension](https://developer.apple.com/documentation/sirikit/creating-an-intents-app-extension).

## Topics

### Creating an assistant cell configuration

- [init(position:visibility:assistantAction:)](cpassistantcellconfiguration/init%28position_visibility_assistantaction_%29.md): Creates a configuration object with the specified position, visibility, and action.
- [init(coder:)](cpassistantcellconfiguration/init%28coder_%29.md)

### Getting the configuration attributes

- [assistantAction](cpassistantcellconfiguration/assistantaction.md): The action that Siri performs when the user selects the assistant cell.
- [position](cpassistantcellconfiguration/position.md): The position of the assistant cell in the list template.
- [visibility](cpassistantcellconfiguration/visibility.md): The visibility of the assistant cell in the list template.
- [CPAssistantCellActionType](cpassistantcellactiontype.md): The supported actions of the assistant cell.
- [CPListItem.AssistantCellPosition](cplistitem/assistantcellposition.md): The supported placement options for the assistant cell.
- [CPListItem.AssistantCellVisibility](cplistitem/assistantcellvisibility.md): The visibility options for the assistant cell.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Headers and special cells

- [CPListTemplateDetailsHeader](cplisttemplatedetailsheader.md): A header section that displays rich media content and action buttons above a list of items.

# CPAssistantCellConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A type that configures a special row in for performing app-related actions using Siri.

## Declaration

```objectivec
@interface CPAssistantCellConfiguration : NSObject
```

<a id="overview"></a>

## Overview

The `CPAssistantCellConfiguration` type tells CarPlay how to display the *assistant cell* in a list interface. The assistant cell is a system-provided row that allows people to play audio or video content or start a call using Siri. If you’re building an audio, video, or communication app, you can add this cell to your list to give people the ability a hands-free way to perform these actions.

> **Important**

> The assistant cell is available only in audio, video, and communication apps. Trying to display it in other app types generates a build-time error.

To add an assistant cell to your app’s interface, create a `CPAssistantCellConfiguration` type and configure it with the type of action to perform and the placement of the cell in your list. When your [CPListTemplate](cplisttemplate.md) object contains a cell configuration, the list displays an extra row with instructions on how to perform the action you specified. A person can then use Siri to complete the action and deliver details back to your app.

CarPlay reports Siri-based interactions to your app’s Intents extension, which you implement using [SiriKit](https://developer.apple.com/documentation/sirikit). To play a media file from your audio or video app, CarPlay expects this extension to implement the [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent) type. To start a call, CarPlay expects the extension to implement the [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent) type. If your app extension doesn’t implement the expected type, CarPlay raises an exception. For more information about how to implement an Intents extension, see [Creating an Intents App Extension](https://developer.apple.com/documentation/sirikit/creating-an-intents-app-extension).

## Topics

### Creating an assistant cell configuration

- [initWithPosition:visibility:assistantAction:](cpassistantcellconfiguration/init%28position_visibility_assistantaction_%29.md): Creates a configuration object with the specified position, visibility, and action.

### Getting the configuration attributes

- [assistantAction](cpassistantcellconfiguration/assistantaction.md): The action that Siri performs when the user selects the assistant cell.
- [position](cpassistantcellconfiguration/position.md): The position of the assistant cell in the list template.
- [visibility](cpassistantcellconfiguration/visibility.md): The visibility of the assistant cell in the list template.
- [CPAssistantCellActionType](cpassistantcellactiontype.md): The supported actions of the assistant cell.
- [CPAssistantCellPosition](cplistitem/assistantcellposition.md): The supported placement options for the assistant cell.
- [CPAssistantCellVisibility](cplistitem/assistantcellvisibility.md): The visibility options for the assistant cell.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Headers and special cells

- [CPListTemplateDetailsHeader](cplisttemplatedetailsheader.md): A header section that displays rich media content and action buttons above a list of items.
