> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinavigationcontroller/istoolbarhidden](https://developer.apple.com/documentation/uikit/uinavigationcontroller/istoolbarhidden)

# isToolbarHidden (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether the navigation controller’s built-in toolbar is visible.

## Declaration

```swift
var isToolbarHidden: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is set to [true](https://developer.apple.com/documentation/swift/true), the toolbar is not visible. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring custom toolbars

- [toolbar](toolbar.md): The custom toolbar associated with the navigation controller.
- [setToolbarHidden(\_:animated:)](settoolbarhidden%28__animated_%29.md): Changes the visibility of the navigation controller’s built-in toolbar.
- [hideShowBarDuration](hideshowbarduration.md): A variable that specifies the duration when animating the navigation bar.

# toolbarHidden (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether the navigation controller’s built-in toolbar is visible.

## Declaration

```objectivec
@property (nonatomic, getter=isToolbarHidden) BOOL toolbarHidden;
```

<a id="Discussion"></a>

## Discussion

If this property is set to [true](https://developer.apple.com/documentation/swift/true), the toolbar is not visible. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring custom toolbars

- [toolbar](toolbar.md): The custom toolbar associated with the navigation controller.
- [setToolbarHidden:animated:](settoolbarhidden%28__animated_%29.md): Changes the visibility of the navigation controller’s built-in toolbar.
- [UINavigationControllerHideShowBarDuration](hideshowbarduration.md): A variable that specifies the duration when animating the navigation bar.
