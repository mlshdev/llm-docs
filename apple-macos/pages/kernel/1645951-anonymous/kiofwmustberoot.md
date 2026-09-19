> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1645951-anonymous/kiofwmustberoot

# kIOFWMustBeRoot

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOFWMustBeRoot = (1 << 5)
```

<a id="discussion"></a>

## Discussion

Attempt to make this device root, There is no guarentee Mac OS will succeed in making the device root.
