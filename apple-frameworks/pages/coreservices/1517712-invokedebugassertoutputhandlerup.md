> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1517712-invokedebugassertoutputhandlerup

# InvokeDebugAssertOutputHandlerUPP

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

## Declaration

```objectivec
void InvokeDebugAssertOutputHandlerUPP(OSType componentSignature, UInt32 options, const char *assertionString, const char *exceptionLabelString, const char *errorString, const char *fileName, long lineNumber, void *value, ConstStr255Param outputMsg, DebugAssertOutputHandlerUPP userUPP);
```
