> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/bewebcontentprocess/webcontentprocesswithbundleid:interruptionhandler:completion:](https://developer.apple.com/documentation/browserenginekit/bewebcontentprocess/webcontentprocesswithbundleid:interruptionhandler:completion:)

# webContentProcessWithBundleID:interruptionHandler:completion:

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Type Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS 14.3+

Launches a web content extension process asynchronously.

## Declaration

```objectivec
+ (void) webContentProcessWithBundleID:(NSString *) bundleID interruptionHandler:(void (^)()) interruptionHandler completion:(void (^)(BEWebContentProcess *process, NSError *error)) completion;
```

## Parameters

- `bundleID`: The bundle identifier of the web content extension to launch, or `nil` to use the default bundle identifier for this app’s web content extension.
- `interruptionHandler`: A block the system calls if the web content extension process exits abnormally.
- `completion`: A block the system calls when the process finishes launching.

<a id="discussion"></a>

## Discussion

Your browser app can run multiple web content extension processes.

The system guarantees that the process launched when it calls your completion handler.

## See Also

### Creating and invalidating extension processes

- [webContentProcessWithInterruptionHandler:completion:](webcontentprocesswithinterruptionhandler_completion_.md): Launches a web content extension process asynchronously.
- [invalidate](invalidate.md): Stops the web content process.
