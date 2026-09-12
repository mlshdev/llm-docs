> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbinterfaceinterface182/1559792-usbinterfacegetstringindex](https://developer.apple.com/documentation/iokit/iousbinterfaceinterface182/1559792-usbinterfacegetstringindex)

# USBInterfaceGetStringIndex

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Returns the string index in the interface descriptor.

## Declaration

```objectivec
IOReturn (*USBInterfaceGetStringIndex)(void *self, UInt8 *si);
```

<a id="discussion"></a>

## Discussion

The interface does not have to be open to use this function.
