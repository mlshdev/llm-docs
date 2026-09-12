> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewireavccommand/1401694-writedone](https://developer.apple.com/documentation/kernel/iofirewireavccommand/1401694-writedone)

# writeDone

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void writeDone(void *refcon, IOReturn status, IOFireWireNub *device, IOFWCommand *fwCmd);
```
