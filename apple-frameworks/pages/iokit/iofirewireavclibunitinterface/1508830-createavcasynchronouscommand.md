> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclibunitinterface/1508830-createavcasynchronouscommand](https://developer.apple.com/documentation/iokit/iofirewireavclibunitinterface/1508830-createavcasynchronouscommand)

# createAVCAsynchronousCommand

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

## Declaration

```objectivec
IOReturn (*createAVCAsynchronousCommand)(void *self, const UInt8 *command, UInt32 cmdLen, IOFireWireAVCLibAsynchronousCommandCallback completionCallback, void *pRefCon, IOFireWireAVCLibAsynchronousCommand **ppCommandObject);
```
