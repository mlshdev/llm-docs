> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouch/touchtype](https://developer.apple.com/documentation/appkit/nstouch/touchtype)

# NSTouch.TouchType (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.12.2+

A bit mask identifying a direct or indirect touch type.

## Declaration

```swift
enum TouchType
```

## Topics

### Touch Types

- [NSTouch.TouchType.direct](touchtype/direct.md): A direct touch from a user’s finger on a screen.
- [NSTouch.TouchType.indirect](touchtype/indirect.md): An indirect touch that is not on a screen, like a digitizer touch.

### Initializers

- [init(rawValue:)](touchtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the Touch Type

- [type](type.md): A type of touch from a Touch Bar interaction.
- [NSTouch.TouchTypeMask](touchtypemask.md): A bit mask identifying a direct or indirect touch type.

# NSTouchType (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.12.2+

A bit mask identifying a direct or indirect touch type.

## Declaration

```objectivec
enum NSTouchType : NSInteger;
```

## Topics

### Touch Types

- [NSTouchTypeDirect](touchtype/direct.md): A direct touch from a user’s finger on a screen.
- [NSTouchTypeIndirect](touchtype/indirect.md): An indirect touch that is not on a screen, like a digitizer touch.

## See Also

### Getting the Touch Type

- [type](type.md): A type of touch from a Touch Bar interaction.
- [NSTouchTypeMask](touchtypemask.md): A bit mask identifying a direct or indirect touch type.
