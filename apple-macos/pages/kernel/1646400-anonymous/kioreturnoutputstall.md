> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1646400-anonymous/kioreturnoutputstall

# kIOReturnOutputStall

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOReturnOutputStall = (kIOOutputStatusRetry    | kIOOutputCommandStall)
```

<a id="discussion"></a>

## Discussion

Stall the queue and retry the same packet when the queue is restarted.
