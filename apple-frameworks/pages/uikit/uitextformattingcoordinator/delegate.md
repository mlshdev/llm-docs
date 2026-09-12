> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextformattingcoordinator/delegate](https://developer.apple.com/documentation/uikit/uitextformattingcoordinator/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The delegate of the text-formatting coordinator.

## Declaration

```swift
weak var delegate: (any UITextFormattingCoordinatorDelegate)? { get set }
```

## See Also

### Applying Updated Text Attributes

- [UITextFormattingCoordinatorDelegate](../uitextformattingcoordinatordelegate.md): The methods that delegates of text-formatting coordinators implement to apply font panel settings to the currently selected text.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The delegate of the text-formatting coordinator.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UITextFormattingCoordinatorDelegate> delegate;
```

## See Also

### Applying Updated Text Attributes

- [UITextFormattingCoordinatorDelegate](../uitextformattingcoordinatordelegate.md): The methods that delegates of text-formatting coordinators implement to apply font panel settings to the currently selected text.
