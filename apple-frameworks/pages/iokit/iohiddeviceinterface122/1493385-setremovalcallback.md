> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohiddeviceinterface122/1493385-setremovalcallback

# setRemovalCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.3+

## Declaration

```objectivec
IOReturn (*setRemovalCallback)(void *self, IOHIDCallbackFunction removalCallback, void *removalTarget, void *removalRefcon);
```
