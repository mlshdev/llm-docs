> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipencilinteraction/delegate](https://developer.apple.com/documentation/uikit/uipencilinteraction/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.1+ · iPadOS 12.1+ · Mac Catalyst 13.1+ · visionOS 26.2+

The object that handles the double-tap or squeeze interactions a person makes on Apple Pencil.

## Declaration

```swift
weak var delegate: (any UIPencilInteractionDelegate)? { get set }
```

## See Also

### Handling interactions

- [UIPencilInteractionDelegate](../uipencilinteractiondelegate.md): The interface an object implements to handle double taps or squeezes a person makes on Apple Pencil.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.1+ · iPadOS 12.1+ · Mac Catalyst 13.1+ · visionOS 26.2+

The object that handles the double-tap or squeeze interactions a person makes on Apple Pencil.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIPencilInteractionDelegate> delegate;
```

## See Also

### Handling interactions

- [UIPencilInteractionDelegate](../uipencilinteractiondelegate.md): The interface an object implements to handle double taps or squeezes a person makes on Apple Pencil.
