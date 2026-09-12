> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeyboardlayoutguide/followsundockedkeyboard](https://developer.apple.com/documentation/uikit/uikeyboardlayoutguide/followsundockedkeyboard)

# followsUndockedKeyboard (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A Boolean value that determines if the layout guide tracks the keyboard when it’s undocked from the bottom of the screen.

## Declaration

```swift
var followsUndockedKeyboard: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false); the guide tracks the keyboard only when docked. When the keyboard is off screen or undocked, the guide’s [topAnchor](../uilayoutguide/topanchor.md) matches the [bottomAnchor](../uilayoutguide/bottomanchor.md) of [safeAreaLayoutGuide](../uiview/safearealayoutguide.md). To follow all keyboard anchors even when undocked or floating, set [followsUndockedKeyboard](followsundockedkeyboard.md) to [true](https://developer.apple.com/documentation/swift/true).

# followsUndockedKeyboard (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A Boolean value that determines if the layout guide tracks the keyboard when it’s undocked from the bottom of the screen.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL followsUndockedKeyboard;
```

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false); the guide tracks the keyboard only when docked. When the keyboard is off screen or undocked, the guide’s [topAnchor](../uilayoutguide/topanchor.md) matches the [bottomAnchor](../uilayoutguide/bottomanchor.md) of [safeAreaLayoutGuide](../uiview/safearealayoutguide.md). To follow all keyboard anchors even when undocked or floating, set [followsUndockedKeyboard](followsundockedkeyboard.md) to [true](https://developer.apple.com/documentation/swift/true).
