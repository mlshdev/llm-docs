> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplisttemplate/assistantcellconfiguration](https://developer.apple.com/documentation/carplay/cplisttemplate/assistantcellconfiguration)

# assistantCellConfiguration (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The object that provides the configuration attributes for the assistant cell.

## Declaration

```swift
var assistantCellConfiguration: CPAssistantCellConfiguration? { get set }
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  The Siri assistant cell is only available in audio and communication apps.

Your app doesn’t receive a callback when the user selects the assistant cell. Instead, you configure an Intents Extension to handle the type of intent you specify in the cell’s configuration; audio apps must support [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent) and communication apps must support [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent).

If you update this property’s value, CarPlay automatically refreshes your app’s interface to reflect the changes.

## See Also

### Managing the Assistant Cell

- [CPAssistantCellConfiguration](../cpassistantcellconfiguration.md): An object that provides the configuration attributes for the assistant cell.

# assistantCellConfiguration (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The object that provides the configuration attributes for the assistant cell.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) CPAssistantCellConfiguration * assistantCellConfiguration;
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  The Siri assistant cell is only available in audio and communication apps.

Your app doesn’t receive a callback when the user selects the assistant cell. Instead, you configure an Intents Extension to handle the type of intent you specify in the cell’s configuration; audio apps must support [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent) and communication apps must support [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent).

If you update this property’s value, CarPlay automatically refreshes your app’s interface to reflect the changes.

## See Also

### Managing the Assistant Cell

- [CPAssistantCellConfiguration](../cpassistantcellconfiguration.md): An object that provides the configuration attributes for the assistant cell.
