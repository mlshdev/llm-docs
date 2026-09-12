> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/1646400-anonymous/kioreturnoutputstall](https://developer.apple.com/documentation/kernel/1646400-anonymous/kioreturnoutputstall)

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
