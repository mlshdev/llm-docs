> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/makekeyandvisible()](https://developer.apple.com/documentation/uikit/uiwindow/makekeyandvisible())

# makeKeyAndVisible() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Shows the window and makes it the key window.

## Declaration

```swift
func makeKeyAndVisible()
```

<a id="Discussion"></a>

## Discussion

This is a convenience method to show the current window and position it in front of all other windows at the same level or lower. If you only want to show the window, change its [isHidden](../uiview/ishidden.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Making windows key

- [isKeyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window.
- [canBecomeKey](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKey()](makekey%28%29.md): Makes the window the key window.
- [becomeKey()](becomekey%28%29.md): Tells the window that it’s the key window.
- [resignKey()](resignkey%28%29.md): Tells the window that it’s no longer the key window.

# makeKeyAndVisible (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Shows the window and makes it the key window.

## Declaration

```objectivec
- (void) makeKeyAndVisible;
```

<a id="Discussion"></a>

## Discussion

This is a convenience method to show the current window and position it in front of all other windows at the same level or lower. If you only want to show the window, change its [hidden](../uiview/ishidden.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Making windows key

- [keyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window.
- [canBecomeKeyWindow](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKeyWindow](makekey%28%29.md): Makes the window the key window.
- [becomeKeyWindow](becomekey%28%29.md): Tells the window that it’s the key window.
- [resignKeyWindow](resignkey%28%29.md): Tells the window that it’s no longer the key window.
