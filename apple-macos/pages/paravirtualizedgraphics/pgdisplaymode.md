> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplaymode](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplaymode)

# PGDisplayMode (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A description of a supported display mode.

## Declaration

```swift
class PGDisplayMode
```

## Topics

### Creating a Display Mode

- [init(sizeInPixels:refreshRateInHz:)](pgdisplaymode/init%28sizeinpixels_refreshrateinhz_%29.md): Creates a new display mode.

### Inspecting Mode Properties

- [sizeInPixels](pgdisplaymode/sizeinpixels.md): The display mode’s dimensions in pixels.
- [refreshRate](pgdisplaymode/refreshrate.md): The mode’s refresh rate.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Displays

- [PGDisplayDescriptor](pgdisplaydescriptor.md): A descriptor for a virtual display.
- [PGDisplay](pgdisplay.md): An object that provides display functionality to the guest operating system in a way that the host-side virtual machine app can intercept.
- [PGDisplayCoord_t](pgdisplaycoord_t.md): Coordinates that describe sizes or offsets within a 2D array of pixels.

# PGDisplayMode (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

A description of a supported display mode.

## Declaration

```objectivec
@interface PGDisplayMode : NSObject
```

## Topics

### Creating a Display Mode

- [initWithSizeInPixels:refreshRateInHz:](pgdisplaymode/init%28sizeinpixels_refreshrateinhz_%29.md): Creates a new display mode.

### Inspecting Mode Properties

- [sizeInPixels](pgdisplaymode/sizeinpixels.md): The display mode’s dimensions in pixels.
- [refreshRate](pgdisplaymode/refreshrate.md): The mode’s refresh rate.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Displays

- [PGDisplayDescriptor](pgdisplaydescriptor.md): A descriptor for a virtual display.
- [PGDisplay](pgdisplay.md): An object that provides display functionality to the guest operating system in a way that the host-side virtual machine app can intercept.
- [PGDisplayCoord_t](pgdisplaycoord_t.md): Coordinates that describe sizes or offsets within a 2D array of pixels.
