> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kcallinterfaceopenwithgate

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
