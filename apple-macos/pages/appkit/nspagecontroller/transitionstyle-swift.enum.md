> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontroller/transitionstyle-swift.enum](https://developer.apple.com/documentation/appkit/nspagecontroller/transitionstyle-swift.enum)

# NSPageController.TransitionStyle (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.8+

These constants control the transition style of the page controller.

## Declaration

```swift
enum TransitionStyle
```

<a id="overview"></a>

## Overview

These transition styles are independent of the delegate’s specification of book or history mode. It is perfectly reasonable to create a history style user interface using the book mode delegate methods. Simply set the transition style appropriately.

## Topics

### Constants

- [NSPageController.TransitionStyle.stackHistory](transitionstyle-swift.enum/stackhistory.md): Pages are stacked on top of each other. Pages animate out to the right to reveal the previous page. Next pages animate in from the right.
- [NSPageController.TransitionStyle.stackBook](transitionstyle-swift.enum/stackbook.md): Pages are stacked on top of each other. Pages animate out to the left to reveal the next page. Previous pages animate in from the left.
- [NSPageController.TransitionStyle.horizontalStrip](transitionstyle-swift.enum/horizontalstrip.md): Each page is laid out next to each other in one long horizontal strip

### Initializers

- [init(rawValue:)](transitionstyle-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSPageControllerTransitionStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.8+

These constants control the transition style of the page controller.

## Declaration

```objectivec
enum NSPageControllerTransitionStyle : NSInteger;
```

<a id="overview"></a>

## Overview

These transition styles are independent of the delegate’s specification of book or history mode. It is perfectly reasonable to create a history style user interface using the book mode delegate methods. Simply set the transition style appropriately.

## Topics

### Constants

- [NSPageControllerTransitionStyleStackHistory](transitionstyle-swift.enum/stackhistory.md): Pages are stacked on top of each other. Pages animate out to the right to reveal the previous page. Next pages animate in from the right.
- [NSPageControllerTransitionStyleStackBook](transitionstyle-swift.enum/stackbook.md): Pages are stacked on top of each other. Pages animate out to the left to reveal the next page. Previous pages animate in from the left.
- [NSPageControllerTransitionStyleHorizontalStrip](transitionstyle-swift.enum/horizontalstrip.md): Each page is laid out next to each other in one long horizontal strip
