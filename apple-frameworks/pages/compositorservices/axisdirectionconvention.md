> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/axisdirectionconvention](https://developer.apple.com/documentation/compositorservices/axisdirectionconvention)

# AxisDirectionConvention (Swift)

**Framework:** Compositor Services  
**Kind:** Enumeration  
**Availability:** macOS 26.0+ · visionOS 2.0+

Constants that indicate the axis and direction to use for a perspective projection matrix.

## Declaration

```swift
enum AxisDirectionConvention
```

## Topics

### Getting the axis directions

- [AxisDirectionConvention.rightUpBack](axisdirectionconvention/rightupback.md): The convention that uses a counterclockwise winding order and positions the leading pixel at the top-left corner of the view.
- [AxisDirectionConvention.rightUpForward](axisdirectionconvention/rightupforward.md): The convention that uses a clockwise winding order and positions the leading pixel at the top-left corner of the view.
- [AxisDirectionConvention.rightDownBack](axisdirectionconvention/rightdownback.md): The convention that uses a counterclockwise winding order and positions the leading pixel at the bottom-left corner of the view.
- [AxisDirectionConvention.rightDownForward](axisdirectionconvention/rightdownforward.md): The convention that uses a clockwise winding order and positions the leading pixel at the bottom-left corner of the view.

### Initializers

- [init(rawValue:)](axisdirectionconvention/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# cp_axis_direction_convention (Objective-C)

**Framework:** Compositor Services  
**Kind:** Enumeration  
**Availability:** macOS 26.0+ · visionOS 2.0+

Constants that indicate the axis and direction to use for a perspective projection matrix.

## Declaration

```objectivec
enum cp_axis_direction_convention : uint8_t;
```

## Topics

### Getting the axis directions

- [cp_axis_direction_convention_right_up_back](axisdirectionconvention/rightupback.md): The convention that uses a counterclockwise winding order and positions the leading pixel at the top-left corner of the view.
- [cp_axis_direction_convention_right_up_forward](axisdirectionconvention/rightupforward.md): The convention that uses a clockwise winding order and positions the leading pixel at the top-left corner of the view.
- [cp_axis_direction_convention_right_down_back](axisdirectionconvention/rightdownback.md): The convention that uses a counterclockwise winding order and positions the leading pixel at the bottom-left corner of the view.
- [cp_axis_direction_convention_right_down_forward](axisdirectionconvention/rightdownforward.md): The convention that uses a clockwise winding order and positions the leading pixel at the bottom-left corner of the view.
