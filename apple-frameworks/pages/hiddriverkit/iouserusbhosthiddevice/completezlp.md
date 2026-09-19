> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hiddriverkit/iouserusbhosthiddevice/completezlp

# CompleteZLP

**Interface language:** Objective-C

**Framework:** HIDDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · macOS

## Declaration

```objectivec
virtual void CompleteZLP(OSAction *action, IOReturn status, uint32_t actualByteCount, uint64_t completionTimestamp);
```

## See Also

### Configuring Private Settings

- [initPipes](initpipes.md)
- [getHIDDescriptorInfo](gethiddescriptorinfo.md)
- [copyStringAtIndex](copystringatindex.md)
