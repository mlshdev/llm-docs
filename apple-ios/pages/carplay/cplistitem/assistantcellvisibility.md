> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/assistantcellvisibility

# CPListItem.AssistantCellVisibility (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The visibility options for the assistant cell.

## Declaration

```swift
enum AssistantCellVisibility
```

<a id="overview"></a>

## Overview

Specify when you want the assistant cell to be visible from your list interface. You can show or hide the cell at all times, or enable it only at relevant moments.

## Topics

### Enumeration Cases

- [CPListItem.AssistantCellVisibility.always](assistantcellvisibility/always.md): An option to always show the assistant cell.
- [CPListItem.AssistantCellVisibility.off](assistantcellvisibility/off.md): An option to hide the assistant cell.
- [CPListItem.AssistantCellVisibility.whileLimitedUIActive](assistantcellvisibility/whilelimiteduiactive.md): An option to show the assistant cell only when Limited UI mode is active.

### Initializers

- [init(rawValue:)](assistantcellvisibility/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the configuration attributes

- [assistantAction](../cpassistantcellconfiguration/assistantaction.md): The action that Siri performs when the user selects the assistant cell.
- [position](../cpassistantcellconfiguration/position.md): The position of the assistant cell in the list template.
- [visibility](../cpassistantcellconfiguration/visibility.md): The visibility of the assistant cell in the list template.
- [CPAssistantCellActionType](../cpassistantcellactiontype.md): The supported actions of the assistant cell.
- [CPListItem.AssistantCellPosition](assistantcellposition.md): The supported placement options for the assistant cell.

# CPAssistantCellVisibility (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The visibility options for the assistant cell.

## Declaration

```objectivec
enum CPAssistantCellVisibility : NSInteger;
```

<a id="overview"></a>

## Overview

Specify when you want the assistant cell to be visible from your list interface. You can show or hide the cell at all times, or enable it only at relevant moments.

## Topics

### Enumeration Cases

- [CPAssistantCellVisibilityAlways](assistantcellvisibility/always.md): An option to always show the assistant cell.
- [CPAssistantCellVisibilityOff](assistantcellvisibility/off.md): An option to hide the assistant cell.
- [CPAssistantCellVisibilityWhileLimitedUIActive](assistantcellvisibility/whilelimiteduiactive.md): An option to show the assistant cell only when Limited UI mode is active.

## See Also

### Getting the configuration attributes

- [assistantAction](../cpassistantcellconfiguration/assistantaction.md): The action that Siri performs when the user selects the assistant cell.
- [position](../cpassistantcellconfiguration/position.md): The position of the assistant cell in the list template.
- [visibility](../cpassistantcellconfiguration/visibility.md): The visibility of the assistant cell in the list template.
- [CPAssistantCellActionType](../cpassistantcellactiontype.md): The supported actions of the assistant cell.
- [CPAssistantCellPosition](assistantcellposition.md): The supported placement options for the assistant cell.
