> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/debugassertoutputhandlerprocptr](https://developer.apple.com/documentation/coreservices/debugassertoutputhandlerprocptr)

# DebugAssertOutputHandlerProcPtr

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

## Declaration

```objectivec
typedef void (*DebugAssertOutputHandlerProcPtr)(OSType componentSignature, UInt32 options, const char *assertionString, const char *exceptionLabelString, const char *errorString, const char *fileName, long lineNumber, void *value, ConstStr255Param outputMsg);
```
