> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontroller/largestundimmeddetentidentifier](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller/largestundimmeddetentidentifier)

# largestUndimmedDetentIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The largest detent that doesn’t dim the view underneath the sheet.

## Declaration

```swift
var largestUndimmedDetentIdentifier: UISheetPresentationController.Detent.Identifier? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which means the system adds a noninteractive dimming view underneath the sheet at all detents. Set this property to only add the dimming view at detents larger than the detent you specify. For example, set this property to [medium](detent/identifier-swift.struct/medium.md) to add the dimming view at the [large](detent/identifier-swift.struct/large.md) detent.

Without a dimming view, the undimmed area around the sheet responds to user interaction, allowing for a nonmodal experience. You can use this behavior for sheets with interactive content underneath them.

## See Also

### Managing user interaction

- [prefersScrollingExpandsWhenScrolledToEdge](prefersscrollingexpandswhenscrolledtoedge.md): A Boolean value that determines whether scrolling expands the sheet to a larger detent.

# largestUndimmedDetentIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The largest detent that doesn’t dim the view underneath the sheet.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UISheetPresentationControllerDetentIdentifier largestUndimmedDetentIdentifier;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which means the system adds a noninteractive dimming view underneath the sheet at all detents. Set this property to only add the dimming view at detents larger than the detent you specify. For example, set this property to [UISheetPresentationControllerDetentIdentifierMedium](detent/identifier-swift.struct/medium.md) to add the dimming view at the [UISheetPresentationControllerDetentIdentifierLarge](detent/identifier-swift.struct/large.md) detent.

Without a dimming view, the undimmed area around the sheet responds to user interaction, allowing for a nonmodal experience. You can use this behavior for sheets with interactive content underneath them.

## See Also

### Managing user interaction

- [prefersScrollingExpandsWhenScrolledToEdge](prefersscrollingexpandswhenscrolledtoedge.md): A Boolean value that determines whether scrolling expands the sheet to a larger detent.
