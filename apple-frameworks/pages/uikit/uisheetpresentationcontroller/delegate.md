> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontroller/delegate](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The delegate of the sheet presentation controller.

## Declaration

```swift
weak var delegate: (any UISheetPresentationControllerDelegate)? { get set }
```

## See Also

### Managing the delegate

- [UISheetPresentationControllerDelegate](../uisheetpresentationcontrollerdelegate.md): The interface that an object implements to respond to size changes in a sheet presentation controller.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The delegate of the sheet presentation controller.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UISheetPresentationControllerDelegate> delegate;
```

## See Also

### Managing the delegate

- [UISheetPresentationControllerDelegate](../uisheetpresentationcontrollerdelegate.md): The interface that an object implements to respond to size changes in a sheet presentation controller.
