> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1645951-anonymous/kiofwmustnotberoot](https://developer.apple.com/documentation/kernel/1645951-anonymous/kiofwmustnotberoot)

# kIOFWMustNotBeRoot

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOFWMustNotBeRoot = (1 << 6)
```

<a id="discussion"></a>

## Discussion

Attempt to prevent this device from being root, There is no guarentee Mac OS will succeed in preventing the device from being root.
