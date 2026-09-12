> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/iskeywindow](https://developer.apple.com/documentation/uikit/uiwindow/iskeywindow)

# isKeyWindow (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the window is the key window.

## Declaration

```swift
var isKeyWindow: Bool { get }
```

<a id="Discussion"></a>

## Discussion

In iOS 15 and later, the value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window is the key window of its scene. In iOS 14 and earlier, the value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window is the key window in the app.

The key window receives keyboard and other non-touch-related events. Only one window at a time may be the key window.

## See Also

### Making windows key

- [canBecomeKey](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKeyAndVisible()](makekeyandvisible%28%29.md): Shows the window and makes it the key window.
- [makeKey()](makekey%28%29.md): Makes the window the key window.
- [becomeKey()](becomekey%28%29.md): Tells the window that it’s the key window.
- [resignKey()](resignkey%28%29.md): Tells the window that it’s no longer the key window.

# keyWindow (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value that indicates whether the window is the key window.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isKeyWindow) BOOL keyWindow;
```

<a id="Discussion"></a>

## Discussion

In iOS 15 and later, the value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window is the key window of its scene. In iOS 14 and earlier, the value of this property is [true](https://developer.apple.com/documentation/swift/true) when the window is the key window in the app.

The key window receives keyboard and other non-touch-related events. Only one window at a time may be the key window.

## See Also

### Making windows key

- [canBecomeKeyWindow](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKeyAndVisible](makekeyandvisible%28%29.md): Shows the window and makes it the key window.
- [makeKeyWindow](makekey%28%29.md): Makes the window the key window.
- [becomeKeyWindow](becomekey%28%29.md): Tells the window that it’s the key window.
- [resignKeyWindow](resignkey%28%29.md): Tells the window that it’s no longer the key window.
