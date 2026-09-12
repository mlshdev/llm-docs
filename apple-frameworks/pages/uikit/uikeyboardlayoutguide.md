> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uikeyboardlayoutguide](https://developer.apple.com/documentation/uikit/uikeyboardlayoutguide)

# UIKeyboardLayoutGuide (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A layout guide that represents the space the keyboard occupies in your app’s layout.

## Declaration

```swift
@MainActor class UIKeyboardLayoutGuide
```

<a id="overview"></a>

## Overview

Configure the keyboard layout guide, and activate or deactivate constraints so your app’s layout adjusts to the keyboard in different situations. See [Adjusting your layout with keyboard layout guide](adjusting-your-layout-with-keyboard-layout-guide.md) for an example of how to dynamically respond to keyboard presentation, dismissal, and movement.

## Topics

### Supporting floating and undocked keyboards

- [followsUndockedKeyboard](uikeyboardlayoutguide/followsundockedkeyboard.md): A Boolean value that determines if the layout guide tracks the keyboard when it’s undocked from the bottom of the screen.

### Adjusting dismissal sensitivity

- [keyboardDismissPadding](uikeyboardlayoutguide/keyboarddismisspadding.md): A value that adds padding above the keyboard to increase the size of the touch area for the scrolling dismissal gesture.

### Configuring safe area usage

- [usesBottomSafeArea](uikeyboardlayoutguide/usesbottomsafearea.md): A Boolean value that indicates whether the layout guide uses the view’s safe area layout guide.

## Relationships

### Inherits From

- [UITrackingLayoutGuide](uitrackinglayoutguide.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIPopoverPresentationControllerSourceItem](uipopoverpresentationcontrollersourceitem.md)

## See Also

### Keyboard layout

- [Adjusting your layout with keyboard layout guide](adjusting-your-layout-with-keyboard-layout-guide.md): Respond dynamically to keyboard movement by using the tracking features of the keyboard layout guide.
- [UITrackingLayoutGuide](uitrackinglayoutguide.md): A layout guide that automatically activates and deactivates layout constraints depending on its proximity to edges.

# UIKeyboardLayoutGuide (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

A layout guide that represents the space the keyboard occupies in your app’s layout.

## Declaration

```objectivec
@interface UIKeyboardLayoutGuide : UITrackingLayoutGuide
```

<a id="overview"></a>

## Overview

Configure the keyboard layout guide, and activate or deactivate constraints so your app’s layout adjusts to the keyboard in different situations. See [Adjusting your layout with keyboard layout guide](adjusting-your-layout-with-keyboard-layout-guide.md) for an example of how to dynamically respond to keyboard presentation, dismissal, and movement.

## Topics

### Supporting floating and undocked keyboards

- [followsUndockedKeyboard](uikeyboardlayoutguide/followsundockedkeyboard.md): A Boolean value that determines if the layout guide tracks the keyboard when it’s undocked from the bottom of the screen.

### Adjusting dismissal sensitivity

- [keyboardDismissPadding](uikeyboardlayoutguide/keyboarddismisspadding.md): A value that adds padding above the keyboard to increase the size of the touch area for the scrolling dismissal gesture.

### Configuring safe area usage

- [usesBottomSafeArea](uikeyboardlayoutguide/usesbottomsafearea.md): A Boolean value that indicates whether the layout guide uses the view’s safe area layout guide.

## Relationships

### Inherits From

- [UITrackingLayoutGuide](uitrackinglayoutguide.md)

## See Also

### Keyboard layout

- [UITrackingLayoutGuide](uitrackinglayoutguide.md): A layout guide that automatically activates and deactivates layout constraints depending on its proximity to edges.
