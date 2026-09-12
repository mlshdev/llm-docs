> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontroller/selecteddetentidentifier](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller/selecteddetentidentifier)

# selectedDetentIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The identifier of the most recently selected detent.

## Declaration

```swift
var selectedDetentIdentifier: UISheetPresentationController.Detent.Identifier? { get set }
```

<a id="Discussion"></a>

## Discussion

This property represents the most recent detent that the user selects or that you set programmatically. The default value is `nil`, which means the sheet displays at the smallest detent you specify in [detents](detents.md).

## See Also

### Specifying the height

- [detents](detents.md): The array of heights where a sheet can rest.
- [UISheetPresentationController.Detent](detent.md): An object that represents a height where a sheet naturally rests.

# selectedDetentIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The identifier of the most recently selected detent.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UISheetPresentationControllerDetentIdentifier selectedDetentIdentifier;
```

<a id="Discussion"></a>

## Discussion

This property represents the most recent detent that the user selects or that you set programmatically. The default value is `nil`, which means the sheet displays at the smallest detent you specify in [detents](detents.md).

## See Also

### Specifying the height

- [detents](detents.md): The array of heights where a sheet can rest.
- [UISheetPresentationControllerDetent](detent.md): An object that represents a height where a sheet naturally rests.
