> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontroller/prefersscrollingexpandswhenscrolledtoedge](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller/prefersscrollingexpandswhenscrolledtoedge)

# prefersScrollingExpandsWhenScrolledToEdge (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that determines whether scrolling expands the sheet to a larger detent.

## Declaration

```swift
var prefersScrollingExpandsWhenScrolledToEdge: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), which means if the sheet can expand to a larger detent than [selectedDetentIdentifier](selecteddetentidentifier.md), scrolling up in the sheet increases its detent instead of scrolling the sheet’s content. After the sheet reaches its largest detent, scrolling begins.

Set this value to [false](https://developer.apple.com/documentation/swift/false) if you want to avoid letting a scroll gesture expand the sheet. For example, you can set this value on a nonmodal sheet to avoid obscuring the content underneath the sheet.

## See Also

### Managing user interaction

- [largestUndimmedDetentIdentifier](largestundimmeddetentidentifier.md): The largest detent that doesn’t dim the view underneath the sheet.

# prefersScrollingExpandsWhenScrolledToEdge (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that determines whether scrolling expands the sheet to a larger detent.

## Declaration

```objectivec
@property (nonatomic) BOOL prefersScrollingExpandsWhenScrolledToEdge;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true), which means if the sheet can expand to a larger detent than [selectedDetentIdentifier](selecteddetentidentifier.md), scrolling up in the sheet increases its detent instead of scrolling the sheet’s content. After the sheet reaches its largest detent, scrolling begins.

Set this value to [false](https://developer.apple.com/documentation/swift/false) if you want to avoid letting a scroll gesture expand the sheet. For example, you can set this value on a nonmodal sheet to avoid obscuring the content underneath the sheet.

## See Also

### Managing user interaction

- [largestUndimmedDetentIdentifier](largestundimmeddetentidentifier.md): The largest detent that doesn’t dim the view underneath the sheet.
