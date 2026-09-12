> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkcanvasview/delegate](https://developer.apple.com/documentation/pencilkit/pkcanvasview/delegate)

# delegate (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The object you use to respond to changes in the drawn content or with the selected tool.

## Declaration

```swift
weak var delegate: (any PKCanvasViewDelegate)? { get set }
```

## See Also

### Responding to drawing-related changes

- [PKCanvasViewDelegate](../pkcanvasviewdelegate.md): Methods for monitoring drawing related changes in a canvas view.

# delegate (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The object you use to respond to changes in the drawn content or with the selected tool.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<PKCanvasViewDelegate> delegate;
```

## See Also

### Responding to drawing-related changes

- [PKCanvasViewDelegate](../pkcanvasviewdelegate.md): Methods for monitoring drawing related changes in a canvas view.
