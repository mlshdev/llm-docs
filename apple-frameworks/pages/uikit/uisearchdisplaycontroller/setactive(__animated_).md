> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisearchdisplaycontroller/setactive(_:animated:)](https://developer.apple.com/documentation/uikit/uisearchdisplaycontroller/setactive(_:animated:))

# setActive(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Displays or hides the search interface, optionally with animation.

> UISearchDisplayController has been replaced with UISearchController

## Declaration

```swift
func setActive(_ visible: Bool, animated: Bool)
```

## Parameters

- `visible`: [true](https://developer.apple.com/documentation/swift/true) to display the search interface if it is not already displayed; [false](https://developer.apple.com/documentation/swift/false) to hide the search interface if it is currently displayed.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to use animation for a change in visible state, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When the user focus in the search field of a managed search bar, the search display controller automatically displays the search interface. You can use this method to force the search interface to appear.

## See Also

### Displaying the search Interface

- [isActive](isactive.md): Deprecated. The visibility state of the search interface.

# setActive:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 8.0) · iPadOS 3.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Displays or hides the search interface, optionally with animation.

> UISearchDisplayController has been replaced with UISearchController

## Declaration

```objectivec
- (void) setActive:(BOOL) visible animated:(BOOL) animated;
```

## Parameters

- `visible`: [true](https://developer.apple.com/documentation/swift/true) to display the search interface if it is not already displayed; [false](https://developer.apple.com/documentation/swift/false) to hide the search interface if it is currently displayed.
- `animated`: [true](https://developer.apple.com/documentation/swift/true) to use animation for a change in visible state, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

When the user focus in the search field of a managed search bar, the search display controller automatically displays the search interface. You can use this method to force the search interface to appear.

## See Also

### Displaying the search Interface

- [active](isactive.md): Deprecated. The visibility state of the search interface.
