> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472095-preemptive_function_attribute_se](https://developer.apple.com/documentation/coreservices/1472095-preemptive_function_attribute_se)

# Preemptive Function Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for preemptive system software functions.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltMPCallableAPIsAttr](1472095-preemptive_function_attribute_se/gestaltmpcallableapisattr.md): The Gestalt selector passed to determine the availability of preemptive system software functions. The `Gestalt` function produces a 32-bit value that you should test to determine which what type of preemptive calls are allowed.
- [gestaltMPFileManager](1472095-preemptive_function_attribute_se/gestaltmpfilemanager.md): If this bit is set, you can call preemptively safe File Manager functions.
- [gestaltMPDeviceManager](1472095-preemptive_function_attribute_se/gestaltmpdevicemanager.md): If this bit is set, you can call preemptively safe Device Manager function.
- [gestaltMPTrapCalls](1472095-preemptive_function_attribute_se/gestaltmptrapcalls.md)
