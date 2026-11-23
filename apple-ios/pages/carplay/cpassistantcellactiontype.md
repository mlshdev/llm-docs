> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpassistantcellactiontype

# CPAssistantCellActionType (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The supported actions of the assistant cell.

## Declaration

```swift
enum CPAssistantCellActionType
```

<a id="overview"></a>

## Overview

The assistant cell supports a specific set of actions, and you use these constants to specify an action when configuring the cell. These actions require you to support SiriKit intents and support only audio, video, or communication apps.

## Topics

### Enumeration Cases

- [CPAssistantCellActionType.playMedia](cpassistantcellactiontype/playmedia.md): An option to to play audio or video content.
- [CPAssistantCellActionType.startCall](cpassistantcellactiontype/startcall.md): An option to call a person, group, or business.

### Initializers

- [init(rawValue:)](cpassistantcellactiontype/init%28rawvalue_%29.md)

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

- [assistantAction](cpassistantcellconfiguration/assistantaction.md): The action that Siri performs when the user selects the assistant cell.
- [position](cpassistantcellconfiguration/position.md): The position of the assistant cell in the list template.
- [visibility](cpassistantcellconfiguration/visibility.md): The visibility of the assistant cell in the list template.
- [CPListItem.AssistantCellPosition](cplistitem/assistantcellposition.md): The supported placement options for the assistant cell.
- [CPListItem.AssistantCellVisibility](cplistitem/assistantcellvisibility.md): The visibility options for the assistant cell.

# CPAssistantCellActionType (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The supported actions of the assistant cell.

## Declaration

```objectivec
enum CPAssistantCellActionType : NSInteger;
```

<a id="overview"></a>

## Overview

The assistant cell supports a specific set of actions, and you use these constants to specify an action when configuring the cell. These actions require you to support SiriKit intents and support only audio, video, or communication apps.

## Topics

### Enumeration Cases

- [CPAssistantCellActionTypePlayMedia](cpassistantcellactiontype/playmedia.md): An option to to play audio or video content.
- [CPAssistantCellActionTypeStartCall](cpassistantcellactiontype/startcall.md): An option to call a person, group, or business.

## See Also

### Getting the configuration attributes

- [assistantAction](cpassistantcellconfiguration/assistantaction.md): The action that Siri performs when the user selects the assistant cell.
- [position](cpassistantcellconfiguration/position.md): The position of the assistant cell in the list template.
- [visibility](cpassistantcellconfiguration/visibility.md): The visibility of the assistant cell in the list template.
- [CPAssistantCellPosition](cplistitem/assistantcellposition.md): The supported placement options for the assistant cell.
- [CPAssistantCellVisibility](cplistitem/assistantcellvisibility.md): The visibility options for the assistant cell.
