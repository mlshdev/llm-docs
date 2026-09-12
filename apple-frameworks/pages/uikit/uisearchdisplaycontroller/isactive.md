> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchdisplaycontroller/isactive](https://developer.apple.com/documentation/uikit/uisearchdisplaycontroller/isactive)

# isActive (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The visibility state of the search interface.

> For more information, see [UISearchDisplayController](../uisearchdisplaycontroller.md).

## Declaration

```swift
var isActive: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

If you set this value directly, any change is performed without animation. Use [setActive(\_:animated:)](setactive%28__animated_%29.md) if a change in state should be animated.

When the user focus in the search field of a managed search bar, the search display controller automatically displays the search interface. You can use this property to force the search interface to appear.

## See Also

### Displaying the search Interface

- [setActive(\_:animated:)](setactive%28__animated_%29.md): Deprecated. Displays or hides the search interface, optionally with animation.

# active (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The visibility state of the search interface.

> For more information, see [UISearchDisplayController](../uisearchdisplaycontroller.md).

## Declaration

```objectivec
@property (nonatomic, getter=isActive) BOOL active;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

If you set this value directly, any change is performed without animation. Use [setActive:animated:](setactive%28__animated_%29.md) if a change in state should be animated.

When the user focus in the search field of a managed search bar, the search display controller automatically displays the search interface. You can use this property to force the search interface to appear.

## See Also

### Displaying the search Interface

- [setActive:animated:](setactive%28__animated_%29.md): Deprecated. Displays or hides the search interface, optionally with animation.
