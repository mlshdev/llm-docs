> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchmain()](https://developer.apple.com/documentation/dispatch/dispatchmain())

# dispatchMain() (Swift)

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Executes blocks submitted to the main queue.

## Declaration

```swift
func dispatchMain() -> Never
```

<a id="discussion"></a>

## Discussion

This function “parks” the main thread and waits for blocks to be submitted to the main queue. Applications that call [UIApplicationMain(\_:\_:\_:\_:)](../uikit/uiapplicationmain%28________%29-1yub7.md) (iOS), [NSApplicationMain(\_:\_:)](https://developer.apple.com/documentation/appkit/nsapplicationmain%28_:_:%29) (macOS), or [CFRunLoopRun()](../corefoundation/cfrunlooprun%28%29.md) on the main thread must not call [dispatchMain()](dispatchmain%28%29.md).

This function never returns.

# dispatch_main (Objective-C)

**Framework:** Dispatch  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Executes blocks submitted to the main queue.

## Declaration

```objectivec
extern void dispatch_main();
```

<a id="discussion"></a>

## Discussion

This function “parks” the main thread and waits for blocks to be submitted to the main queue. Applications that call [UIApplicationMain](../uikit/uiapplicationmain%28________%29-1yub7.md) (iOS), [NSApplicationMain(\_:\_:)](https://developer.apple.com/documentation/appkit/nsapplicationmain%28_:_:%29) (macOS), or [CFRunLoopRun](../corefoundation/cfrunlooprun%28%29.md) on the main thread must not call [dispatch_main](dispatchmain%28%29.md).

This function never returns.
