> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdraggable/textdraginteraction](https://developer.apple.com/documentation/uikit/uitextdraggable/textdraginteraction)

# textDragInteraction (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The drag interaction object added by UIKit to the text view.

## Declaration

```swift
var textDragInteraction: UIDragInteraction? { get }
```

<a id="Discussion"></a>

## Discussion

You can set the text drag interaction’s [isEnabled](../uidraginteraction/isenabled.md) property to [false](https://developer.apple.com/documentation/swift/false) if you need to explicitly turn off drag interactions for a UIKit-provided text view.

# textDragInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The drag interaction object added by UIKit to the text view.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UIDragInteraction * textDragInteraction;
```

<a id="Discussion"></a>

## Discussion

You can set the text drag interaction’s [enabled](../uidraginteraction/isenabled.md) property to [false](https://developer.apple.com/documentation/swift/false) if you need to explicitly turn off drag interactions for a UIKit-provided text view.
