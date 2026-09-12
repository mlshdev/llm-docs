> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1542936-typekernelprocessid](https://developer.apple.com/documentation/coreservices/1542936-typekernelprocessid)

# typeKernelProcessID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

For specifying an application by UNIX process ID.

## Declaration

```objectivec
enum : DescType {
    ...
};
```

## Topics

### Constants

- [typeKernelProcessID](1542936-typekernelprocessid/typekernelprocessid.md): Indicates a descriptor containing a UNIX process ID. A process ID is similar to a PSN (processor serial number) but does not require a Process Manager connection. It is analogous to a 32-bit unsigned integer.
- [typeMachPort](1542936-typekernelprocessid/typemachport.md): Indicates a descriptor that specifies a Mach port.
