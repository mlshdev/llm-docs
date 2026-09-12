> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewirelibisochportgetsupportedcallback](https://developer.apple.com/documentation/iokit/iofirewirelibisochportgetsupportedcallback)

# IOFireWireLibIsochPortGetSupportedCallback

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.1+

## Declaration

```objectivec
typedef IOReturn (*IOFireWireLibIsochPortGetSupportedCallback)(IOFireWireLibIsochPortRef interface, IOFWSpeed *outMaxSpeed, UInt64 *outChanSupported);
```
