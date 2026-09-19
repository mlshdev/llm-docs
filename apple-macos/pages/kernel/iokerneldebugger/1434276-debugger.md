> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iokerneldebugger/1434276-debugger

# debugger

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static IOKernelDebugger * debugger(IOService *target, IODebuggerTxHandler txHandler, IODebuggerRxHandler rxHandler, IODebuggerLinkStatusHandler linkStatusHandler, IODebuggerSetModeHandler setModeHandler);
```
