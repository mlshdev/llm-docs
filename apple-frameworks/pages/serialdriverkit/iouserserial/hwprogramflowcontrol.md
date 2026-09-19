> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/serialdriverkit/iouserserial/hwprogramflowcontrol

# HwProgramFlowControl

**Interface language:** Objective-C

**Framework:** SerialDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

## Declaration

```objectivec
virtual kern_return_t HwProgramFlowControl(uint32_t arg, uint8_t xon, uint8_t xoff);
```
