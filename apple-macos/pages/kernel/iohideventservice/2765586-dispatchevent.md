> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohideventservice/2765586-dispatchevent

# dispatchEvent

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+ (deprecated in 10.15.2)

Dispatches an event.

## Declaration

```objectivec
virtual void dispatchEvent(IOHIDEvent *event, IOOptionBits options);
```

## Parameters

- `event`: The IOHIDEvent to dispatch.
