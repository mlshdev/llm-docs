> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofirewireavcsubunit/1553109-avccommandingeneration

# AVCCommandInGeneration

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn AVCCommandInGeneration(UInt32 generation, const UInt8 *command, UInt32 cmdLen, UInt8 *response, UInt32 *responseLen);
```
