> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1645970-anonymous/sflt_extended_registry](https://developer.apple.com/documentation/kernel/1645970-anonymous/sflt_extended_registry)

# SFLT_EXTENDED_REGISTRY

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
SFLT_EXTENDED_REGISTRY = 0x08
```

<a id="discussion"></a>

## Discussion

Indicates that this socket filter wants to attach to all the sockets already present on the system. It will also receive notifications for these sockets.
