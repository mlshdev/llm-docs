> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472163-system_architecture_selectors](https://developer.apple.com/documentation/coreservices/1472163-system_architecture_selectors)

# System Architecture Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify the native system architecture.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltSysArchitecture](1472163-system_architecture_selectors/gestaltsysarchitecture.md): The selector you pass to the `Gestalt` function to determine the native system architecture.
- [gestalt68k](1472163-system_architecture_selectors/gestalt68k.md): If the `Gestalt` function returns `gestalt68k`, the system is a MC680x0 Macintosh.
- [gestaltPowerPC](1472163-system_architecture_selectors/gestaltpowerpc.md): If the `Gestalt` function returns `gestaltPowerPC`, the system is a PowerPC Macintosh.
- [gestaltIntel](1472163-system_architecture_selectors/gestaltintel.md): If the `Gestalt` function returns `gestaltIntel`, the system is is an Intel-based Macintosh.
- [gestaltArm](1472163-system_architecture_selectors/gestaltarm.md)
