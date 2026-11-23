> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpassistantcellconfiguration/init(position:visibility:assistantaction:)

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

- `position`: The placement option within your list interface. For a list of possible values, see [CPListItem.AssistantCellPosition](../cplistitem/assistantcellposition.md).
- `visibility`: The visibility option for the assistant cell. You can display the cell at all times or only in specific situations. For a list of possible values, see [CPListItem.AssistantCellVisibility](../cplistitem/assistantcellvisibility.md).
- `assistantAction`: The type of action you want Siri to perform. CarPlay uses this value to determine which SiriKit intent to send to your app’s Intents extension. For a list of possible values, see [CPAssistantCellActionType](../cpassistantcellactiontype.md).

<a id="return-value"></a>

## Return Value

A configuration object with the specified information.

<a id="discussion"></a>

## Discussion

Pass the object you receive from this method to your [CPListTemplate](../cplisttemplate.md) type, either at initialization time or by assigning it to the type’s [assistantCellConfiguration](../cplisttemplate/assistantcellconfiguration.md) property.

## See Also

### Creating an assistant cell configuration

- [init(coder:)](init%28coder_%29.md)

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

- `position`: The placement option within your list interface. For a list of possible values, see [CPAssistantCellPosition](../cplistitem/assistantcellposition.md).
- `visibility`: The visibility option for the assistant cell. You can display the cell at all times or only in specific situations. For a list of possible values, see [CPAssistantCellVisibility](../cplistitem/assistantcellvisibility.md).
- `assistantAction`: The type of action you want Siri to perform. CarPlay uses this value to determine which SiriKit intent to send to your app’s Intents extension. For a list of possible values, see [CPAssistantCellActionType](../cpassistantcellactiontype.md).

<a id="return-value"></a>

## Return Value

A configuration object with the specified information.

<a id="discussion"></a>

## Discussion

Pass the object you receive from this method to your [CPListTemplate](../cplisttemplate.md) type, either at initialization time or by assigning it to the type’s [assistantCellConfiguration](../cplisttemplate/assistantcellconfiguration.md) property.
