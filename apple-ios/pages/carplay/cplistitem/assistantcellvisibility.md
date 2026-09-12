> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cplistitem/assistantcellvisibility](https://developer.apple.com/documentation/carplay/cplistitem/assistantcellvisibility)

# CPListItem.AssistantCellVisibility (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Constants to specify the visibility of the assistant cell.

## Declaration

```swift
enum AssistantCellVisibility
```

## Topics

### Controlling the Assistant Cell Visibility

- [CPListItem.AssistantCellVisibility.off](assistantcellvisibility/off.md): The assistant cell isn’t visible.
- [CPListItem.AssistantCellVisibility.always](assistantcellvisibility/always.md): The assistant cell is always visible.
- [CPListItem.AssistantCellVisibility.whileLimitedUIActive](assistantcellvisibility/whilelimiteduiactive.md): The assistant cell is visible only while Limited UI mode is active.

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

### Managing the Assistant Cell

- [CPListItem.AssistantCellPosition](assistantcellposition.md): Constants to specify the position of the assistant cell.

# CPAssistantCellVisibility (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Constants to specify the visibility of the assistant cell.

## Declaration

```objectivec
enum CPAssistantCellVisibility : NSInteger;
```

## Topics

### Controlling the Assistant Cell Visibility

- [CPAssistantCellVisibilityOff](assistantcellvisibility/off.md): The assistant cell isn’t visible.
- [CPAssistantCellVisibilityAlways](assistantcellvisibility/always.md): The assistant cell is always visible.
- [CPAssistantCellVisibilityWhileLimitedUIActive](assistantcellvisibility/whilelimiteduiactive.md): The assistant cell is visible only while Limited UI mode is active.

## See Also

### Managing the Assistant Cell

- [CPAssistantCellPosition](assistantcellposition.md): Constants to specify the position of the assistant cell.
