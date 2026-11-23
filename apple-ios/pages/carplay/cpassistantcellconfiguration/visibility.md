> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpassistantcellconfiguration/visibility

# visibility (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The visibility of the assistant cell in the list template.

## Declaration

```swift
var visibility: CPListItem.AssistantCellVisibility { get }
```

<a id="discussion"></a>

## Discussion

Specify the value of this property when creating the assistant cell configuration object.

## See Also

### Getting the configuration attributes

- [assistantAction](assistantaction.md): The action that Siri performs when the user selects the assistant cell.
- [position](position.md): The position of the assistant cell in the list template.
- [CPAssistantCellActionType](../cpassistantcellactiontype.md): The supported actions of the assistant cell.
- [CPListItem.AssistantCellPosition](../cplistitem/assistantcellposition.md): The supported placement options for the assistant cell.
- [CPListItem.AssistantCellVisibility](../cplistitem/assistantcellvisibility.md): The visibility options for the assistant cell.

# visibility (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The visibility of the assistant cell in the list template.

## Declaration

```objectivec
@property (nonatomic, readonly) CPAssistantCellVisibility visibility;
```

<a id="discussion"></a>

## Discussion

Specify the value of this property when creating the assistant cell configuration object.

## See Also

### Getting the configuration attributes

- [assistantAction](assistantaction.md): The action that Siri performs when the user selects the assistant cell.
- [position](position.md): The position of the assistant cell in the list template.
- [CPAssistantCellActionType](../cpassistantcellactiontype.md): The supported actions of the assistant cell.
- [CPAssistantCellPosition](../cplistitem/assistantcellposition.md): The supported placement options for the assistant cell.
- [CPAssistantCellVisibility](../cplistitem/assistantcellvisibility.md): The visibility options for the assistant cell.
