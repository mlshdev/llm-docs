> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohidcompletionaction

# IOHIDCompletionAction

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

## Declaration

```objectivec
typedef void (*IOHIDCompletionAction)(void *target, void *parameter, IOReturn status, uint32_t bufferSizeRemaining);
```
