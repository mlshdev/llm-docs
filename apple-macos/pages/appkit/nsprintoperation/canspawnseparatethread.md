> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsprintoperation/canspawnseparatethread](https://developer.apple.com/documentation/appkit/nsprintoperation/canspawnseparatethread)

# canSpawnSeparateThread (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that determines whether the print operation is allowed to spawn a separate printing thread.

## Declaration

```swift
var canSpawnSeparateThread: Bool { get set }
```

## Parameters

- `canSpawnSeparateThread`: [true](https://developer.apple.com/documentation/swift/true) if the receiver is allowed to spawn a separate thread; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If `canSpawnSeparateThread` is [true](https://developer.apple.com/documentation/swift/true), an `NSThread` object is detached when the print panel is dismissed (or immediately, if the panel is not to be displayed). The new thread performs the print operation, so that control can return to your application. A thread is detached only if the print operation is run using the [runModal(for:delegate:didRun:contextInfo:)](runmodal%28for_delegate_didrun_contextinfo_%29.md) method. If `canSpawnSeparateThread` is [false](https://developer.apple.com/documentation/swift/false), the operation runs on the current thread, blocking the application until the operation completes.

If you send [canSpawnSeparateThread](canspawnseparatethread.md) to an `NSPrintOperation` object with an argument of [true](https://developer.apple.com/documentation/swift/true), then the delegate specified in a subsequent invocation of [runModal(for:delegate:didRun:contextInfo:)](runmodal%28for_delegate_didrun_contextinfo_%29.md) may be messaged in that spawned, non-main thread.

# canSpawnSeparateThread (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean value that determines whether the print operation is allowed to spawn a separate printing thread.

## Declaration

```objectivec
@property BOOL canSpawnSeparateThread;
```

## Parameters

- `canSpawnSeparateThread`: [true](https://developer.apple.com/documentation/swift/true) if the receiver is allowed to spawn a separate thread; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If `canSpawnSeparateThread` is [true](https://developer.apple.com/documentation/swift/true), an `NSThread` object is detached when the print panel is dismissed (or immediately, if the panel is not to be displayed). The new thread performs the print operation, so that control can return to your application. A thread is detached only if the print operation is run using the [runOperationModalForWindow:delegate:didRunSelector:contextInfo:](runmodal%28for_delegate_didrun_contextinfo_%29.md) method. If `canSpawnSeparateThread` is [false](https://developer.apple.com/documentation/swift/false), the operation runs on the current thread, blocking the application until the operation completes.

If you send [canSpawnSeparateThread](canspawnseparatethread.md) to an `NSPrintOperation` object with an argument of [true](https://developer.apple.com/documentation/swift/true), then the delegate specified in a subsequent invocation of [runOperationModalForWindow:delegate:didRunSelector:contextInfo:](runmodal%28for_delegate_didrun_contextinfo_%29.md) may be messaged in that spawned, non-main thread.
