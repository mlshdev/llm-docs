> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/keywindow](https://developer.apple.com/documentation/uikit/uiwindowscene/keywindow)

# keyWindow (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The key window associated with the scene.

## Declaration

```swift
var keyWindow: UIWindow? { get }
```

<a id="Discussion"></a>

## Discussion

The key window receives keyboard and other non-touch-related events. Of a scene’s associated [windows](windows.md), only one window at a time may be the key window.

## See Also

### Getting the active windows

- [windows](windows.md): The windows associated with the scene.
- [screen](screen.md): The screen that displays the contents of the scene.

# keyWindow (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The key window associated with the scene.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UIWindow * keyWindow;
```

<a id="Discussion"></a>

## Discussion

The key window receives keyboard and other non-touch-related events. Of a scene’s associated [windows](windows.md), only one window at a time may be the key window.

## See Also

### Getting the active windows

- [windows](windows.md): The windows associated with the scene.
- [screen](screen.md): The screen that displays the contents of the scene.
