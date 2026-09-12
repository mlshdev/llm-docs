> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccolor](https://developer.apple.com/documentation/gamecontroller/gccolor)

# GCColor (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The color of a device light.

## Declaration

```swift
class GCColor
```

## Topics

### Creating colors

- [init(red:green:blue:)](gccolor/init%28red_green_blue_%29.md): Creates a color with the specified red, green, and blue values.

### Setting color values

- [red](gccolor/red.md): The normalized value of the red component ranging from 0 to 1.
- [green](gccolor/green.md): The normalized value of the green component ranging from 0 to 1.
- [blue](gccolor/blue.md): The normalized value of the blue component ranging from 0 to 1.

### Initializers

- [init(coder:)](gccolor/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Getting the light’s color

- [color](gcdevicelight/color.md): The color of a device’s light.

# GCColor (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The color of a device light.

## Declaration

```objectivec
@interface GCColor : NSObject
```

## Topics

### Creating colors

- [initWithRed:green:blue:](gccolor/init%28red_green_blue_%29.md): Creates a color with the specified red, green, and blue values.

### Setting color values

- [red](gccolor/red.md): The normalized value of the red component ranging from 0 to 1.
- [green](gccolor/green.md): The normalized value of the green component ranging from 0 to 1.
- [blue](gccolor/blue.md): The normalized value of the blue component ranging from 0 to 1.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Getting the light’s color

- [color](gcdevicelight/color.md): The color of a device’s light.
