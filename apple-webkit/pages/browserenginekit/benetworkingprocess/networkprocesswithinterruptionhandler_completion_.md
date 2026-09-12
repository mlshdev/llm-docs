> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/benetworkingprocess/networkprocesswithinterruptionhandler:completion:](https://developer.apple.com/documentation/browserenginekit/benetworkingprocess/networkprocesswithinterruptionhandler:completion:)

# networkProcessWithInterruptionHandler:completion:

**Interface language:** Objective-C

**Framework:** BrowserEngineKit  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+

Launches a networking extension process asynchronously.

## Declaration

```objectivec
+ (void) networkProcessWithInterruptionHandler:(void (^)()) interruptionHandler completion:(void (^)(BENetworkingProcess *process, NSError *error)) completion;
```

## Parameters

- `interruptionHandler`: A block the system calls if the networking extension process exits abnormally.
- `completion`: A block the system calls when the process finishes launching.

<a id="discussion"></a>

## Discussion

Your browser app can run one instance of each of its networking extensions. The first time you call this method, the system launches your networking extension. If you subsequently call this method, or you call [networkProcessWithBundleID:interruptionHandler:completion:](networkprocesswithbundleid_interruptionhandler_completion_.md) with `nil` as the bundle identifier, your completion handler gets a reference to the same process.

The system guarantees that the process launched when it calls your completion handler.

This method is equivalent to calling [networkProcessWithBundleID:interruptionHandler:completion:](networkprocesswithbundleid_interruptionhandler_completion_.md), passing `nil` as the bundle identifier.

## See Also

### Creating and invalidating extension processes

- [networkProcessWithBundleID:interruptionHandler:completion:](networkprocesswithbundleid_interruptionhandler_completion_.md): Launches a networking extension process asynchronously.
- [invalidate](invalidate.md): Stops the networking process.
