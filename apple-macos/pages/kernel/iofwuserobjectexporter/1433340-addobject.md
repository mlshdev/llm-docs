> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofwuserobjectexporter/1433340-addobject](https://developer.apple.com/documentation/kernel/iofwuserobjectexporter/1433340-addobject)

# addObject

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
IOReturn addObject(OSObject *obj, CleanupFunction cleanup, IOFireWireLib::UserObjectHandle *outHandle);
```
