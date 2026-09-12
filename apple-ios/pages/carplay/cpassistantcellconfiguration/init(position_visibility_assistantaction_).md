> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpassistantcellconfiguration/init(position:visibility:assistantaction:)](https://developer.apple.com/documentation/carplay/cpassistantcellconfiguration/init(position:visibility:assistantaction:))

# init(position:visibility:assistantAction:) (Swift)

**Framework:** CarPlay  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates a configuration object with the specified position, visibility, and action.

## Declaration

```swift
init(position: CPListItem.AssistantCellPosition, visibility: CPListItem.AssistantCellVisibility, assistantAction: CPAssistantCellActionType)
```

## Parameters

- `position`: The position of the assistant cell in the list template. For possible values, see [CPListItem.AssistantCellPosition](../cplistitem/assistantcellposition.md).
- `visibility`: The visibility of the assistant cell. For possible values, see [CPListItem.AssistantCellVisibility](../cplistitem/assistantcellvisibility.md).
- `assistantAction`: The action that Siri performs when the user selects the assistant cell. For possible values, see [CPAssistantCellActionType](../cpassistantcellactiontype.md).

<a id="Discussion"></a>

## Discussion

Your app doesn’t receive a callback when the user selects the assistant cell. Instead, you configure an Intents Extension to handle the type of intent you specify in `assistantAction`; audio apps must support [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent) and communication apps must support [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent). The assistant cell is unavailable in all other app categories.

# initWithPosition:visibility:assistantAction: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Creates a configuration object with the specified position, visibility, and action.

## Declaration

```objectivec
- (instancetype) initWithPosition:(CPAssistantCellPosition) position visibility:(CPAssistantCellVisibility) visibility assistantAction:(CPAssistantCellActionType) assistantAction;
```

## Parameters

- `position`: The position of the assistant cell in the list template. For possible values, see [CPAssistantCellPosition](../cplistitem/assistantcellposition.md).
- `visibility`: The visibility of the assistant cell. For possible values, see [CPAssistantCellVisibility](../cplistitem/assistantcellvisibility.md).
- `assistantAction`: The action that Siri performs when the user selects the assistant cell. For possible values, see [CPAssistantCellActionType](../cpassistantcellactiontype.md).

<a id="Discussion"></a>

## Discussion

Your app doesn’t receive a callback when the user selects the assistant cell. Instead, you configure an Intents Extension to handle the type of intent you specify in `assistantAction`; audio apps must support [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent) and communication apps must support [INStartCallIntent](https://developer.apple.com/documentation/intents/instartcallintent). The assistant cell is unavailable in all other app categories.
