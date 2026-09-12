> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerinteraction/delegate](https://developer.apple.com/documentation/uikit/uipointerinteraction/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

An object that responds to pointer movements.

## Declaration

```swift
weak var delegate: (any UIPointerInteractionDelegate)? { get }
```

## See Also

### Manage pointer interactions

- [UIPointerInteractionDelegate](../uipointerinteractiondelegate.md): An interface for handling pointer movements within the interaction’s view.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · visionOS 1.0+

An object that responds to pointer movements.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) id<UIPointerInteractionDelegate> delegate;
```

## See Also

### Manage pointer interactions

- [UIPointerInteractionDelegate](../uipointerinteractiondelegate.md): An interface for handling pointer movements within the interaction’s view.
