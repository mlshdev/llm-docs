> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1644502-anonymous/kiohidoptionstypeseizedevice](https://developer.apple.com/documentation/kernel/1644502-anonymous/kiohidoptionstypeseizedevice)

# kIOHIDOptionsTypeSeizeDevice

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOHIDOptionsTypeSeizeDevice = 0x01
```

<a id="discussion"></a>

## Discussion

Used to open exclusive communication with the device. This will prevent the system and other clients from receiving events from the device.
