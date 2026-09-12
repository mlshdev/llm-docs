> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontroller/detents](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller/detents)

# detents (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The array of heights where a sheet can rest.

## Declaration

```swift
var detents: [UISheetPresentationController.Detent] { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is an array that contains the value [large()](detent/large%28%29.md). This array must contain at least one element. When you set this value, specify detents in order from smallest to largest height.

## See Also

### Specifying the height

- [selectedDetentIdentifier](selecteddetentidentifier.md): The identifier of the most recently selected detent.
- [UISheetPresentationController.Detent](detent.md): An object that represents a height where a sheet naturally rests.

# detents (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The array of heights where a sheet can rest.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<UISheetPresentationControllerDetent *> * detents;
```

<a id="Discussion"></a>

## Discussion

The default value is an array that contains the value [largeDetent](detent/large%28%29.md). This array must contain at least one element. When you set this value, specify detents in order from smallest to largest height.

## See Also

### Specifying the height

- [selectedDetentIdentifier](selecteddetentidentifier.md): The identifier of the most recently selected detent.
- [UISheetPresentationControllerDetent](detent.md): An object that represents a height where a sheet naturally rests.
