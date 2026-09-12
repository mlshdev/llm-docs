> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusheading](https://developer.apple.com/documentation/uikit/uifocusheading)

# UIFocusHeading (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The general type of an event.

## Declaration

```swift
struct UIFocusHeading
```

<a id="overview"></a>

## Overview

You obtain the direction of the focus from the [focusHeading](uifocusupdatecontext/focusheading.md) property.

## Topics

### Constants

- [up](uifocusheading/up.md): The focus update is heading in the up direction.
- [down](uifocusheading/down.md): The focus update is heading in the down direction.
- [left](uifocusheading/left.md): The focus update is heading in the left direction.
- [right](uifocusheading/right.md): The focus update is heading in the right direction.
- [next](uifocusheading/next.md): The focus update is heading to the next item.
- [previous](uifocusheading/previous.md): The focus update is heading to the previous item.
- [first](uifocusheading/first.md): The focus update is heading to the first item.
- [last](uifocusheading/last.md): The focus update is heading to the last item.

### Initializers

- [init(rawValue:)](uifocusheading/init%28rawvalue_%29.md): Creates a focus heading structure with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Locating focus direction

- [previouslyFocusedView](uifocusupdatecontext/previouslyfocusedview.md): The view that was focused before the focus update.
- [nextFocusedView](uifocusupdatecontext/nextfocusedview.md): The view that takes the focus after the focus update.
- [focusHeading](uifocusupdatecontext/focusheading.md): The heading in which the focus update is occurring.

# UIFocusHeading (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The general type of an event.

## Declaration

```objectivec
enum UIFocusHeading : NSUInteger;
```

<a id="overview"></a>

## Overview

You obtain the direction of the focus from the [focusHeading](uifocusupdatecontext/focusheading.md) property.

## Topics

### Constants

- [UIFocusHeadingNone](uifocusheading/uifocusheadingnone.md): No focus update heading.
- [UIFocusHeadingUp](uifocusheading/up.md): The focus update is heading in the up direction.
- [UIFocusHeadingDown](uifocusheading/down.md): The focus update is heading in the down direction.
- [UIFocusHeadingLeft](uifocusheading/left.md): The focus update is heading in the left direction.
- [UIFocusHeadingRight](uifocusheading/right.md): The focus update is heading in the right direction.
- [UIFocusHeadingNext](uifocusheading/next.md): The focus update is heading to the next item.
- [UIFocusHeadingPrevious](uifocusheading/previous.md): The focus update is heading to the previous item.
- [UIFocusHeadingFirst](uifocusheading/first.md): The focus update is heading to the first item.
- [UIFocusHeadingLast](uifocusheading/last.md): The focus update is heading to the last item.

## See Also

### Locating focus direction

- [previouslyFocusedView](uifocusupdatecontext/previouslyfocusedview.md): The view that was focused before the focus update.
- [nextFocusedView](uifocusupdatecontext/nextfocusedview.md): The view that takes the focus after the focus update.
- [focusHeading](uifocusupdatecontext/focusheading.md): The heading in which the focus update is occurring.
