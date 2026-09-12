> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstouch/touchtypemask](https://developer.apple.com/documentation/appkit/nstouch/touchtypemask)

# NSTouch.TouchTypeMask (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.12.2+

A bit mask identifying a direct or indirect touch type.

## Declaration

```swift
struct TouchTypeMask
```

## Topics

### Creating a Touch Type Mask

- [init(type:)](touchtypemask/init%28type_%29.md): Creates a new touch type mask from the touch type.
- [init(rawValue:)](touchtypemask/init%28rawvalue_%29.md): Creates a new touch type mask from the given raw value.

### Masking the Touch Types

- [direct](touchtypemask/direct.md): A direct touch from a user’s finger on a screen.
- [indirect](touchtypemask/indirect.md): An indirect touch that is not on a screen, like a digitizer touch.

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

### Getting the Touch Type

- [type](type.md): A type of touch from a Touch Bar interaction.
- [NSTouch.TouchType](touchtype.md): A bit mask identifying a direct or indirect touch type.

# NSTouchTypeMask (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.12.2+

A bit mask identifying a direct or indirect touch type.

## Declaration

```objectivec
enum NSTouchTypeMask : NSUInteger;
```

## Topics

### Creating a Touch Type Mask

- [NSTouchTypeMaskFromType](touchtypemask/init%28type_%29.md): Creates a new touch type mask from the touch type.

### Masking the Touch Types

- [NSTouchTypeMaskDirect](touchtypemask/direct.md): A direct touch from a user’s finger on a screen.
- [NSTouchTypeMaskIndirect](touchtypemask/indirect.md): An indirect touch that is not on a screen, like a digitizer touch.

## See Also

### Getting the Touch Type

- [type](type.md): A type of touch from a Touch Bar interaction.
- [NSTouchType](touchtype.md): A bit mask identifying a direct or indirect touch type.
