> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewiresbp2login/1572201-fetchagentresetcompletestatic

# fetchAgentResetCompleteStatic

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void fetchAgentResetCompleteStatic(void *refcon, IOReturn status, IOFireWireNub *device, IOFWCommand *fwCmd);
```
