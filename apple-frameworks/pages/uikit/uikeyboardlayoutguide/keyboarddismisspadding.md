> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeyboardlayoutguide/keyboarddismisspadding](https://developer.apple.com/documentation/uikit/uikeyboardlayoutguide/keyboarddismisspadding)

# keyboardDismissPadding (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A value that adds padding above the keyboard to increase the size of the touch area for the scrolling dismissal gesture.

## Declaration

```swift
var keyboardDismissPadding: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to `0`. The system treats negative values as `0`.

# keyboardDismissPadding (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A value that adds padding above the keyboard to increase the size of the touch area for the scrolling dismissal gesture.

## Declaration

```objectivec
@property (nonatomic, readwrite) CGFloat keyboardDismissPadding;
```

<a id="Discussion"></a>

## Discussion

Defaults to `0`. The system treats negative values as `0`.
