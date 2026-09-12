> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xcuiautomation/xcuicoordinate](https://developer.apple.com/documentation/xcuiautomation/xcuicoordinate)

# XCUICoordinate (Swift)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

A location on screen relative to a UI element.

## Declaration

```swift
@MainActor class XCUICoordinate
```

<a id="overview"></a>

## Overview

Coordinates are dynamic, like the elements to which they refer, and may compute different screen locations at different times, or be invalid if the element they reference doesn’t exist.

## Topics

### Getting coordinate properties

- [referencedElement](xcuicoordinate/referencedelement.md): The element that the coordinate is based on, either directly or through the coordinate from which it was derived.
- [screenPoint](xcuicoordinate/screenpoint.md): The dynamically computed value of the coordinate’s location on screen.

### Moving the pointer

- [hover()](xcuicoordinate/hover%28%29.md): Moves the pointer to the coordinate.

### Clicking

- [click()](xcuicoordinate/click%28%29.md): Sends a click event at the coordinate.
- [click(forDuration:thenDragTo:)](xcuicoordinate/click%28forduration_thendragto_%29.md): Clicks and holds for a duration you specify, then drags to the other coordinate.
- [click(forDuration:thenDragTo:withVelocity:thenHoldForDuration:)](xcuicoordinate/click%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Clicks and holds for a duration, drags at a velocity, and holds over the other coordinate for a duration, all of which you specify.
- [doubleClick()](xcuicoordinate/doubleclick%28%29.md): Sends a double-click event at the coordinate.
- [rightClick()](xcuicoordinate/rightclick%28%29.md): Sends a Control-click event at the coordinate.

### Scrolling

- [scroll(byDeltaX:deltaY:)](xcuicoordinate/scroll%28bydeltax_deltay_%29.md): Scrolls the view by the number of x and y pixels you specify.

### Tapping and pressing

- [tap()](xcuicoordinate/tap%28%29.md): Sends a tap event at the coordinate.
- [doubleTap()](xcuicoordinate/doubletap%28%29.md): Sends a double-tap event at the coordinate.
- [press(forDuration:)](xcuicoordinate/press%28forduration_%29.md): Initiates a press-and-hold gesture at the coordinate, holding for the duration you specify.
- [press(forDuration:thenDragTo:)](xcuicoordinate/press%28forduration_thendragto_%29.md): Initiates a press-and-hold gesture at the coordinate, then drags to another coordinate.
- [press(forDuration:thenDragTo:withVelocity:thenHoldForDuration:)](xcuicoordinate/press%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Initiates a press-and-hold gesture, drags to another coordinate with a velocity you specify, and holds for a duration you specify.

### Performing gestures

- [swipeLeft()](xcuicoordinate/swipeleft%28%29.md): Sends a swipe-left gesture.
- [swipeLeft(velocity:)](xcuicoordinate/swipeleft%28velocity_%29.md): Sends a swipe-left gesture with a velocity you specify.
- [swipeRight()](xcuicoordinate/swiperight%28%29.md): Sends a swipe-right gesture.
- [swipeRight(velocity:)](xcuicoordinate/swiperight%28velocity_%29.md): Sends a swipe-right gesture with a velocity you specify.
- [swipeUp()](xcuicoordinate/swipeup%28%29.md): Sends a swipe-up gesture.
- [swipeUp(velocity:)](xcuicoordinate/swipeup%28velocity_%29.md): Sends a swipe-up gesture with a velocity you specify.
- [swipeDown()](xcuicoordinate/swipedown%28%29.md): Sends a swipe-down gesture.
- [swipeDown(velocity:)](xcuicoordinate/swipedown%28velocity_%29.md): Sends a swipe-down gesture with a velocity you specify.

### Creating relative coordinates

- [withOffset(\_:)](xcuicoordinate/withoffset%28__%29.md): Creates a new coordinate with an absolute offset in points from the original coordinate.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### UI elements

- [XCUIElement](xcuielement.md): A UI element in an application.
- [XCUIElementAttributes](xcuielementattributes.md): Attributes exposed by UI elements.
- [XCUIElementSnapshot](xcuielementsnapshot.md): A set of attributes to express a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUIElementSnapshotProviding](xcuielementsnapshotproviding.md): A method to capture a snapshot of an element’s attributes and descendant user interface hierarchy.

# XCUICoordinate (Objective-C)

**Framework:** XCUIAutomation  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS · Xcode 16.3+

A location on screen relative to a UI element.

## Declaration

```objectivec
@interface XCUICoordinate : NSObject
```

<a id="overview"></a>

## Overview

Coordinates are dynamic, like the elements to which they refer, and may compute different screen locations at different times, or be invalid if the element they reference doesn’t exist.

## Topics

### Getting coordinate properties

- [referencedElement](xcuicoordinate/referencedelement.md): The element that the coordinate is based on, either directly or through the coordinate from which it was derived.
- [screenPoint](xcuicoordinate/screenpoint.md): The dynamically computed value of the coordinate’s location on screen.

### Moving the pointer

- [hover](xcuicoordinate/hover%28%29.md): Moves the pointer to the coordinate.

### Clicking

- [click](xcuicoordinate/click%28%29.md): Sends a click event at the coordinate.
- [clickForDuration:thenDragToCoordinate:](xcuicoordinate/click%28forduration_thendragto_%29.md): Clicks and holds for a duration you specify, then drags to the other coordinate.
- [clickForDuration:thenDragToCoordinate:withVelocity:thenHoldForDuration:](xcuicoordinate/click%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Clicks and holds for a duration, drags at a velocity, and holds over the other coordinate for a duration, all of which you specify.
- [doubleClick](xcuicoordinate/doubleclick%28%29.md): Sends a double-click event at the coordinate.
- [rightClick](xcuicoordinate/rightclick%28%29.md): Sends a Control-click event at the coordinate.

### Scrolling

- [scrollByDeltaX:deltaY:](xcuicoordinate/scroll%28bydeltax_deltay_%29.md): Scrolls the view by the number of x and y pixels you specify.

### Tapping and pressing

- [tap](xcuicoordinate/tap%28%29.md): Sends a tap event at the coordinate.
- [doubleTap](xcuicoordinate/doubletap%28%29.md): Sends a double-tap event at the coordinate.
- [pressForDuration:](xcuicoordinate/press%28forduration_%29.md): Initiates a press-and-hold gesture at the coordinate, holding for the duration you specify.
- [pressForDuration:thenDragToCoordinate:](xcuicoordinate/press%28forduration_thendragto_%29.md): Initiates a press-and-hold gesture at the coordinate, then drags to another coordinate.
- [pressForDuration:thenDragToCoordinate:withVelocity:thenHoldForDuration:](xcuicoordinate/press%28forduration_thendragto_withvelocity_thenholdforduration_%29.md): Initiates a press-and-hold gesture, drags to another coordinate with a velocity you specify, and holds for a duration you specify.

### Performing gestures

- [swipeLeft](xcuicoordinate/swipeleft%28%29.md): Sends a swipe-left gesture.
- [swipeLeftWithVelocity:](xcuicoordinate/swipeleft%28velocity_%29.md): Sends a swipe-left gesture with a velocity you specify.
- [swipeRight](xcuicoordinate/swiperight%28%29.md): Sends a swipe-right gesture.
- [swipeRightWithVelocity:](xcuicoordinate/swiperight%28velocity_%29.md): Sends a swipe-right gesture with a velocity you specify.
- [swipeUp](xcuicoordinate/swipeup%28%29.md): Sends a swipe-up gesture.
- [swipeUpWithVelocity:](xcuicoordinate/swipeup%28velocity_%29.md): Sends a swipe-up gesture with a velocity you specify.
- [swipeDown](xcuicoordinate/swipedown%28%29.md): Sends a swipe-down gesture.
- [swipeDownWithVelocity:](xcuicoordinate/swipedown%28velocity_%29.md): Sends a swipe-down gesture with a velocity you specify.

### Creating relative coordinates

- [coordinateWithOffset:](xcuicoordinate/withoffset%28__%29.md): Creates a new coordinate with an absolute offset in points from the original coordinate.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### UI elements

- [XCUIElement](xcuielement.md): A UI element in an application.
- [XCUIElementAttributes](xcuielementattributes.md): Attributes exposed by UI elements.
- [XCUIElementSnapshot](xcuielementsnapshot.md): A set of attributes to express a snapshot of an element’s attributes and descendant user interface hierarchy.
- [XCUIElementSnapshotProviding](xcuielementsnapshotproviding.md): A method to capture a snapshot of an element’s attributes and descendant user interface hierarchy.
