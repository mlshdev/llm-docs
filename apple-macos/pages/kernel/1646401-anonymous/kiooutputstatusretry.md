> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1646401-anonymous/kiooutputstatusretry](https://developer.apple.com/documentation/kernel/1646401-anonymous/kiooutputstatusretry)

# kIOOutputStatusRetry

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOOutputStatusRetry = 0x0002
```

<a id="discussion"></a>

## Discussion

Target ran out of resources, and is unable to accept the packet. The ownership of the packet reverts back to the queue.
