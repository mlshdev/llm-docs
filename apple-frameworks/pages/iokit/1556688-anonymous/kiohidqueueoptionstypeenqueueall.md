> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1556688-anonymous/kiohidqueueoptionstypeenqueueall

# kIOHIDQueueOptionsTypeEnqueueAll

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 18.4+ · macOS 10.5+

## Declaration

```objectivec
kIOHIDQueueOptionsTypeEnqueueAll = 0x01
```

<a id="discussion"></a>

## Discussion

Force the IOHIDQueue to enqueue all events, relative or absolute, regardless of change.
