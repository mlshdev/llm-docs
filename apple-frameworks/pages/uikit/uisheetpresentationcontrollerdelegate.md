> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontrollerdelegate](https://developer.apple.com/documentation/uikit/uisheetpresentationcontrollerdelegate)

# UISheetPresentationControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The interface that an object implements to respond to size changes in a sheet presentation controller.

## Declaration

```swift
@MainActor protocol UISheetPresentationControllerDelegate : UIAdaptivePresentationControllerDelegate
```

## Topics

### Resizing the Sheet Presentation Controller

- [sheetPresentationControllerDidChangeSelectedDetentIdentifier(\_:)](uisheetpresentationcontrollerdelegate/sheetpresentationcontrollerdidchangeselecteddetentidentifier%28__%29.md): Provides an opportunity to respond after the sheet presentation controller’s selected detent changes.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [UIAdaptivePresentationControllerDelegate](uiadaptivepresentationcontrollerdelegate.md)

## See Also

### Managing the delegate

- [delegate](uisheetpresentationcontroller/delegate.md): The delegate of the sheet presentation controller.

# UISheetPresentationControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The interface that an object implements to respond to size changes in a sheet presentation controller.

## Declaration

```objectivec
@protocol UISheetPresentationControllerDelegate <UIAdaptivePresentationControllerDelegate>
```

## Topics

### Resizing the Sheet Presentation Controller

- [sheetPresentationControllerDidChangeSelectedDetentIdentifier:](uisheetpresentationcontrollerdelegate/sheetpresentationcontrollerdidchangeselecteddetentidentifier%28__%29.md): Provides an opportunity to respond after the sheet presentation controller’s selected detent changes.

## Relationships

### Inherits From

- [UIAdaptivePresentationControllerDelegate](uiadaptivepresentationcontrollerdelegate.md)

## See Also

### Managing the delegate

- [delegate](uisheetpresentationcontroller/delegate.md): The delegate of the sheet presentation controller.
