> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iofirewireavclibunitinterface/1508807-avcasynchronouscommandreinitwith

# AVCAsynchronousCommandReinitWithCommandBytes

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

## Declaration

```objectivec
IOReturn (*AVCAsynchronousCommandReinitWithCommandBytes)(void *self, IOFireWireAVCLibAsynchronousCommand *pCommandObject, const UInt8 *command, UInt32 cmdLen);
```
