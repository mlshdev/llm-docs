> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corefoundation/kcfsocketautomaticallyreenablereadcallback

# kCFSocketAutomaticallyReenableReadCallBack (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
var kCFSocketAutomaticallyReenableReadCallBack: CFOptionFlags { get }
```

<a id="Discussion"></a>

## Discussion

When enabled using [CFSocketSetSocketFlags(\_:\_:)](cfsocketsetsocketflags%28____%29.md), the read callback is called every time the sockets has data to be read. When disabled, the read callback is called only once the next time data are available. The read callback is automatically reenabled by default.

## See Also

### Constants

- [kCFSocketAutomaticallyReenableAcceptCallBack](kcfsocketautomaticallyreenableacceptcallback.md)
- [kCFSocketAutomaticallyReenableDataCallBack](kcfsocketautomaticallyreenabledatacallback.md)
- [kCFSocketAutomaticallyReenableWriteCallBack](kcfsocketautomaticallyreenablewritecallback.md)
- [kCFSocketLeaveErrors](kcfsocketleaveerrors.md)
- [kCFSocketCloseOnInvalidate](kcfsocketcloseoninvalidate.md): When enabled using [CFSocketSetSocketFlags(\_:\_:)](cfsocketsetsocketflags%28____%29.md), the native socket associated with a CFSocket object is closed when the CFSocket object is invalidated. When disabled, the native socket remains open. This option is enabled by default.

# kCFSocketAutomaticallyReenableReadCallBack (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
kCFSocketAutomaticallyReenableReadCallBack
```

<a id="Discussion"></a>

## Discussion

When enabled using [CFSocketSetSocketFlags](cfsocketsetsocketflags%28____%29.md), the read callback is called every time the sockets has data to be read. When disabled, the read callback is called only once the next time data are available. The read callback is automatically reenabled by default.

## See Also

### Constants

- [kCFSocketAutomaticallyReenableAcceptCallBack](kcfsocketautomaticallyreenableacceptcallback.md)
- [kCFSocketAutomaticallyReenableDataCallBack](kcfsocketautomaticallyreenabledatacallback.md)
- [kCFSocketAutomaticallyReenableWriteCallBack](kcfsocketautomaticallyreenablewritecallback.md)
- [kCFSocketLeaveErrors](kcfsocketleaveerrors.md)
- [kCFSocketCloseOnInvalidate](kcfsocketcloseoninvalidate.md): When enabled using [CFSocketSetSocketFlags](cfsocketsetsocketflags%28____%29.md), the native socket associated with a CFSocket object is closed when the CFSocket object is invalidated. When disabled, the native socket remains open. This option is enabled by default.
