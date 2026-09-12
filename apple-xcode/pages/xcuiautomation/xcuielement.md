> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuielement](https://developer.apple.com/documentation/xcuiautomation/xcuielement)

# XCUIElement (Swift)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A UI element in an application.

## Declaration

```swift
@MainActor class XCUIElement
```

<a id="overview"></a>

## Overview

In macOS and iPadOS 15 and later, [XCUIElement](xcuielement.md) provides a way to test your app with keyboard and mouse interactions, such as typing, clicking, scrolling, and moving and pausing the pointer. In iOS, [XCUIElement](xcuielement.md) provides a way to test your app with gestures, such as tapping, swiping, pinching, and rotating.

> **Note**

>  [XCUIElement](xcuielement.md) adopts the [XCUIElementAttributes](xcuielementattributes.md) protocol, which provides additional properties for querying the current state of a UI element’s attributes.

## Topics

### Querying element state

- [waitForExistence(timeout:)](xcuielement/waitforexistence%28timeout_%29.md): Waits the specified amount of time for an element to exist.
- [waitForNonExistence(timeout:)](xcuielement/waitfornonexistence%28timeout_%29.md): Waits the specified amount of time for an element to no longer exist.
- [wait(for:toEqual:timeout:)](xcuielement/wait%28for_toequal_timeout_%29.md): Waits a specified amount of time for a property value to equal a specified value.
- [exists](xcuielement/exists.md): Determines if the element exists.
- [isHittable](xcuielement/ishittable.md): Determines if the system can compute a hit point for the element.
- [debugDescription](xcuielement/debugdescription.md): Provides debugging information about the element.

### Querying descendant elements

- [children(matching:)](xcuielement/children%28matching_%29.md): Returns a query for all direct children of the element matching the type you specify.
- [descendants(matching:)](xcuielement/descendants%28matching_%29.md): Returns a query for all descendants of the element matching the type you specify.

### Typing text

- [typeText(\_:)](xcuielement/typetext%28__%29.md): Types a string into the element.

### Combining keystrokes

- [typeKey(\_:modifierFlags:)](xcuielement/typekey%28__modifierflags_%29-6gaoi.md): Types a single key from the XCUIKeyboardKey enumeration with the specified modifier flags.
- [typeKey(\_:modifierFlags:)](xcuielement/typekey%28__modifierflags_%29-9ubn.md): Types a single key that a string represents with the flags you specify.
- [XCUIKeyboardKey](xcuikeyboardkey.md): Constants to represent keys that have no typewritten equivalent.
- [perform(withKeyModifiers:block:)](xcuielement/perform%28withkeymodifiers_block_%29.md): Executes a block of code while holding a combination keystroke.
- [XCUIElement.KeyModifierFlags](xcuielement/keymodifierflags.md): Flags for simulating combination keystrokes with keys, such as Control, Option, Shift, and Command.

### Moving the pointer

- [hover()](xcuielement/hover%28%29.md): Moves the pointer over the element.

### Clicking

- [click()](xcuielement/click%28%29.md): Sends a click event to a hittable point computed for the element.
- [click(forDuration:thenDragTo:)](xcuielement/click%28forduration_thendragto_%29.md): Clicks and holds an element for a duration you specify, and then drags it to another element.
- [click(forDuration:thenDragTo:withVelocity:thenHoldForDuration:)](xcuielement/click%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Clicks and holds an element for a duration, drags it at a velocity, and holds it over another element for a duration, all of which you specify.
- [doubleClick()](xcuielement/doubleclick%28%29.md): Sends a double-click event to a hittable point the system computes for the element.
- [rightClick()](xcuielement/rightclick%28%29.md): Sends a Control-click event to a hittable point the system computes for the element.

### Scrolling

- [scroll(byDeltaX:deltaY:)](xcuielement/scroll%28bydeltax_deltay_%29.md): Scrolls the view by the number of x and y pixels you specify.

### Tapping and pressing

- [tap()](xcuielement/tap%28%29.md): Sends a tap event to a hittable point the system computes for the element.
- [doubleTap()](xcuielement/doubletap%28%29.md): Sends a double-tap event to a hittable point the system computes for the element.
- [press(forDuration:)](xcuielement/press%28forduration_%29.md): Sends a press-and-hold gesture to a hittable point the system computes for the element, holding for the duration you specify.
- [press(forDuration:thenDragTo:)](xcuielement/press%28forduration_thendragto_%29.md): Initiates a press-and-hold gesture, then drags to another element.
- [press(forDuration:thenDragTo:withVelocity:thenHoldForDuration:)](xcuielement/press%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Initiates a press-and-hold gesture, drags to another element at a velocity, and holds for a duration, all of which you specify.

### Tapping multiple times

- [twoFingerTap()](xcuielement/twofingertap%28%29.md): Sends a two-finger tap event to a hittable point the system computes for the element.
- [tap(withNumberOfTaps:numberOfTouches:)](xcuielement/tap%28withnumberoftaps_numberoftouches_%29.md): Sends one or more taps with one or more touch points.

### Performing gestures

- [swipeLeft()](xcuielement/swipeleft%28%29.md): Sends a swipe-left gesture.
- [swipeLeft(velocity:)](xcuielement/swipeleft%28velocity_%29.md): Sends a swipe-left gesture with a velocity you specify.
- [swipeRight()](xcuielement/swiperight%28%29.md): Sends a swipe-right gesture.
- [swipeRight(velocity:)](xcuielement/swiperight%28velocity_%29.md): Sends a swipe-right gesture with a velocity you specify.
- [swipeUp()](xcuielement/swipeup%28%29.md): Sends a swipe-up gesture.
- [swipeUp(velocity:)](xcuielement/swipeup%28velocity_%29.md): Sends a swipe-up gesture with a velocity you specify.
- [swipeDown()](xcuielement/swipedown%28%29.md): Sends a swipe-down gesture.
- [swipeDown(velocity:)](xcuielement/swipedown%28velocity_%29.md): Sends a swipe-down gesture with a velocity you specify.
- [pinch(withScale:velocity:)](xcuielement/pinch%28withscale_velocity_%29.md): Sends a pinching gesture with two touches.
- [rotate(\_:withVelocity:)](xcuielement/rotate%28__withvelocity_%29.md): Sends a rotation gesture with two touches.
- [XCUIGestureVelocity](xcuigesturevelocity.md): A value that describes how fast a gesture moves across the screen, in pixels per second.

### Interacting with sliders

- [normalizedSliderPosition](xcuielement/normalizedsliderposition.md): Returns the position of the slider’s indicator as a normalized value.
- [adjust(toNormalizedSliderPosition:)](xcuielement/adjust%28tonormalizedsliderposition_%29.md): Manipulates the UI to change the value the slider displays to a new value, based on a normalized position.

### Interacting with pickers

- [adjust(toPickerWheelValue:)](xcuielement/adjust%28topickerwheelvalue_%29.md): Changes the value that the picker wheel displays.

### Calculating coordinates

- [coordinate(withNormalizedOffset:)](xcuielement/coordinate%28withnormalizedoffset_%29.md): Creates and returns a new coordinate with a normalized offset.

### Supporting types

- [XCUIElement.ElementType](xcuielement/elementtype.md): The types of UI elements that you find, inspect, and interact with in a UI test.
- [XCUIElement.SizeClass](xcuielement/sizeclass.md): The user interface size classes you can inspect in a UI test.
- [XCUIElement.AttributeName](xcuielement/attributename.md): A set of string constants that serve as keys for storing element attributes in a dictionary.

### Deprecated methods

- [swipeDown(withVelocity:)](xcuielement/swipedown%28withvelocity_%29.md): Deprecated. Sends a swipe-down gesture with a velocity you specify.
- [swipeUp(withVelocity:)](xcuielement/swipeup%28withvelocity_%29.md): Deprecated. Sends a swipe-up gesture with a velocity you specify.
- [swipeLeft(withVelocity:)](xcuielement/swipeleft%28withvelocity_%29.md): Deprecated. Sends a swipe-left gesture with a velocity you specify.
- [swipeRight(withVelocity:)](xcuielement/swiperight%28withvelocity_%29.md): Deprecated. Sends a swipe-right gesture with a velocity you specify.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [XCUIApplication](xcuiapplication.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [XCUIElementAttributes](xcuielementattributes.md)
- [XCUIElementSnapshotProviding](xcuielementsnapshotproviding.md)
- [XCUIElementTypeQueryProvider](xcuielementtypequeryprovider.md)
- [XCUIScreenshotProviding](xcuiscreenshotproviding.md)

## See Also

### UI elements

- [XCUIElementAttributes](xcuielementattributes.md): Attributes exposed by UI elements.
- [XCUIElementSnapshot](xcuielementsnapshot.md): A set of attributes to express a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUIElementSnapshotProviding](xcuielementsnapshotproviding.md): A method to capture a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUICoordinate](xcuicoordinate.md): A location on screen relative to a UI element.

# XCUIElement (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS · Xcode 16.3+

A UI element in an application.

## Declaration

```objectivec
@interface XCUIElement : NSObject
```

<a id="overview"></a>

## Overview

In macOS and iPadOS 15 and later, [XCUIElement](xcuielement.md) provides a way to test your app with keyboard and mouse interactions, such as typing, clicking, scrolling, and moving and pausing the pointer. In iOS, [XCUIElement](xcuielement.md) provides a way to test your app with gestures, such as tapping, swiping, pinching, and rotating.

> **Note**

>  [XCUIElement](xcuielement.md) adopts the [XCUIElementAttributes](xcuielementattributes.md) protocol, which provides additional properties for querying the current state of a UI element’s attributes.

## Topics

### Querying element state

- [waitForExistenceWithTimeout:](xcuielement/waitforexistence%28timeout_%29.md): Waits the specified amount of time for an element to exist.
- [waitForNonExistenceWithTimeout:](xcuielement/waitfornonexistence%28timeout_%29.md): Waits the specified amount of time for an element to no longer exist.
- [exists](xcuielement/exists.md): Determines if the element exists.
- [hittable](xcuielement/ishittable.md): Determines if the system can compute a hit point for the element.
- [debugDescription](xcuielement/debugdescription.md): Provides debugging information about the element.

### Querying descendant elements

- [childrenMatchingType:](xcuielement/children%28matching_%29.md): Returns a query for all direct children of the element matching the type you specify.
- [descendantsMatchingType:](xcuielement/descendants%28matching_%29.md): Returns a query for all descendants of the element matching the type you specify.

### Typing text

- [typeText:](xcuielement/typetext%28__%29.md): Types a string into the element.

### Combining keystrokes

- [typeKey:modifierFlags:](xcuielement/typekey%28__modifierflags_%29-9ubn.md): Types a single key that a string represents with the flags you specify.
- [XCUIKeyboardKey](xcuikeyboardkey.md): Constants to represent keys that have no typewritten equivalent.
- [performWithKeyModifiers:block:](xcuielement/perform%28withkeymodifiers_block_%29.md): Executes a block of code while holding a combination keystroke.
- [XCUIKeyModifierFlags](xcuielement/keymodifierflags.md): Flags for simulating combination keystrokes with keys, such as Control, Option, Shift, and Command.

### Moving the pointer

- [hover](xcuielement/hover%28%29.md): Moves the pointer over the element.

### Clicking

- [click](xcuielement/click%28%29.md): Sends a click event to a hittable point computed for the element.
- [clickForDuration:thenDragToElement:](xcuielement/click%28forduration_thendragto_%29.md): Clicks and holds an element for a duration you specify, and then drags it to another element.
- [clickForDuration:thenDragToElement:withVelocity:thenHoldForDuration:](xcuielement/click%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Clicks and holds an element for a duration, drags it at a velocity, and holds it over another element for a duration, all of which you specify.
- [doubleClick](xcuielement/doubleclick%28%29.md): Sends a double-click event to a hittable point the system computes for the element.
- [rightClick](xcuielement/rightclick%28%29.md): Sends a Control-click event to a hittable point the system computes for the element.

### Scrolling

- [scrollByDeltaX:deltaY:](xcuielement/scroll%28bydeltax_deltay_%29.md): Scrolls the view by the number of x and y pixels you specify.

### Tapping and pressing

- [tap](xcuielement/tap%28%29.md): Sends a tap event to a hittable point the system computes for the element.
- [doubleTap](xcuielement/doubletap%28%29.md): Sends a double-tap event to a hittable point the system computes for the element.
- [pressForDuration:](xcuielement/press%28forduration_%29.md): Sends a press-and-hold gesture to a hittable point the system computes for the element, holding for the duration you specify.
- [pressForDuration:thenDragToElement:](xcuielement/press%28forduration_thendragto_%29.md): Initiates a press-and-hold gesture, then drags to another element.
- [pressForDuration:thenDragToElement:withVelocity:thenHoldForDuration:](xcuielement/press%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Initiates a press-and-hold gesture, drags to another element at a velocity, and holds for a duration, all of which you specify.

### Tapping multiple times

- [twoFingerTap](xcuielement/twofingertap%28%29.md): Sends a two-finger tap event to a hittable point the system computes for the element.
- [tapWithNumberOfTaps:numberOfTouches:](xcuielement/tap%28withnumberoftaps_numberoftouches_%29.md): Sends one or more taps with one or more touch points.

### Performing gestures

- [swipeLeft](xcuielement/swipeleft%28%29.md): Sends a swipe-left gesture.
- [swipeLeftWithVelocity:](xcuielement/swipeleft%28velocity_%29.md): Sends a swipe-left gesture with a velocity you specify.
- [swipeRight](xcuielement/swiperight%28%29.md): Sends a swipe-right gesture.
- [swipeRightWithVelocity:](xcuielement/swiperight%28velocity_%29.md): Sends a swipe-right gesture with a velocity you specify.
- [swipeUp](xcuielement/swipeup%28%29.md): Sends a swipe-up gesture.
- [swipeUpWithVelocity:](xcuielement/swipeup%28velocity_%29.md): Sends a swipe-up gesture with a velocity you specify.
- [swipeDown](xcuielement/swipedown%28%29.md): Sends a swipe-down gesture.
- [swipeDownWithVelocity:](xcuielement/swipedown%28velocity_%29.md): Sends a swipe-down gesture with a velocity you specify.
- [pinchWithScale:velocity:](xcuielement/pinch%28withscale_velocity_%29.md): Sends a pinching gesture with two touches.
- [rotate:withVelocity:](xcuielement/rotate%28__withvelocity_%29.md): Sends a rotation gesture with two touches.
- [XCUIGestureVelocity](xcuigesturevelocity.md): A value that describes how fast a gesture moves across the screen, in pixels per second.

### Interacting with sliders

- [normalizedSliderPosition](xcuielement/normalizedsliderposition.md): Returns the position of the slider’s indicator as a normalized value.
- [adjustToNormalizedSliderPosition:](xcuielement/adjust%28tonormalizedsliderposition_%29.md): Manipulates the UI to change the value the slider displays to a new value, based on a normalized position.

### Interacting with pickers

- [adjustToPickerWheelValue:](xcuielement/adjust%28topickerwheelvalue_%29.md): Changes the value that the picker wheel displays.

### Calculating coordinates

- [coordinateWithNormalizedOffset:](xcuielement/coordinate%28withnormalizedoffset_%29.md): Creates and returns a new coordinate with a normalized offset.

### Supporting types

- [XCUIElementType](xcuielement/elementtype.md): The types of UI elements that you find, inspect, and interact with in a UI test.
- [XCUIUserInterfaceSizeClass](xcuielement/sizeclass.md): The user interface size classes you can inspect in a UI test.
- [XCUIElementAttributeName](xcuielement/attributename.md): A set of string constants that serve as keys for storing element attributes in a dictionary.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [XCUIApplication](xcuiapplication.md)

### Conforms To

- [XCUIElementAttributes](xcuielementattributes.md)
- [XCUIElementSnapshotProviding](xcuielementsnapshotproviding.md)
- [XCUIElementTypeQueryProvider](xcuielementtypequeryprovider.md)
- [XCUIScreenshotProviding](xcuiscreenshotproviding.md)

## See Also

### UI elements

- [XCUIElementAttributes](xcuielementattributes.md): Attributes exposed by UI elements.
- [XCUIElementSnapshot](xcuielementsnapshot.md): A set of attributes to express a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUIElementSnapshotProviding](xcuielementsnapshotproviding.md): A method to capture a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUICoordinate](xcuicoordinate.md): A location on screen relative to a UI element.
