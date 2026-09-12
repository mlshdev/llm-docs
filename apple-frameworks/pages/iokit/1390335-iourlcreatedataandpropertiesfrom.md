> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1390335-iourlcreatedataandpropertiesfrom](https://developer.apple.com/documentation/iokit/1390335-iourlcreatedataandpropertiesfrom)

# IOURLCreateDataAndPropertiesFromResource

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
Boolean IOURLCreateDataAndPropertiesFromResource(CFAllocatorRef alloc, CFURLRef url, CFDataRef *resourceData, CFDictionaryRef *properties, CFArrayRef desiredProperties, SInt32 *errorCode);
```
