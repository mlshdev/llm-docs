> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1510389-nodeflags/kiofwmustnotberoot

# kIOFWMustNotBeRoot

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```objectivec
kIOFWMustNotBeRoot = (1 << 6)
```

<a id="discussion"></a>

## Discussion

Attempt to prevent this device from being root, There is no guarentee Mac OS will succeed in preventing the device from being root.
