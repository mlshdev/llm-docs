> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1644504-anonymous/kiohidqueueoptionstypeenqueueall

# kIOHIDQueueOptionsTypeEnqueueAll

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Enumeration Case  
**Availability:** macOS 10.12+

## Declaration

```objectivec
kIOHIDQueueOptionsTypeEnqueueAll = 0x01
```

<a id="discussion"></a>

## Discussion

Force the IOHIDQueue to enqueue all events, relative or absolute, regardless of change.
