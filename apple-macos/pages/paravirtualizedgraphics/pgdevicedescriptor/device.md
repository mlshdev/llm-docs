> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdevicedescriptor/device](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdevicedescriptor/device)

# device (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The Metal device object to use to back the virtual graphics device.

## Declaration

```swift
var device: (any MTLDevice)? { get set }
```

# device (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The Metal device object to use to back the virtual graphics device.

## Declaration

```objectivec
@property (nonatomic, retain, readwrite, nullable) id<MTLDevice> device;
```
