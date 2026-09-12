> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdropproposal/progressmode](https://developer.apple.com/documentation/uikit/uitextdropproposal/progressmode)

# UITextDropProposal.ProgressMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The text drop progress styles for user-visible progress indication.

## Declaration

```swift
enum ProgressMode
```

## Topics

### Progress modes

- [UITextDropProposal.ProgressMode.custom](progressmode/custom.md): A text drop progress mode that indicates that you will provide custom progress indicator during the loading of dropped items.
- [UITextDropProposal.ProgressMode.system](progressmode/system.md): A text drop progress mode indicating that the system will show the progress indicator.

### Initializers

- [init(rawValue:)](progressmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Drop management

- [UITextDropRequest](../uitextdroprequest.md): The interface for specifying the attributes of a drop request for a text view.
- [UITextDropProposal](../uitextdropproposal.md): A proposed configuration for the behavior of a text drop interaction.
- [UITextDropProposal.Action](action.md): The text drop action styles for text views.
- [UITextDropProposal.Performer](performer.md): The performers that are responsible for handling the drop operation.

# UITextDropProgressMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The text drop progress styles for user-visible progress indication.

## Declaration

```objectivec
enum UITextDropProgressMode : NSUInteger;
```

## Topics

### Progress modes

- [UITextDropProgressModeCustom](progressmode/custom.md): A text drop progress mode that indicates that you will provide custom progress indicator during the loading of dropped items.
- [UITextDropProgressModeSystem](progressmode/system.md): A text drop progress mode indicating that the system will show the progress indicator.

## See Also

### Drop management

- [UITextDropRequest](../uitextdroprequest.md): The interface for specifying the attributes of a drop request for a text view.
- [UITextDropProposal](../uitextdropproposal.md): A proposed configuration for the behavior of a text drop interaction.
- [UITextDropAction](action.md): The text drop action styles for text views.
- [UITextDropPerformer](performer.md): The performers that are responsible for handling the drop operation.
