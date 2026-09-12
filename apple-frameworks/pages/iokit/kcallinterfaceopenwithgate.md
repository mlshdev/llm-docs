> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kcallinterfaceopenwithgate](https://developer.apple.com/documentation/iokit/kcallinterfaceopenwithgate)

# kCallInterfaceOpenWithGate

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

## Declaration

```objectivec
#define kCallInterfaceOpenWithGate
```

<a id="discussion"></a>

## Discussion

If the USB Device has this property, drivers for any of its interfaces will have their handleOpen method called while holding the workloop gate.
