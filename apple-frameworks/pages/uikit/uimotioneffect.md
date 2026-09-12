> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimotioneffect](https://developer.apple.com/documentation/uikit/uimotioneffect)

# UIMotionEffect (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An abstract superclass for defining motion-based modifiers for views.

## Declaration

```swift
@MainActor class UIMotionEffect
```

<a id="overview"></a>

## Overview

Subclasses of [UIMotionEffect](uimotioneffect.md) are responsible for defining the behavior to apply to a view when motion is detected. They do this by overriding the [keyPathsAndRelativeValues(forViewerOffset:)](uimotioneffect/keypathsandrelativevalues%28forvieweroffset_%29.md) method and returning one or more key paths representing the view properties to modify.

<a id="Subclassing-notes"></a>

### Subclassing notes

This class is abstract and can’t be instantiated directly. You can use the [UIInterpolatingMotionEffect](uiinterpolatingmotioneffect.md) class to implement effects or you can subclass and implement your own effects. If you subclass, your subclass must conform to the [NSCopying](../foundation/nscopying.md) and [NSCoding](../foundation/nscoding.md) protocols and must implement the [keyPathsAndRelativeValues(forViewerOffset:)](uimotioneffect/keypathsandrelativevalues%28forvieweroffset_%29.md) method.

## Topics

### Initializing a motion effect

- [init()](uimotioneffect/init%28%29.md): Initializes the motion effect to its default state.
- [init(coder:)](uimotioneffect/init%28coder_%29.md): Creates a motion effect from data in an unarchiver.

### Getting the key paths

- [keyPathsAndRelativeValues(forViewerOffset:)](uimotioneffect/keypathsandrelativevalues%28forvieweroffset_%29.md): For a given set of offset values, returns the view properties (and corresponding values) to update.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIInterpolatingMotionEffect](uiinterpolatingmotioneffect.md)
- [UIMotionEffectGroup](uimotioneffectgroup.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# UIMotionEffect (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An abstract superclass for defining motion-based modifiers for views.

## Declaration

```objectivec
@interface UIMotionEffect : NSObject
```

<a id="overview"></a>

## Overview

Subclasses of [UIMotionEffect](uimotioneffect.md) are responsible for defining the behavior to apply to a view when motion is detected. They do this by overriding the [keyPathsAndRelativeValuesForViewerOffset:](uimotioneffect/keypathsandrelativevalues%28forvieweroffset_%29.md) method and returning one or more key paths representing the view properties to modify.

<a id="Subclassing-notes"></a>

### Subclassing notes

This class is abstract and can’t be instantiated directly. You can use the [UIInterpolatingMotionEffect](uiinterpolatingmotioneffect.md) class to implement effects or you can subclass and implement your own effects. If you subclass, your subclass must conform to the [NSCopying](../foundation/nscopying.md) and [NSCoding](../foundation/nscoding.md) protocols and must implement the [keyPathsAndRelativeValuesForViewerOffset:](uimotioneffect/keypathsandrelativevalues%28forvieweroffset_%29.md) method.

## Topics

### Initializing a motion effect

- [init](uimotioneffect/init%28%29.md): Initializes the motion effect to its default state.
- [initWithCoder:](uimotioneffect/init%28coder_%29.md): Creates a motion effect from data in an unarchiver.

### Getting the key paths

- [keyPathsAndRelativeValuesForViewerOffset:](uimotioneffect/keypathsandrelativevalues%28forvieweroffset_%29.md): For a given set of offset values, returns the view properties (and corresponding values) to update.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [UIInterpolatingMotionEffect](uiinterpolatingmotioneffect.md)
- [UIMotionEffectGroup](uimotioneffectgroup.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
