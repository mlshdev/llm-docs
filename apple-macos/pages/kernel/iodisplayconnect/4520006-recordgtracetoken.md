> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iodisplayconnect/4520006-recordgtracetoken

# recordGTraceToken

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

## Declaration

```objectivec
void recordGTraceToken(const uint16_t line, const uint16_t fnID, const uint8_t fnType, const uint16_t tag1, const uint64_t arg1, const uint16_t tag2, const uint64_t arg2, const uint16_t tag3, const uint64_t arg3);
```
