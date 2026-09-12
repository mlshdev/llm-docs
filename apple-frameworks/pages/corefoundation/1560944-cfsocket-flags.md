> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/1560944-cfsocket-flags](https://developer.apple.com/documentation/corefoundation/1560944-cfsocket-flags)

# CFSocket Flags (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

Flags that can be set on a CFSocket object to control its behavior.

<a id="overview"></a>

## Overview

The flags for a CFSocket object are set with [CFSocketSetSocketFlags(\_:\_:)](cfsocketsetsocketflags%28____%29.md). To immediately enable or disable a callback, use [CFSocketEnableCallBacks(\_:\_:)](cfsocketenablecallbacks%28____%29.md) and [CFSocketDisableCallBacks(\_:\_:)](cfsocketdisablecallbacks%28____%29.md).

## Topics

### Constants

- [kCFSocketAutomaticallyReenableReadCallBack](kcfsocketautomaticallyreenablereadcallback.md)
- [kCFSocketAutomaticallyReenableAcceptCallBack](kcfsocketautomaticallyreenableacceptcallback.md)
- [kCFSocketAutomaticallyReenableDataCallBack](kcfsocketautomaticallyreenabledatacallback.md)
- [kCFSocketAutomaticallyReenableWriteCallBack](kcfsocketautomaticallyreenablewritecallback.md)
- [kCFSocketLeaveErrors](kcfsocketleaveerrors.md)
- [kCFSocketCloseOnInvalidate](kcfsocketcloseoninvalidate.md): When enabled using [CFSocketSetSocketFlags(\_:\_:)](cfsocketsetsocketflags%28____%29.md), the native socket associated with a CFSocket object is closed when the CFSocket object is invalidated. When disabled, the native socket remains open. This option is enabled by default.

## See Also

### Constants

- [CFSocketCallBackType](cfsocketcallbacktype.md): Types of socket activity that can cause the callback function of a CFSocket object to be called.
- [CFSocketError](cfsocketerror.md): Error codes for many CFSocket functions.

# CFSocket Flags (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

Flags that can be set on a CFSocket object to control its behavior.

<a id="overview"></a>

## Overview

The flags for a CFSocket object are set with [CFSocketSetSocketFlags](cfsocketsetsocketflags%28____%29.md). To immediately enable or disable a callback, use [CFSocketEnableCallBacks](cfsocketenablecallbacks%28____%29.md) and [CFSocketDisableCallBacks](cfsocketdisablecallbacks%28____%29.md).

## Topics

### Constants

- [kCFSocketAutomaticallyReenableReadCallBack](kcfsocketautomaticallyreenablereadcallback.md)
- [kCFSocketAutomaticallyReenableAcceptCallBack](kcfsocketautomaticallyreenableacceptcallback.md)
- [kCFSocketAutomaticallyReenableDataCallBack](kcfsocketautomaticallyreenabledatacallback.md)
- [kCFSocketAutomaticallyReenableWriteCallBack](kcfsocketautomaticallyreenablewritecallback.md)
- [kCFSocketLeaveErrors](kcfsocketleaveerrors.md)
- [kCFSocketCloseOnInvalidate](kcfsocketcloseoninvalidate.md): When enabled using [CFSocketSetSocketFlags](cfsocketsetsocketflags%28____%29.md), the native socket associated with a CFSocket object is closed when the CFSocket object is invalidated. When disabled, the native socket remains open. This option is enabled by default.

## See Also

### Constants

- [CFSocketCallBackType](cfsocketcallbacktype.md): Types of socket activity that can cause the callback function of a CFSocket object to be called.
- [CFSocketError](cfsocketerror.md): Error codes for many CFSocket functions.
