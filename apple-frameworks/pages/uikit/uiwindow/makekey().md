> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/makekey()](https://developer.apple.com/documentation/uikit/uiwindow/makekey())

# makeKey() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Makes the window the key window.

## Declaration

```swift
func makeKey()
```

<a id="Discussion"></a>

## Discussion

Use this method to make the window key without changing its visibility. The key window receives keyboard and other non-touch related events. This method causes the previous key window to resign the key status.

## See Also

### Making windows key

- [isKeyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window.
- [canBecomeKey](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKeyAndVisible()](makekeyandvisible%28%29.md): Shows the window and makes it the key window.
- [becomeKey()](becomekey%28%29.md): Tells the window that it’s the key window.
- [resignKey()](resignkey%28%29.md): Tells the window that it’s no longer the key window.

# makeKeyWindow (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Makes the window the key window.

## Declaration

```objectivec
- (void) makeKeyWindow;
```

<a id="Discussion"></a>

## Discussion

Use this method to make the window key without changing its visibility. The key window receives keyboard and other non-touch related events. This method causes the previous key window to resign the key status.

## See Also

### Making windows key

- [keyWindow](iskeywindow.md): A Boolean value that indicates whether the window is the key window.
- [canBecomeKeyWindow](canbecomekey.md): A Boolean value that indicates whether the window can become the key window.
- [makeKeyAndVisible](makekeyandvisible%28%29.md): Shows the window and makes it the key window.
- [becomeKeyWindow](becomekey%28%29.md): Tells the window that it’s the key window.
- [resignKeyWindow](resignkey%28%29.md): Tells the window that it’s no longer the key window.
