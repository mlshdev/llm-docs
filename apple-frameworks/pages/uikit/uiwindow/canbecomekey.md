> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/canbecomekey](https://developer.apple.com/documentation/uikit/uiwindow/canbecomekey)

# canBecomeKey (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the window can become the key window.

## Declaration

```swift
var canBecomeKey: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). To indicate that the window can’t become the key window, override [canBecomeKey](canbecomekey.md) and return [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Making windows key

- [isKeyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window.
- [makeKeyAndVisible()](makekeyandvisible%28%29.md): Shows the window and makes it the key window.
- [makeKey()](makekey%28%29.md): Makes the window the key window.
- [becomeKey()](becomekey%28%29.md): Tells the window that it’s the key window.
- [resignKey()](resignkey%28%29.md): Tells the window that it’s no longer the key window.

# canBecomeKeyWindow (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the window can become the key window.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canBecomeKeyWindow;
```

<a id="Discussion"></a>

## Discussion

The default value is [true](https://developer.apple.com/documentation/swift/true). To indicate that the window can’t become the key window, override [canBecomeKeyWindow](canbecomekey.md) and return [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Making windows key

- [keyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window.
- [makeKeyAndVisible](makekeyandvisible%28%29.md): Shows the window and makes it the key window.
- [makeKeyWindow](makekey%28%29.md): Makes the window the key window.
- [becomeKeyWindow](becomekey%28%29.md): Tells the window that it’s the key window.
- [resignKeyWindow](resignkey%28%29.md): Tells the window that it’s no longer the key window.
