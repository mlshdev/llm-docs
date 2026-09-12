> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgcreatedevicewithdescriptor(_:)](https://developer.apple.com/documentation/paravirtualizedgraphics/pgcreatedevicewithdescriptor(_:))

# PGCreateDeviceWithDescriptor(\_:) (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 15.2+

## Declaration

```swift
func PGCreateDeviceWithDescriptor(_ descriptor: PGDeviceDescriptor) -> (any PGDevice)?
```

## Parameters

- `descriptor`: The device descriptor for the new device.

<a id="discussion"></a>

## Discussion

Create a new PGDevice implementation object based on the provided descriptor.

# PGCreateDeviceWithDescriptor (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 15.2+

## Declaration

```objectivec
extern id<PGDevice>PGCreateDeviceWithDescriptor(PGDeviceDescriptor *descriptor);
```

## Parameters

- `descriptor`: The device descriptor for the new device.

<a id="discussion"></a>

## Discussion

Create a new PGDevice implementation object based on the provided descriptor.
