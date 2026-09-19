> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iohiddeviceinterface121/1493327-queryelementvalue

# queryElementValue

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.3+

## Declaration

```objectivec
IOReturn (*queryElementValue)(void *self, IOHIDElementCookie elementCookie, IOHIDEventStruct *valueEvent, uint32_t timeoutMS, IOHIDElementCallbackFunction callback, void *callbackTarget, void *callbackRefcon);
```
