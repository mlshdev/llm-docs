> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitylocationdescriptor](https://developer.apple.com/documentation/uikit/uiaccessibilitylocationdescriptor)

# UIAccessibilityLocationDescriptor (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An accessibility descriptor for a specific geometric point of interest within a view, for use by assistive apps.

## Declaration

```swift
@MainActor class UIAccessibilityLocationDescriptor
```

## Topics

### Initializing the descriptor

- [init(attributedName:point:in:)](uiaccessibilitylocationdescriptor/init%28attributedname_point_in_%29.md): Initializes a new accessibility location descriptor using an attributed string and a specified point in a view.
- [init(name:point:in:)](uiaccessibilitylocationdescriptor/init%28name_point_in_%29.md): Initializes a new accessibility location descriptor with a specified point in a view.
- [init(name:view:)](uiaccessibilitylocationdescriptor/init%28name_view_%29.md): Initializes a new accessibility location descriptor with a specified view’s activation point.

### Getting the descriptor information

- [name](uiaccessibilitylocationdescriptor/name.md): Returns the plaintext string representation of the name for the accessibility location descriptor.
- [attributedName](uiaccessibilitylocationdescriptor/attributedname.md): Returns the attributed string representation of the name for the accessibility location descriptor.
- [point](uiaccessibilitylocationdescriptor/point.md): Returns the geometric point of interest for the accessibility location descriptor within its associated view and in the coordinate space of the view.
- [view](uiaccessibilitylocationdescriptor/view.md): Returns the view associated with the accessibility location descriptor.

### Initializers

- [init(attributedName:point:inView:)](uiaccessibilitylocationdescriptor/init%28attributedname_point_inview_%29.md)
- [init(name:point:inView:)](uiaccessibilitylocationdescriptor/init%28name_point_inview_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

# UIAccessibilityLocationDescriptor (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An accessibility descriptor for a specific geometric point of interest within a view, for use by assistive apps.

## Declaration

```objectivec
@interface UIAccessibilityLocationDescriptor : NSObject
```

## Topics

### Initializing the descriptor

- [initWithAttributedName:point:inView:](uiaccessibilitylocationdescriptor/init%28attributedname_point_in_%29.md): Initializes a new accessibility location descriptor using an attributed string and a specified point in a view.
- [initWithName:point:inView:](uiaccessibilitylocationdescriptor/init%28name_point_in_%29.md): Initializes a new accessibility location descriptor with a specified point in a view.
- [initWithName:view:](uiaccessibilitylocationdescriptor/init%28name_view_%29.md): Initializes a new accessibility location descriptor with a specified view’s activation point.

### Getting the descriptor information

- [name](uiaccessibilitylocationdescriptor/name.md): Returns the plaintext string representation of the name for the accessibility location descriptor.
- [attributedName](uiaccessibilitylocationdescriptor/attributedname.md): Returns the attributed string representation of the name for the accessibility location descriptor.
- [point](uiaccessibilitylocationdescriptor/point.md): Returns the geometric point of interest for the accessibility location descriptor within its associated view and in the coordinate space of the view.
- [view](uiaccessibilitylocationdescriptor/view.md): Returns the view associated with the accessibility location descriptor.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
