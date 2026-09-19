> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1556660-anonymous/kiohidoptionstypeseizedevice

# kIOHIDOptionsTypeSeizeDevice

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 18.4+ · macOS 10.3+

## Declaration

```objectivec
kIOHIDOptionsTypeSeizeDevice = 0x01
```

<a id="discussion"></a>

## Discussion

Used to open exclusive communication with the device. This will prevent the system and other clients from receiving events from the device.
