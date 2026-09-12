> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputsourcedirection](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputsourcedirection)

# GCPhysicalInputSourceDirection (Swift)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The directions that a physical input source involves.

## Declaration

```swift
struct GCPhysicalInputSourceDirection
```

## Topics

### Directions

- [up](gcphysicalinputsourcedirection/up.md): The physical input source contains a value for the up direction.
- [right](gcphysicalinputsourcedirection/right.md): The physical input source supports the right direction.
- [down](gcphysicalinputsourcedirection/down.md): The physical input source supports the down direction.
- [left](gcphysicalinputsourcedirection/left.md): The physical input source supports the left direction.

### Creating the supported directions

- [init(rawValue:)](gcphysicalinputsourcedirection/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

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

### Getting directions

- [direction](gcphysicalinputsource/direction.md): The directional input, if any, that a physical input source involves.

# GCPhysicalInputSourceDirection (Objective-C)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The directions that a physical input source involves.

## Declaration

```objectivec
enum GCPhysicalInputSourceDirection : NSUInteger;
```

## Topics

### Directions

- [GCPhysicalInputSourceDirectionNotApplicable](gcphysicalinputsourcedirection/gcphysicalinputsourcedirectionnotapplicable.md): The physical input source doesn’t support directions.
- [GCPhysicalInputSourceDirectionUp](gcphysicalinputsourcedirection/up.md): The physical input source contains a value for the up direction.
- [GCPhysicalInputSourceDirectionRight](gcphysicalinputsourcedirection/right.md): The physical input source supports the right direction.
- [GCPhysicalInputSourceDirectionDown](gcphysicalinputsourcedirection/down.md): The physical input source supports the down direction.
- [GCPhysicalInputSourceDirectionLeft](gcphysicalinputsourcedirection/left.md): The physical input source supports the left direction.

## See Also

### Getting directions

- [direction](gcphysicalinputsource/direction.md): The directional input, if any, that a physical input source involves.
