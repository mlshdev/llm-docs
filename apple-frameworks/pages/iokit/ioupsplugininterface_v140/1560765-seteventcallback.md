> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/ioupsplugininterface_v140/1560765-seteventcallback](https://developer.apple.com/documentation/iokit/ioupsplugininterface_v140/1560765-seteventcallback)

# setEventCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

## Declaration

```objectivec
IOReturn (*setEventCallback)(void *thisPointer, IOUPSEventCallbackFunction callback, void *callbackTarget, void *callbackRefcon);
```
