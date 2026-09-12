> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofirewireavcsubunit/1553109-avccommandingeneration](https://developer.apple.com/documentation/kernel/iofirewireavcsubunit/1553109-avccommandingeneration)

# AVCCommandInGeneration

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual IOReturn AVCCommandInGeneration(UInt32 generation, const UInt8 *command, UInt32 cmdLen, UInt8 *response, UInt32 *responseLen);
```
