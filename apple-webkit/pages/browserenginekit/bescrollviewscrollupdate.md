> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bescrollviewscrollupdate](https://developer.apple.com/documentation/browserenginekit/bescrollviewscrollupdate)

# BEScrollViewScrollUpdate (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

An object that describes a change in a scroll view’s scroll state.

## Declaration

```swift
@MainActor class BEScrollViewScrollUpdate
```

<a id="overview"></a>

## Overview

When a person scrolls a [BEScrollView](bescrollview.md), the system calls the view’s delegate’s [scrollView(\_:handle:completion:)](bescrollviewdelegate/scrollview%28__handle_completion_%29.md) method with an instance of this class as the `handle` parameter. Your app can continue to receive `BEScrollViewScrollUpdate` objects after the person completes their scroll gesture, as the scroll decelerates.

> **Important**

>  `BEScrollViewScrollUpdate` isn’t thread-safe, and the system reuses the same object for multiple scroll updates. Retrieve all information you need from a scroll update immediately on the main queue before any further processing.

## Topics

### Retrieving scroll state information

- [timestamp](bescrollviewscrollupdate/timestamp.md): The time at which a scroll update occurs.
- [phase](bescrollviewscrollupdate/phase-swift.property.md): A value that indicates the scroll update’s position in the scrolling life cycle.
- [BEScrollViewScrollUpdate.Phase](bescrollviewscrollupdate/phase-swift.enum.md): Phases in the scroll gesture life cycle.

### Transforming coordinates

- [location(in:)](bescrollviewscrollupdate/location%28in_%29.md): Returns the location of the scroll update in the coordinate system of the given view.
- [translation(in:)](bescrollviewscrollupdate/translation%28in_%29.md): Returns the scroll displacement in the coordinate system of the view that the update represents.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Scroll view interaction

- [BEScrollView](bescrollview.md): A scroll view that works with its delegate to handle nesting and customize scroll interactions.
- [BEScrollViewDelegate](bescrollviewdelegate.md): A protocol for scroll view delegates to handle scroll updates and DOM nesting.

# BEScrollViewScrollUpdate (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

An object that describes a change in a scroll view’s scroll state.

## Declaration

```objectivec
@interface BEScrollViewScrollUpdate : NSObject
```

<a id="overview"></a>

## Overview

When a person scrolls a [BEScrollView](bescrollview.md), the system calls the view’s delegate’s [scrollView:handleScrollUpdate:completion:](bescrollviewdelegate/scrollview%28__handle_completion_%29.md) method with an instance of this class as the `handle` parameter. Your app can continue to receive `BEScrollViewScrollUpdate` objects after the person completes their scroll gesture, as the scroll decelerates.

> **Important**

>  `BEScrollViewScrollUpdate` isn’t thread-safe, and the system reuses the same object for multiple scroll updates. Retrieve all information you need from a scroll update immediately on the main queue before any further processing.

## Topics

### Retrieving scroll state information

- [timestamp](bescrollviewscrollupdate/timestamp.md): The time at which a scroll update occurs.
- [phase](bescrollviewscrollupdate/phase-swift.property.md): A value that indicates the scroll update’s position in the scrolling life cycle.
- [BEScrollViewScrollUpdatePhase](bescrollviewscrollupdate/phase-swift.enum.md): Phases in the scroll gesture life cycle.

### Transforming coordinates

- [locationInView:](bescrollviewscrollupdate/location%28in_%29.md): Returns the location of the scroll update in the coordinate system of the given view.
- [translationInView:](bescrollviewscrollupdate/translation%28in_%29.md): Returns the scroll displacement in the coordinate system of the view that the update represents.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Scroll view interaction

- [BEScrollView](bescrollview.md): A scroll view that works with its delegate to handle nesting and customize scroll interactions.
- [BEScrollViewDelegate](bescrollviewdelegate.md): A protocol for scroll view delegates to handle scroll updates and DOM nesting.
