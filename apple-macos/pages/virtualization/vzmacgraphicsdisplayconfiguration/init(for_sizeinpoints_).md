> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacgraphicsdisplayconfiguration/init(for:sizeinpoints:)](https://developer.apple.com/documentation/virtualization/vzmacgraphicsdisplayconfiguration/init(for:sizeinpoints:))

# init(for:sizeInPoints:) (Swift)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 12.0+

Create a display configuration suitable for showing on the specified screen.

## Declaration

```swift
convenience init(for screen: NSScreen, sizeInPoints: NSSize)
```

## Parameters

- `screen`: The screen on which you intend to present the [VZVirtualMachineView](../vzvirtualmachineview.md) for the display.
- `sizeInPoints`: The intended logical size of the display.

<a id="Discussion"></a>

## Discussion

The framework initializes the pixel dimensions and pixel density based on the specified screen and size. An instance of macOS running in the VM may not necessarily provide a display mode with a backing scale factor matching the specified screen.

## See Also

### Creating the display configuration

- [init(widthInPixels:heightInPixels:pixelsPerInch:)](init%28widthinpixels_heightinpixels_pixelsperinch_%29.md): Create a display configuration with the specified pixel dimensions and pixel density.

# initForScreen:sizeInPoints: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Create a display configuration suitable for showing on the specified screen.

## Declaration

```objectivec
- (instancetype) initForScreen:(NSScreen *) screen sizeInPoints:(NSSize) sizeInPoints;
```

## Parameters

- `screen`: The screen on which you intend to present the [VZVirtualMachineView](../vzvirtualmachineview.md) for the display.
- `sizeInPoints`: The intended logical size of the display.

<a id="Discussion"></a>

## Discussion

The framework initializes the pixel dimensions and pixel density based on the specified screen and size. An instance of macOS running in the VM may not necessarily provide a display mode with a backing scale factor matching the specified screen.

## See Also

### Creating the display configuration

- [initWithWidthInPixels:heightInPixels:pixelsPerInch:](init%28widthinpixels_heightinpixels_pixelsperinch_%29.md): Create a display configuration with the specified pixel dimensions and pixel density.
