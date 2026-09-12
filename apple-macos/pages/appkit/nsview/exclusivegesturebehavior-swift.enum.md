> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/exclusivegesturebehavior-swift.enum](https://developer.apple.com/documentation/appkit/nsview/exclusivegesturebehavior-swift.enum)

# NSView.ExclusiveGestureBehavior (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

Exclusive gesture behavior

## Declaration

```swift
enum ExclusiveGestureBehavior
```

<a id="overview"></a>

## Overview

See the `exclusiveGestureBehavior` property of `NSView` more information.

## Topics

### Getting exclusivity values

- [NSView.ExclusiveGestureBehavior.exclusive](exclusivegesturebehavior-swift.enum/exclusive.md): This view and its subviews have exclusive gestures
- [NSView.ExclusiveGestureBehavior.inherit](exclusivegesturebehavior-swift.enum/inherit.md): Inherit from superview
- [NSView.ExclusiveGestureBehavior.notExclusive](exclusivegesturebehavior-swift.enum/notexclusive.md): This view and its subviews do not have exclusive gestures

### Initializers

- [init(rawValue:)](exclusivegesturebehavior-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing gesture exclusivity

- [exclusiveGestureBehavior](exclusivegesturebehavior-swift.property.md): Declares whether gesture recognizers should be exclusive in this view and its subviews.

# NSViewExclusiveGestureBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

Exclusive gesture behavior

## Declaration

```objectivec
enum NSViewExclusiveGestureBehavior : NSInteger;
```

<a id="overview"></a>

## Overview

See the `exclusiveGestureBehavior` property of `NSView` more information.

## Topics

### Getting exclusivity values

- [NSViewExclusiveGestureBehaviorExclusive](exclusivegesturebehavior-swift.enum/exclusive.md): This view and its subviews have exclusive gestures
- [NSViewExclusiveGestureBehaviorInherit](exclusivegesturebehavior-swift.enum/inherit.md): Inherit from superview
- [NSViewExclusiveGestureBehaviorNotExclusive](exclusivegesturebehavior-swift.enum/notexclusive.md): This view and its subviews do not have exclusive gestures

## See Also

### Managing gesture exclusivity

- [exclusiveGestureBehavior](exclusivegesturebehavior-swift.property.md): Declares whether gesture recognizers should be exclusive in this view and its subviews.
