> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplaycoord_t](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplaycoord_t)

# PGDisplayCoord_t (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Structure  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Coordinates that describe sizes or offsets within a 2D array of pixels.

## Declaration

```swift
struct PGDisplayCoord_t
```

## Topics

### Creating Display Coordinates

- [init()](pgdisplaycoord_t/init%28%29.md): Initializes a default display coordinate.
- [init(x:y:)](pgdisplaycoord_t/init%28x_y_%29.md): Initializes a coordinate.

### Inspecting Coordinate Values

- [x](pgdisplaycoord_t/x.md): The horizontal coordinate value.
- [y](pgdisplaycoord_t/y.md): The vertical coordinate value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Displays

- [PGDisplayDescriptor](pgdisplaydescriptor.md): A descriptor for a virtual display.
- [PGDisplay](pgdisplay.md): An object that provides display functionality to the guest operating system in a way that the host-side virtual machine app can intercept.
- [PGDisplayMode](pgdisplaymode.md): A description of a supported display mode.

# PGDisplayCoord_t (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Structure  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Coordinates that describe sizes or offsets within a 2D array of pixels.

## Declaration

```objectivec
typedef struct { ... } PGDisplayCoord_t;
```

## Topics

### Inspecting Coordinate Values

- [x](pgdisplaycoord_t/x.md): The horizontal coordinate value.
- [y](pgdisplaycoord_t/y.md): The vertical coordinate value.

## See Also

### Displays

- [PGDisplayDescriptor](pgdisplaydescriptor.md): A descriptor for a virtual display.
- [PGDisplay](pgdisplay.md): An object that provides display functionality to the guest operating system in a way that the host-side virtual machine app can intercept.
- [PGDisplayMode](pgdisplaymode.md): A description of a supported display mode.
