> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofwlocalisochport/1521431-printdclprogram

# printDCLProgram

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void printDCLProgram(const DCLCommand *dcl, UInt32 count, void (*printFN)(const char *format), unsigned int lineDelayMS);
```
