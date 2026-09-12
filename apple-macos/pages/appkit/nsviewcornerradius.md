> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewcornerradius](https://developer.apple.com/documentation/appkit/nsviewcornerradius)

# NSViewCornerRadius (Swift)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Represents a radius used to round a corner. It supports fixed and adaptive configurations.

## Declaration

```swift
class NSViewCornerRadius
```

## Topics

### Type Properties

- [containerConcentric](nsviewcornerradius/containerconcentric.md): A dynamic corner radius calculated based on the view’s container shape.

### Type Methods

- [containerConcentric(\_:)](nsviewcornerradius/containerconcentric%28__%29.md): A dynamic corner radius calculated based on the view’s container shape and limited to the provided minimum radius.
- [fixed(\_:)](nsviewcornerradius/fixed%28__%29.md): Shorthand initializer for a configuration where all four corners are using a fixed corner radius in points.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Corner configuration

- [NSViewCornerConfiguration](nsviewcornerconfiguration.md): A configuration object that defines the corner styles of a view’s overall shape.
- [NSViewCornerRadii](nsviewcornerradii.md): Provides a structured way to define custom corner radii for each corner of a view, along with a corner curve.

# NSViewCornerRadius (Objective-C)

**Framework:** AppKit  
**Kind:** Class  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Represents a radius used to round a corner. It supports fixed and adaptive configurations.

## Declaration

```objectivec
@interface NSViewCornerRadius : NSObject
```

## Topics

### Type Properties

- [containerConcentricRadius](nsviewcornerradius/containerconcentric.md): A dynamic corner radius calculated based on the view’s container shape.

### Type Methods

- [containerConcentricRadiusWithMinimum:](nsviewcornerradius/containerconcentric%28__%29.md): A dynamic corner radius calculated based on the view’s container shape and limited to the provided minimum radius.
- [fixedRadius:](nsviewcornerradius/fixed%28__%29.md): Shorthand initializer for a configuration where all four corners are using a fixed corner radius in points.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Corner configuration

- [NSViewCornerConfiguration](nsviewcornerconfiguration.md): A configuration object that defines the corner styles of a view’s overall shape.
- [NSViewCornerRadii](nsviewcornerradii.md): Provides a structured way to define custom corner radii for each corner of a view, along with a corner curve.
