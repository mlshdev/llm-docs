> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iokerneldebugger/1434271-registerhandler](https://developer.apple.com/documentation/kernel/iokerneldebugger/1434271-registerhandler)

# registerHandler

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
static void registerHandler(IOService *target, IODebuggerTxHandler txHandler, IODebuggerRxHandler rxHandler, IODebuggerLinkStatusHandler linkUpHandler, IODebuggerSetModeHandler setModeHandler);
```
