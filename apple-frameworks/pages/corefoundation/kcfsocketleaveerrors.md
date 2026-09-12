> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfsocketleaveerrors](https://developer.apple.com/documentation/corefoundation/kcfsocketleaveerrors)

# kCFSocketLeaveErrors (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
var kCFSocketLeaveErrors: CFOptionFlags { get }
```

<a id="Discussion"></a>

## Discussion

Normally, the CFNetwork stack calls getsockopt(2) macOS Developer Tools Manual Page to read the error code from the socket prior to calling your write callback. This also has the effect of clearing any pending errors on the socket.

If this flag is set, this call is skipped so that you can check for specific socket errors in your write callback.

## See Also

### Constants

- [kCFSocketAutomaticallyReenableReadCallBack](kcfsocketautomaticallyreenablereadcallback.md)
- [kCFSocketAutomaticallyReenableAcceptCallBack](kcfsocketautomaticallyreenableacceptcallback.md)
- [kCFSocketAutomaticallyReenableDataCallBack](kcfsocketautomaticallyreenabledatacallback.md)
- [kCFSocketAutomaticallyReenableWriteCallBack](kcfsocketautomaticallyreenablewritecallback.md)
- [kCFSocketCloseOnInvalidate](kcfsocketcloseoninvalidate.md): When enabled using [CFSocketSetSocketFlags(\_:\_:)](cfsocketsetsocketflags%28____%29.md), the native socket associated with a CFSocket object is closed when the CFSocket object is invalidated. When disabled, the native socket remains open. This option is enabled by default.

# kCFSocketLeaveErrors (Objective-C)

**Framework:** Core Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
kCFSocketLeaveErrors
```

<a id="Discussion"></a>

## Discussion

Normally, the CFNetwork stack calls getsockopt(2) macOS Developer Tools Manual Page to read the error code from the socket prior to calling your write callback. This also has the effect of clearing any pending errors on the socket.

If this flag is set, this call is skipped so that you can check for specific socket errors in your write callback.

## See Also

### Constants

- [kCFSocketAutomaticallyReenableReadCallBack](kcfsocketautomaticallyreenablereadcallback.md)
- [kCFSocketAutomaticallyReenableAcceptCallBack](kcfsocketautomaticallyreenableacceptcallback.md)
- [kCFSocketAutomaticallyReenableDataCallBack](kcfsocketautomaticallyreenabledatacallback.md)
- [kCFSocketAutomaticallyReenableWriteCallBack](kcfsocketautomaticallyreenablewritecallback.md)
- [kCFSocketCloseOnInvalidate](kcfsocketcloseoninvalidate.md): When enabled using [CFSocketSetSocketFlags](cfsocketsetsocketflags%28____%29.md), the native socket associated with a CFSocket object is closed when the CFSocket object is invalidated. When disabled, the native socket remains open. This option is enabled by default.
