> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontrollerdelegate/sheetpresentationcontrollerdidchangeselecteddetentidentifier(_:)](https://developer.apple.com/documentation/uikit/uisheetpresentationcontrollerdelegate/sheetpresentationcontrollerdidchangeselecteddetentidentifier(_:))

# sheetPresentationControllerDidChangeSelectedDetentIdentifier(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Provides an opportunity to respond after the sheet presentation controller’s selected detent changes.

## Declaration

```swift
optional func sheetPresentationControllerDidChangeSelectedDetentIdentifier(_ sheetPresentationController: UISheetPresentationController)
```

## Parameters

- `sheetPresentationController`: The sheet presentation controller whose detent changes.

<a id="Discussion"></a>

## Discussion

Implement this method if you want to perform changes in response to the user resizing a sheet to a new detent.

The system calls this method after a sheet’s [selectedDetentIdentifier](../uisheetpresentationcontroller/selecteddetentidentifier.md) changes in response to user interaction. The system doesn’t call this after you change [selectedDetentIdentifier](../uisheetpresentationcontroller/selecteddetentidentifier.md) programmatically.

# sheetPresentationControllerDidChangeSelectedDetentIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Provides an opportunity to respond after the sheet presentation controller’s selected detent changes.

## Declaration

```objectivec
- (void) sheetPresentationControllerDidChangeSelectedDetentIdentifier:(UISheetPresentationController *) sheetPresentationController;
```

## Parameters

- `sheetPresentationController`: The sheet presentation controller whose detent changes.

<a id="Discussion"></a>

## Discussion

Implement this method if you want to perform changes in response to the user resizing a sheet to a new detent.

The system calls this method after a sheet’s [selectedDetentIdentifier](../uisheetpresentationcontroller/selecteddetentidentifier.md) changes in response to user interaction. The system doesn’t call this after you change [selectedDetentIdentifier](../uisheetpresentationcontroller/selecteddetentidentifier.md) programmatically.
