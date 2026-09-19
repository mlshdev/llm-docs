> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paravirtualizedgraphics/pgnewdevicewithdescriptor

# PGNewDeviceWithDescriptor

**Interface language:** Objective-C

**Framework:** Paravirtualized Graphics  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+

## Declaration

```objectivec
extern id<PGDevice>PGNewDeviceWithDescriptor(PGDeviceDescriptor *descriptor);
```

## Parameters

- `descriptor`: The device descriptor for the new device.

<a id="discussion"></a>

## Discussion

Create a new PGDevice implementation object based on the provided descriptor.
