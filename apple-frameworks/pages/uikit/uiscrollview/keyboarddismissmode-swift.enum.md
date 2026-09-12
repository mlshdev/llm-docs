> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollview/keyboarddismissmode-swift.enum](https://developer.apple.com/documentation/uikit/uiscrollview/keyboarddismissmode-swift.enum)

# UIScrollView.KeyboardDismissMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS

Constants that determine how the system dismisses the keyboard when a drag begins in the scroll view.

## Declaration

```swift
enum KeyboardDismissMode
```

<a id="overview"></a>

## Overview

You use these constants to set the value of the [keyboardDismissMode](keyboarddismissmode-swift.property.md) property.

## Topics

### Constants

- [UIScrollView.KeyboardDismissMode.none](keyboarddismissmode-swift.enum/none.md): A mode in which a drag doesn’t dismiss the keyboard.
- [UIScrollView.KeyboardDismissMode.onDrag](keyboarddismissmode-swift.enum/ondrag.md): A mode in which the keyboard dismisses when a drag begins.
- [UIScrollView.KeyboardDismissMode.interactive](keyboarddismissmode-swift.enum/interactive.md): A mode in which the keyboard follows the dragging touch offscreen, and can be pulled upward again to cancel the dismiss.
- [UIScrollView.KeyboardDismissMode.onDragWithAccessory](keyboarddismissmode-swift.enum/ondragwithaccessory.md): A mode in which the keyboard and accessory view dismiss together when a drag begins.
- [UIScrollView.KeyboardDismissMode.interactiveWithAccessory](keyboarddismissmode-swift.enum/interactivewithaccessory.md): A mode in which the keyboard and accessory view both follow the dragging touch offscreen, and can be pulled upward again to cancel the dismiss.

### Initializers

- [init(rawValue:)](keyboarddismissmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Dismissing the keyboard

- [keyboardDismissMode](keyboarddismissmode-swift.property.md): The manner in which the system dismisses the keyboard when a drag begins in the scroll view.

# UIScrollViewKeyboardDismissMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS

Constants that determine how the system dismisses the keyboard when a drag begins in the scroll view.

## Declaration

```objectivec
enum UIScrollViewKeyboardDismissMode : NSInteger;
```

<a id="overview"></a>

## Overview

You use these constants to set the value of the [keyboardDismissMode](keyboarddismissmode-swift.property.md) property.

## Topics

### Constants

- [UIScrollViewKeyboardDismissModeNone](keyboarddismissmode-swift.enum/none.md): A mode in which a drag doesn’t dismiss the keyboard.
- [UIScrollViewKeyboardDismissModeOnDrag](keyboarddismissmode-swift.enum/ondrag.md): A mode in which the keyboard dismisses when a drag begins.
- [UIScrollViewKeyboardDismissModeInteractive](keyboarddismissmode-swift.enum/interactive.md): A mode in which the keyboard follows the dragging touch offscreen, and can be pulled upward again to cancel the dismiss.
- [UIScrollViewKeyboardDismissModeOnDragWithAccessory](keyboarddismissmode-swift.enum/ondragwithaccessory.md): A mode in which the keyboard and accessory view dismiss together when a drag begins.
- [UIScrollViewKeyboardDismissModeInteractiveWithAccessory](keyboarddismissmode-swift.enum/interactivewithaccessory.md): A mode in which the keyboard and accessory view both follow the dragging touch offscreen, and can be pulled upward again to cancel the dismiss.

## See Also

### Dismissing the keyboard

- [keyboardDismissMode](keyboarddismissmode-swift.property.md): The manner in which the system dismisses the keyboard when a drag begins in the scroll view.
