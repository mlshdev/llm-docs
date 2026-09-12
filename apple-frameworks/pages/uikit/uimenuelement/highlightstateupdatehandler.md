> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimenuelement/highlightstateupdatehandler](https://developer.apple.com/documentation/uikit/uimenuelement/highlightstateupdatehandler)

# highlightStateUpdateHandler (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

A closure the system calls when the element’s highlight state changes in a menu.

## Declaration

```swift
var highlightStateUpdateHandler: ((UIMenuElement, Bool) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The system calls this handler whenever a menu element transitions between highlighted and unhighlighted states. Highlight events include pointer hover, touch down, keyboard navigation, and focus changes.

The handler receives two parameters: the affected element and a Boolean that indicates the new state. When `isHighlighted` is [true](https://developer.apple.com/documentation/swift/true), the element is highlighted. When it’s [false](https://developer.apple.com/documentation/swift/false), the element is unhighlighted.

Use this handler to update your app’s UI in response to the user’s attention on a menu element, such as showing a preview of the action’s effect while the user considers the option.

> **Note**

> In visionOS, the system doesn’t call this handler for gaze-based highlight.

# highlightStateUpdateHandler (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

A closure the system calls when the element’s highlight state changes in a menu.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^)(UIMenuElement *, _Bool) highlightStateUpdateHandler;
```

<a id="Discussion"></a>

## Discussion

The system calls this handler whenever a menu element transitions between highlighted and unhighlighted states. Highlight events include pointer hover, touch down, keyboard navigation, and focus changes.

The handler receives two parameters: the affected element and a Boolean that indicates the new state. When `isHighlighted` is [true](https://developer.apple.com/documentation/swift/true), the element is highlighted. When it’s [false](https://developer.apple.com/documentation/swift/false), the element is unhighlighted.

Use this handler to update your app’s UI in response to the user’s attention on a menu element, such as showing a preview of the action’s effect while the user considers the option.

> **Note**

> In visionOS, the system doesn’t call this handler for gaze-based highlight.
