> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpassistantcellconfiguration/assistantaction

# assistantAction (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The action that Siri performs when the user selects the assistant cell.

## Declaration

```swift
var assistantAction: CPAssistantCellActionType { get }
```

<a id="discussion"></a>

## Discussion

Specify the value of this property when creating the assistant cell configuration object. Actions require you to support SiriKit intents and support a implement a specific type of CarPlay app. For more information, see [CPAssistantCellActionType](../cpassistantcellactiontype.md).

## See Also

### Getting the configuration attributes

- [position](position.md): The position of the assistant cell in the list template.
- [visibility](visibility.md): The visibility of the assistant cell in the list template.
- [CPAssistantCellActionType](../cpassistantcellactiontype.md): The supported actions of the assistant cell.
- [CPListItem.AssistantCellPosition](../cplistitem/assistantcellposition.md): The supported placement options for the assistant cell.
- [CPListItem.AssistantCellVisibility](../cplistitem/assistantcellvisibility.md): The visibility options for the assistant cell.

# assistantAction (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The action that Siri performs when the user selects the assistant cell.

## Declaration

```objectivec
@property (nonatomic, readonly) CPAssistantCellActionType assistantAction;
```

<a id="discussion"></a>

## Discussion

Specify the value of this property when creating the assistant cell configuration object. Actions require you to support SiriKit intents and support a implement a specific type of CarPlay app. For more information, see [CPAssistantCellActionType](../cpassistantcellactiontype.md).

## See Also

### Getting the configuration attributes

- [position](position.md): The position of the assistant cell in the list template.
- [visibility](visibility.md): The visibility of the assistant cell in the list template.
- [CPAssistantCellActionType](../cpassistantcellactiontype.md): The supported actions of the assistant cell.
- [CPAssistantCellPosition](../cplistitem/assistantcellposition.md): The supported placement options for the assistant cell.
- [CPAssistantCellVisibility](../cplistitem/assistantcellvisibility.md): The visibility options for the assistant cell.
