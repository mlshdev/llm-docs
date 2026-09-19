> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iousbhostpipe/1584490-rawbuffercontrolrequestcompletio

# rawBufferControlRequestCompletion

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+ (deprecated in 10.15.4)

## Declaration

```objectivec
static void rawBufferControlRequestCompletion(void *target, void *parameter, IOReturn status, uint32_t bytesTransferred);
```
