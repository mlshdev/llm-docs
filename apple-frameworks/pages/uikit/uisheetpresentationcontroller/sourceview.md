> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisheetpresentationcontroller/sourceview](https://developer.apple.com/documentation/uikit/uisheetpresentationcontroller/sourceview)

# sourceView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The view that the sheet centers itself over.

## Declaration

```swift
var sourceView: UIView? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which means the system centers edge-attached sheets on the edge they attach to, and centers floating sheets vertically and horizontally in the window.

To customize the sheet’s position, set a view within the view hierarchy of the presenting view controller as the [sourceView](sourceview.md) of the sheet. The sheet attempts to visually center itself over this view. The system only positions the sheet within system-defined margins.

# sourceView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The view that the sheet centers itself over.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIView * sourceView;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which means the system centers edge-attached sheets on the edge they attach to, and centers floating sheets vertically and horizontally in the window.

To customize the sheet’s position, set a view within the view hierarchy of the presenting view controller as the [sourceView](sourceview.md) of the sheet. The sheet attempts to visually center itself over this view. The system only positions the sheet within system-defined margins.
