> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bewebcontentprocess/webcontentprocesswithinterruptionhandler:completion:](https://developer.apple.com/documentation/browserenginekit/bewebcontentprocess/webcontentprocesswithinterruptionhandler:completion:)

# webContentProcessWithInterruptionHandler:completion:

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

Launches a web content extension process asynchronously.

## Declaration

```objectivec
+ (void) webContentProcessWithInterruptionHandler:(void (^)()) interruptionHandler completion:(void (^)(BEWebContentProcess *process, NSError *error)) completion;
```

## Parameters

- `interruptionHandler`: A block the system calls if the web content extension process exits abnormally.
- `completion`: A block the system calls when the process finishes launching.

<a id="discussion"></a>

## Discussion

Your browser app can run multiple web content extension processes.

The system guarantees that the process launched when it calls your completion handler.

This method is equivalent to calling [webContentProcessWithBundleID:interruptionHandler:completion:](webcontentprocesswithbundleid_interruptionhandler_completion_.md), passing `nil` as the bundle identifier.

## See Also

### Creating and invalidating extension processes

- [webContentProcessWithBundleID:interruptionHandler:completion:](webcontentprocesswithbundleid_interruptionhandler_completion_.md): Launches a web content extension process asynchronously.
- [invalidate](invalidate.md): Stops the web content process.
