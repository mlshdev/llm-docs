> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/compositorservices/cp_time_wait_until

# cp_time_wait_until

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Function  
**Availability:** macOS 26.0+ · visionOS 1.0+

Blocks the current thread until the specified time.

## Declaration

```objectivec
void cp_time_wait_until(cp_time_t time);
```

## Parameters

- `time`: The Mach absolute time at which to wake up the thread. Typically, you supply one of the predicted times associated with the current frame, such as the optimal input time.

## Mentioned In

- [Drawing fully immersive content using Metal](drawing-fully-immersive-content-using-metal.md)
