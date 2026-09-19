> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewireavclibunitinterface/1508830-createavcasynchronouscommand

# createAVCAsynchronousCommand

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

## Declaration

```objectivec
IOReturn (*createAVCAsynchronousCommand)(void *self, const UInt8 *command, UInt32 cmdLen, IOFireWireAVCLibAsynchronousCommandCallback completionCallback, void *pRefCon, IOFireWireAVCLibAsynchronousCommand **ppCommandObject);
```
