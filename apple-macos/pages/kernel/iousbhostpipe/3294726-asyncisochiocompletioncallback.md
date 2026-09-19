> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostpipe/3294726-asyncisochiocompletioncallback

# asyncIsochIOCompletionCallback

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+ (deprecated in 10.15.4)

## Declaration

```objectivec
static void asyncIsochIOCompletionCallback(void *owner, void *parameter, IOReturn status, IOUSBHostIsochronousFrame *frameList);
```
