> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cplistitem/assistantcellposition

# CPListItem.AssistantCellPosition (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The supported placement options for the assistant cell.

## Declaration

```swift
enum AssistantCellPosition
```

<a id="overview"></a>

## Overview

The assistant cell supports a specific set of placement options, and you use these constants to indicate whether to place the cell before or after your app’s content.

## Topics

### Enumeration Cases

- [CPListItem.AssistantCellPosition.bottom](assistantcellposition/bottom.md): An option to place the assistant cell above all visible cells in your list template.
- [CPListItem.AssistantCellPosition.top](assistantcellposition/top.md): An option to place the assistant cell below all visible cells in your list template.

### Initializers

- [init(rawValue:)](assistantcellposition/init%28rawvalue_%29.md)

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
- [CPListItem.AssistantCellVisibility](assistantcellvisibility.md): The visibility options for the assistant cell.

# CPAssistantCellPosition (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The supported placement options for the assistant cell.

## Declaration

```objectivec
enum CPAssistantCellPosition : NSInteger;
```

<a id="overview"></a>

## Overview

The assistant cell supports a specific set of placement options, and you use these constants to indicate whether to place the cell before or after your app’s content.

## Topics

### Enumeration Cases

- [CPAssistantCellPositionBottom](assistantcellposition/bottom.md): An option to place the assistant cell above all visible cells in your list template.
- [CPAssistantCellPositionTop](assistantcellposition/top.md): An option to place the assistant cell below all visible cells in your list template.

## See Also

### Getting the configuration attributes

- [assistantAction](../cpassistantcellconfiguration/assistantaction.md): The action that Siri performs when the user selects the assistant cell.
- [position](../cpassistantcellconfiguration/position.md): The position of the assistant cell in the list template.
- [visibility](../cpassistantcellconfiguration/visibility.md): The visibility of the assistant cell in the list template.
- [CPAssistantCellActionType](../cpassistantcellactiontype.md): The supported actions of the assistant cell.
- [CPAssistantCellVisibility](assistantcellvisibility.md): The visibility options for the assistant cell.
