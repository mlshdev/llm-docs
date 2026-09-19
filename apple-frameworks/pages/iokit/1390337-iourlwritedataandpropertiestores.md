> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1390337-iourlwritedataandpropertiestores

# IOURLWriteDataAndPropertiesToResource

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
Boolean IOURLWriteDataAndPropertiesToResource(CFURLRef url, CFDataRef dataToWrite, CFDictionaryRef propertiesToWrite, int32_t *errorCode);
```
