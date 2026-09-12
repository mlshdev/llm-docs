> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdevice/newdisplay(with:port:serialnum:)](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdevice/newdisplay(with:port:serialnum:))

# newDisplay(with:port:serialNum:) (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Create a display from the specified descriptor and uniquifying parameters.

## Declaration

```swift
func newDisplay(with descriptor: PGDisplayDescriptor, port: Int, serialNum: UInt32) -> (any PGDisplay)?
```

## Parameters

- `descriptor`: The description of the new display.
- `port`: The port number on the accelerator for the device to use for the new display. Specify a unique port number for each display.
- `serialNum`: A number that uniquely identifies the display. Ensure that the display persists across multiple launches so that the guest compositor can maintain a consistent display layout.

<a id="return-value"></a>

## Return Value

A new display object, or `nil` if an error occurred.

# newDisplayWithDescriptor:port:serialNum: (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Create a display from the specified descriptor and uniquifying parameters.

## Declaration

```objectivec
- (id<PGDisplay>) newDisplayWithDescriptor:(PGDisplayDescriptor *) descriptor port:(NSUInteger) port serialNum:(uint32_t) serialNum;
```

## Parameters

- `descriptor`: The description of the new display.
- `port`: The port number on the accelerator for the device to use for the new display. Specify a unique port number for each display.
- `serialNum`: A number that uniquely identifies the display. Ensure that the display persists across multiple launches so that the guest compositor can maintain a consistent display layout.

<a id="return-value"></a>

## Return Value

A new display object, or `nil` if an error occurred.
